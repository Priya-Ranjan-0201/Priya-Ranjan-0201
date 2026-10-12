import urllib.request
import json
import sys

headers = {'User-Agent': 'Mozilla/5.0'}

# 1. Fetch user data
req = urllib.request.Request('https://api.github.com/users/Priya-Ranjan-0201', headers=headers)
with urllib.request.urlopen(req) as resp:
    user = json.loads(resp.read().decode('utf-8'))

# 2. Fetch repos
req = urllib.request.Request('https://api.github.com/users/Priya-Ranjan-0201/repos?per_page=100', headers=headers)
with urllib.request.urlopen(req) as resp:
    repos = json.loads(resp.read().decode('utf-8'))

# 3. Output clean JSON
result = {
    'user': user,
    'repos': []
}

for r in repos:
    result['repos'].append({
        'name': r['name'],
        'html_url': r['html_url'],
        'description': r['description'],
        'language': r['language'],
        'stars': r['stargazers_count'],
        'forks': r['forks_count'],
        'created_at': r['created_at'],
        'updated_at': r['updated_at'],
        'topics': r.get('topics', []),
        'fork': r['fork']
    })

with open('scripts/real_profile_data.json', 'w', encoding='utf-8') as f:
    json.dump(result, f, indent=2, ensure_ascii=False)

print(f"Successfully saved data for {len(repos)} repos.")
