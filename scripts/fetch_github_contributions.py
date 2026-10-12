import urllib.request
import re
import json

url = "https://github.com/users/Priya-Ranjan-0201/contributions"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8")
        
    match = re.search(r'([0-9,]+)\s+contributions\s+in\s+the\s+last\s+year', html)
    total_contribs = match.group(1) if match else "Unknown"
    
    # Extract day cells: data-date and data-level or tooltips
    # In GitHub html: <td ... data-date="2026-09-01" data-level="2" ...> or similar
    cells = re.findall(r'data-date="([0-9-]+)"[^>]*data-level="([0-9])"', html)
    if not cells:
        cells = re.findall(r'data-level="([0-9])"[^>]*data-date="([0-9-]+)"', html)
        cells = [(c[1], c[0]) for c in cells]
        
    print(f"Total contributions in last year: {total_contribs}")
    print(f"Total cells: {len(cells)}")
    active = [c for c in cells if c[1] != '0']
    print(f"Active days: {len(active)}")
    
    # Save to json
    with open("scripts/real_contributions.json", "w", encoding="utf-8") as f:
        json.dump({"total": total_contribs, "cells": cells}, f, indent=2)
        
except Exception as e:
    print("Error:", e)
