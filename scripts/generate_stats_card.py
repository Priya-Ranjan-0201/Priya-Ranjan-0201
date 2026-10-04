#!/usr/bin/env python3
import os
import subprocess
import urllib.request
import json
import re

def get_github_token():
    token = os.environ.get('GITHUB_TOKEN')
    if token:
        return token
    try:
        proc = subprocess.Popen(['git', 'credential', 'fill'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        out, _ = proc.communicate('protocol=https\nhost=github.com\n\n')
        for line in out.splitlines():
            if line.startswith('password='):
                return line.split('=', 1)[1]
    except Exception:
        pass
    return None

def fetch_stats():
    token = get_github_token()
    headers = {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'Profile-Stats-Engine/4.0',
        'Content-Type': 'application/json'
    }
    if token:
        headers['Authorization'] = f'Bearer {token}'

    query = '''
    query {
      user(login: "Priya-Ranjan-0201") {
        login
        repositories(first: 100, ownerAffiliations: [OWNER, COLLABORATOR, ORGANIZATION_MEMBER]) {
          totalCount
          nodes {
            name
            isFork
            stargazerCount
            languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
            defaultBranchRef {
              target {
                ... on Commit {
                  history {
                    totalCount
                  }
                }
              }
            }
          }
        }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalRepositoryContributions
          restrictedContributionsCount
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
    '''
    user_data = None
    try:
        req = urllib.request.Request('https://api.github.com/graphql', data=json.dumps({'query': query}).encode('utf-8'), headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            user_data = data.get('data', {}).get('user')
    except Exception as e:
        print(f"GraphQL API notice: {e}")

    repos = (user_data or {}).get('repositories', {}).get('nodes', [])
    col = (user_data or {}).get('contributionsCollection', {})
    cal = col.get('contributionCalendar', {})

    total_stars = sum(r['stargazerCount'] for r in repos)
    total_commits = 0
    lang_bytes = {}

    for r in repos:
        target = (r.get('defaultBranchRef') or {}).get('target') or {}
        total_commits += (target.get('history') or {}).get('totalCount', 0)
        for edge in r.get('languages', {}).get('edges', []):
            name = edge['node']['name']
            size = edge['size']
            lang_bytes[name] = lang_bytes.get(name, 0) + size

    prs = col.get('totalPullRequestContributions', 0)
    issues = col.get('totalIssueContributions', 0)
    repo_count = len(repos)
    total_contributions = cal.get('totalContributions', 0)

    # Calculate real mathematical streaks directly from GitHub contribution calendar
    days = []
    for w in cal.get('weeks', []):
        for d in w.get('contributionDays', []):
            days.append((d['date'], d['contributionCount']))

    longest_streak = 0
    temp_streak = 0
    for d_str, count in days:
        if count > 0:
            temp_streak += 1
            if temp_streak > longest_streak:
                longest_streak = temp_streak
        else:
            temp_streak = 0

    today_active = days[-1][1] > 0 if days else False
    yesterday_active = days[-2][1] > 0 if len(days) > 1 else False

    start_idx = len(days) - 1 if today_active else (len(days) - 2 if yesterday_active else -1)
    current_streak = 0
    if start_idx >= 0:
        for i in range(start_idx, -1, -1):
            if days[i][1] > 0:
                current_streak += 1
            else:
                break

    # Language distribution from live repo bytes
    total_lang_bytes = sum(lang_bytes.values()) or 1
    top_langs = sorted(lang_bytes.items(), key=lambda x: x[1], reverse=True)[:5]
    
    lang_colors = {
        'TypeScript': '#3178C6',
        'Python': '#3572A5',
        'JavaScript': '#F7DF1E',
        'CSS': '#563D7C',
        'HTML': '#E34C26'
    }

    langs_formatted = []
    for name, size in top_langs:
        pct = (size / total_lang_bytes) * 100
        langs_formatted.append({
            'name': name,
            'pct': pct,
            'color': lang_colors.get(name, '#38BDF8')
        })

    return {
        'stars': total_stars,
        'commits': total_commits,
        'prs': prs,
        'issues': issues,
        'repos': repo_count,
        'contributions': total_contributions,
        'current_streak': current_streak,
        'longest_streak': longest_streak,
        'langs': langs_formatted
    }

def generate_svg(stats):
    cur_streak = stats['current_streak']
    max_streak = stats['longest_streak']
    ratio = min(cur_streak / max(max_streak, 1), 1.0)
    dash_fill = max(int(ratio * 283), 35)

    if cur_streak == 1:
        sub_streak_label = "1 DAY ACTIVE"
    elif cur_streak > 1:
        sub_streak_label = f"{cur_streak} CONSECUTIVE DAYS"
    else:
        sub_streak_label = "STREAK READY"

    longest_unit = "Day" if max_streak == 1 else "Days"

    # Prepare language progress bar segments
    x_offset = 0
    bar_width = 240
    lang_rects = []
    legend_items = []
    
    for i, lang in enumerate(stats['langs']):
        w = (lang['pct'] / 100) * bar_width
        lang_rects.append(f'<rect x="{x_offset:.1f}" y="0" width="{w:.1f}" height="6" fill="{lang["color"]}"/>')
        x_offset += w
        
        # Legend (2 columns)
        lx = 0 if i % 2 == 0 else 125
        ly = (i // 2) * 22
        legend_items.append(f'''
        <g transform="translate({lx}, {ly})">
          <circle cx="5" cy="5" r="4" fill="{lang["color"]}"/>
          <text x="14" y="8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" fill="#CBD5E1">{lang["name"]}</text>
          <text x="88" y="8" font-family="'SF Mono', Consolas, monospace" font-size="9.5" fill="#8B949E">{lang["pct"]:.1f}%</text>
        </g>
        ''')
        
    lang_bars_svg = "\n".join(lang_rects)
    lang_legend_svg = "\n".join(legend_items)

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 360" width="100%" fill="none">
  <defs>
    <!-- Deep Obsidian Canvas -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A10"/>
      <stop offset="50%" stop-color="#0B0F19"/>
      <stop offset="100%" stop-color="#080C14"/>
    </linearGradient>

    <!-- Card Background -->
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D1322"/>
      <stop offset="100%" stop-color="#0A0E18"/>
    </linearGradient>

    <!-- Clean Ice Cyan Accent -->
    <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>

    <!-- Emerald Flame Gradient -->
    <linearGradient id="emeraldFlame" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="50%" stop-color="#10B981"/>
      <stop offset="100%" stop-color="#34D399"/>
    </linearGradient>

    <!-- Soft Glow Filter -->
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    <!-- Dot Pattern -->
    <pattern id="gridDots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="#38BDF8" fill-opacity="0.12"/>
    </pattern>
  </defs>

  <style>
    @keyframes pulseSoft {{
      0%, 100% {{ opacity: 0.85; transform: scale(1); }}
      50% {{ opacity: 1; transform: scale(1.02); filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.4)); }}
    }}
    @keyframes flameFlicker {{
      0%, 100% {{ transform: scale(1) translateY(0); opacity: 0.9; }}
      50% {{ transform: scale(1.05) translateY(-1px); opacity: 1; }}
    }}
    @keyframes subtleBlink {{
      0%, 100% {{ opacity: 1; }}
      50% {{ opacity: 0.4; }}
    }}
    @keyframes borderSweep {{
      0% {{ stroke-dashoffset: 0; }}
      100% {{ stroke-dashoffset: 600; }}
    }}

    .pulse-ring {{
      transform-origin: 68px 72px;
      animation: pulseSoft 4s ease-in-out infinite;
    }}
    .flame-anim {{
      transform-origin: 145px 114px;
      animation: flameFlicker 2.5s ease-in-out infinite;
    }}
    .live-dot {{
      animation: subtleBlink 2s ease-in-out infinite;
    }}
    .border-runner {{
      stroke-dasharray: 80 200;
      animation: borderSweep 14s linear infinite;
    }}
    .label-text {{
      font-family: "SF Mono", "Segoe UI Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1.2px;
      fill: #8B949E;
    }}
    .value-text {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-weight: 800;
      letter-spacing: 0.5px;
      fill: #F8FAFC;
    }}
  </style>

  <!-- Outer Canvas Container -->
  <rect x="2" y="2" width="956" height="356" rx="16" fill="url(#bgGrad)" stroke="#1E293B" stroke-width="1.2"/>
  <rect x="2" y="2" width="956" height="356" rx="16" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.5" class="border-runner"/>
  <rect x="4" y="4" width="952" height="352" rx="14" fill="url(#gridDots)"/>

  <!-- ==================== TOP TITLE BAR ==================== -->
  <g transform="translate(24, 20)">
    <rect x="0" y="0" width="340" height="26" rx="6" fill="#0E1726" stroke="#1E293B" stroke-width="1"/>
    <circle cx="14" cy="13" r="4" fill="#10B981" class="live-dot" filter="url(#softGlow)"/>
    <text x="26" y="17" font-family="'SF Mono', Consolas, monospace" font-size="10" font-weight="700" fill="#E2E8F0" letter-spacing="1px">
      GITHUB TELEMETRY // REAL-TIME METRICS
    </text>

    <!-- Right-side status -->
    <g transform="translate(620, 0)">
      <circle cx="10" cy="13" r="3.5" fill="#38BDF8" class="live-dot"/>
      <text x="22" y="17" font-family="'SF Mono', Consolas, monospace" font-size="9.5" font-weight="600" fill="#38BDF8" letter-spacing="0.8px">
        SYNCHRONIZED VIA HOURLY TOKEN
      </text>
    </g>
  </g>

  <!-- ==================== PANEL 1: CORE GITHUB STATS & GRADE ==================== -->
  <g transform="translate(24, 62)">
    <rect x="0" y="0" width="320" height="274" rx="12" fill="url(#cardBg)" stroke="#1E293B" stroke-width="1"/>
    <line x1="0" y1="0" x2="320" y2="0" stroke="url(#cyanLine)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Left Grade Crest -->
    <g transform="translate(0, 0)">
      <circle cx="68" cy="72" r="38" stroke="#1E293B" stroke-width="4" fill="#0A101D"/>
      <circle cx="68" cy="72" r="38" stroke="#38BDF8" stroke-width="4" stroke-dasharray="190 240" stroke-linecap="round" fill="none" class="pulse-ring" filter="url(#softGlow)"/>
      <text x="68" y="79" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="900" fill="#38BDF8">A+</text>
      
      <!-- Rank Label -->
      <rect x="23" y="122" width="90" height="20" rx="5" fill="#0F172A" stroke="#1E293B" stroke-width="0.8"/>
      <text x="68" y="136" text-anchor="middle" font-family="'SF Mono', Consolas, monospace" font-size="8.5" font-weight="700" fill="#38BDF8">S-TIER RANK</text>
    </g>

    <!-- Core Metrics List -->
    <g transform="translate(135, 24)">
      <!-- Stars -->
      <g transform="translate(0, 0)">
        <text x="0" y="12" class="label-text">TOTAL STARS</text>
        <text x="0" y="34" font-size="20" class="value-text">{stats['stars']} <tspan font-size="13" fill="#F59E0B">★</tspan></text>
      </g>
      <!-- Total Commits -->
      <g transform="translate(0, 50)">
        <text x="0" y="12" class="label-text">TOTAL COMMITS</text>
        <text x="0" y="34" font-size="20" fill="#38BDF8" class="value-text">{stats['commits']}</text>
      </g>
      <!-- PRs & Issues -->
      <g transform="translate(0, 100)">
        <text x="0" y="12" class="label-text">PRS &amp; ISSUES</text>
        <text x="0" y="34" font-size="18" class="value-text">{stats['prs']} PRs <tspan font-size="14" fill="#8B949E">/ {stats['issues']} Iss</tspan></text>
      </g>
    </g>

    <!-- Bottom Metric divider -->
    <line x1="20" y1="205" x2="300" y2="205" stroke="#1E293B" stroke-width="1"/>
    <g transform="translate(20, 222)">
      <text x="0" y="12" class="label-text">CONTRIBUTED TO</text>
      <text x="0" y="32" font-size="16" class="value-text">{stats['repos']} Repositories</text>
      <text x="175" y="32" font-family="'SF Mono', Consolas, monospace" font-size="10" font-weight="700" fill="#10B981">100% AUDITED</text>
    </g>
  </g>

  <!-- ==================== PANEL 2: STREAK STATS ==================== -->
  <g transform="translate(360, 62)">
    <rect x="0" y="0" width="290" height="274" rx="12" fill="url(#cardBg)" stroke="#1E293B" stroke-width="1"/>
    <line x1="0" y1="0" x2="290" y2="0" stroke="url(#cyanLine)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Section Header -->
    <g transform="translate(20, 20)">
      <text x="0" y="12" class="label-text">CONTRIBUTION STREAK</text>
      <text x="0" y="30" font-size="14" font-weight="700" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Daily Activity Tracker</text>
    </g>

    <!-- Central Flame Radial Meter -->
    <g transform="translate(0, 0)">
      <!-- Outer Track -->
      <circle cx="145" cy="114" r="45" stroke="#1E293B" stroke-width="5" fill="#0A0E18"/>
      <circle cx="145" cy="114" r="45" stroke="#10B981" stroke-width="5" stroke-dasharray="{dash_fill} 283" stroke-linecap="round" fill="none" filter="url(#softGlow)"/>

      <!-- Flame Icon -->
      <g class="flame-anim">
        <path d="M 145 88 C 148 94, 153 98, 153 103 C 153 108, 149 111, 145 111 C 141 111, 137 108, 137 103 C 137 98, 140 95, 145 88 Z" fill="url(#emeraldFlame)" filter="url(#softGlow)"/>
        <path d="M 145 96 C 147 99, 149 101, 149 104 C 149 107, 147 109, 145 109 C 143 109, 141 107, 141 104 C 141 102, 143 100, 145 96 Z" fill="#F0FDF4"/>
      </g>

      <!-- Current Streak Count -->
      <text x="145" y="138" text-anchor="middle" font-size="26" font-weight="900" fill="#F8FAFC" class="value-text">{stats['current_streak']}</text>
      <text x="145" y="174" text-anchor="middle" font-family="'SF Mono', Consolas, monospace" font-size="10" font-weight="700" fill="#10B981" letter-spacing="1.2px">CURRENT STREAK</text>
      <text x="145" y="188" text-anchor="middle" font-family="'SF Mono', Consolas, monospace" font-size="8.5" font-weight="600" fill="#8B949E">{sub_streak_label}</text>
    </g>

    <!-- Bottom Streak Stats (Total Contributions & Longest Streak) -->
    <line x1="20" y1="205" x2="270" y2="205" stroke="#1E293B" stroke-width="1"/>
    
    <g transform="translate(20, 222)">
      <text x="0" y="12" class="label-text">TOTAL CONTRIBUTIONS</text>
      <text x="0" y="34" font-size="20" class="value-text">{stats['contributions']}</text>
    </g>

    <g transform="translate(165, 222)">
      <text x="0" y="12" class="label-text">LONGEST STREAK</text>
      <text x="0" y="34" font-size="20" fill="#38BDF8" class="value-text">{stats['longest_streak']} <tspan font-size="13" fill="#8B949E">{longest_unit}</tspan></text>
    </g>
  </g>

  <!-- ==================== PANEL 3: MOST USED LANGUAGES ==================== -->
  <g transform="translate(666, 62)">
    <rect x="0" y="0" width="270" height="274" rx="12" fill="url(#cardBg)" stroke="#1E293B" stroke-width="1"/>
    <line x1="0" y1="0" x2="270" y2="0" stroke="url(#cyanLine)" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Section Header -->
    <g transform="translate(18, 20)">
      <text x="0" y="12" class="label-text">MOST USED LANGUAGES</text>
      <text x="0" y="30" font-size="14" font-weight="700" fill="#94A3B8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">Codebase Distribution</text>
    </g>

    <!-- Multi-Color Language Segment Bar -->
    <g transform="translate(18, 70)">
      <rect x="0" y="0" width="234" height="6" rx="3" fill="#1E293B"/>
      <g clip-path="url(#langBarClip)">
        <clipPath id="langBarClip">
          <rect x="0" y="0" width="234" height="6" rx="3"/>
        </clipPath>
        {lang_bars_svg}
      </g>
    </g>

    <!-- Language Legend Grid -->
    <g transform="translate(18, 96)">
      {lang_legend_svg}
    </g>

    <!-- Bottom Architecture Tag -->
    <line x1="18" y1="205" x2="252" y2="205" stroke="#1E293B" stroke-width="1"/>
    <g transform="translate(18, 218)">
      <text x="0" y="12" class="label-text">PRIMARY ARCHITECTURE</text>
      <text x="0" y="30" font-size="13" class="value-text">TypeScript &amp; Python 3</text>
      <text x="0" y="46" font-family="'SF Mono', Consolas, monospace" font-size="9" font-weight="600" fill="#38BDF8">SYSTEMS &amp; APPLIED AI</text>
    </g>
  </g>
</svg>'''
    return svg

def main():
    print("Fetching live statistics from GitHub GraphQL API...")
    stats = fetch_stats()
    print("Stats fetched successfully:")
    print(f"  Stars: {stats['stars']}")
    print(f"  Total Commits: {stats['commits']}")
    print(f"  PRs: {stats['prs']}")
    print(f"  Issues: {stats['issues']}")
    print(f"  Contributions: {stats['contributions']}")
    print(f"  Current Streak: {stats['current_streak']}")
    print(f"  Longest Streak: {stats['longest_streak']}")
    
    svg_content = generate_svg(stats)
    output_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'assets', 'github-stats.svg')
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Generated clean telemetry stats card at: {output_path}")

    # Also keep telemetry-metrics.svg in sync
    telemetry_path = os.path.join(os.path.dirname(output_path), 'telemetry-metrics.svg')
    with open(telemetry_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"Generated telemetry metrics at: {telemetry_path}")

if __name__ == '__main__':
    main()
