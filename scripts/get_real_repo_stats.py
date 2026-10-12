import urllib.request
import json

headers = {"User-Agent": "Mozilla/5.0"}

with open("scripts/real_profile_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

repos = data["repos"]
total_commits = 0
languages_bytes = {}

for r in repos:
    repo_name = r["name"]
    # Get commits
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/Priya-Ranjan-0201/{repo_name}/commits?per_page=100", headers=headers)
        with urllib.request.urlopen(req) as resp:
            commits = json.loads(resp.read().decode("utf-8"))
            count = len(commits)
            total_commits += count
            print(f"Repo {repo_name}: {count} commits")
    except Exception as e:
        print(f"Error fetching commits for {repo_name}: {e}")
        
    # Get languages
    try:
        req = urllib.request.Request(f"https://api.github.com/repos/Priya-Ranjan-0201/{repo_name}/languages", headers=headers)
        with urllib.request.urlopen(req) as resp:
            langs = json.loads(resp.read().decode("utf-8"))
            for l, b in langs.items():
                languages_bytes[l] = languages_bytes.get(l, 0) + b
    except Exception as e:
        print(f"Error fetching languages for {repo_name}: {e}")

print("Total Commits across repos:", total_commits)
print("Language bytes:", languages_bytes)

# Calculate percentages
total_bytes = sum(languages_bytes.values())
lang_percentages = {}
if total_bytes > 0:
    for l, b in sorted(languages_bytes.items(), key=lambda x: x[1], reverse=True):
        lang_percentages[l] = round((b / total_bytes) * 100, 1)
print("Language percentages:", lang_percentages)

with open("scripts/real_repo_stats.json", "w", encoding="utf-8") as f:
    json.dump({
        "total_commits": total_commits,
        "languages_bytes": languages_bytes,
        "lang_percentages": lang_percentages
    }, f, indent=2)
