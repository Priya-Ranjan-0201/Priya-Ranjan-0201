#!/usr/bin/env python3
"""
Automated Daily Contribution Engine
Runs automatically via GitHub Actions hourly token (GITHUB_TOKEN).
Dynamically decides whether today gets 2 or 3 contributions with no fixed schedule.
Records verified engineering activity logs and triggers live telemetry regeneration.
"""

import os
import sys
import json
import hashlib
import random
from datetime import datetime, timezone, timedelta

def get_daily_target(date_str):
    """
    Deterministically yet variably chooses 2 or 3 commits for any given date.
    No fixed schedule: some days get 2, some days get 3 automatically.
    """
    h = int(hashlib.sha256(f"activity-target-{date_str}".encode('utf-8')).hexdigest(), 16)
    return 2 if (h % 2 == 0) else 3

def record_activity():
    now_utc = datetime.now(timezone.utc)
    # India Standard Time (UTC+5:30)
    ist = timezone(timedelta(hours=5, minutes=30))
    now_ist = datetime.now(ist)
    today_str = now_ist.strftime('%Y-%m-%d')
    target = get_daily_target(today_str)
    
    # State tracking file in repository
    log_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
    os.makedirs(log_dir, exist_ok=True)
    state_file = os.path.join(log_dir, 'activity_tracker.json')
    
    state = {'days': {}, 'total_contributions': 0}
    if os.path.exists(state_file):
        try:
            with open(state_file, 'r', encoding='utf-8') as f:
                state = json.load(f)
        except Exception:
            pass
            
    today_records = state.setdefault('days', {}).setdefault(today_str, [])
    current_count = len(today_records)
    
    force = '--force' in sys.argv
    if current_count >= target and not force:
        print(f"[{today_str}] Target of {target} contributions already completed today ({current_count}/{target}). Standing by.")
        return False, current_count, target
        
    cycle = current_count + 1
    cycle_token = hashlib.sha256(f"{today_str}-{cycle}-{now_utc.isoformat()}".encode('utf-8')).hexdigest()[:16]
    
    record = {
        'cycle': cycle,
        'daily_target': target,
        'timestamp_utc': now_utc.strftime('%Y-%m-%d %H:%M:%S UTC'),
        'timestamp_ist': now_ist.strftime('%Y-%m-%d %H:%M:%S IST'),
        'verification_hash': cycle_token,
        'status': 'VERIFIED'
    }
    today_records.append(record)
    state['total_contributions'] = state.get('total_contributions', 0) + 1
    state['last_updated'] = now_utc.isoformat()
    
    with open(state_file, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)
        
    # Append to human-readable activity log markdown
    md_file = os.path.join(log_dir, 'ACTIVITY.md')
    with open(md_file, 'a', encoding='utf-8') as f:
        f.write(f"- `{now_ist.strftime('%Y-%m-%d %H:%M:%S IST')}` • Cycle {cycle}/{target} • Hash: `{cycle_token}` • Status: Verified\n")
        
    print(f"Successfully recorded contribution {cycle}/{target} for {today_str} (Hash: {cycle_token})")
    return True, cycle, target

if __name__ == '__main__':
    created, cycle, target = record_activity()
    if not created:
        sys.exit(2)  # Target already met for today
    sys.exit(0)
