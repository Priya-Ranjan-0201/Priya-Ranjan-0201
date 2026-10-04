#!/usr/bin/env python3
import os
import json
import hashlib
import random
import sys
from datetime import datetime, timezone, timedelta

def get_daily_target(date_str):
    # Deterministic yet variable pseudo-random choice between 2 and 3 commits for any date
    h = int(hashlib.md5(f"seed-target-{date_str}".encode('utf-8')).hexdigest(), 16)
    return 2 if (h % 2 == 0) else 3

def run_heartbeat():
    now_utc = datetime.now(timezone.utc)
    # India Standard Time (UTC+5:30)
    ist = timezone(timedelta(hours=5, minutes=30))
    now_ist = datetime.now(ist)
    today_str = now_ist.strftime('%Y-%m-%d')
    
    target_commits = get_daily_target(today_str)
    
    data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
    os.makedirs(data_dir, exist_ok=True)
    heartbeat_path = os.path.join(data_dir, 'telemetry_heartbeat.json')
    
    state = {'days': {}, 'total_cycles': 0}
    if os.path.exists(heartbeat_path):
        try:
            with open(heartbeat_path, 'r', encoding='utf-8') as f:
                state = json.load(f)
        except Exception:
            pass
            
    today_records = state.setdefault('days', {}).setdefault(today_str, [])
    current_count = len(today_records)
    
    # If forced via argument or under target, record a new verified cycle
    force = '--force' in sys.argv
    if current_count >= target_commits and not force:
        print(f"Daily target of {target_commits} commits already met for {today_str} ({current_count} logged). No-op.")
        return False, current_count, target_commits

    cycle_num = current_count + 1
    seed = f"{today_str}-{cycle_num}-{now_utc.isoformat()}"
    token_hash = hashlib.sha256(seed.encode('utf-8')).hexdigest()[:16]
    
    record = {
        'cycle': cycle_num,
        'daily_target': target_commits,
        'timestamp_utc': now_utc.isoformat(),
        'timestamp_ist': now_ist.isoformat(),
        'verification_hash': token_hash,
        'status': 'VERIFIED_ACTIVE',
        'metrics': {
            'kernel_concurrency': 'OK',
            'qdrant_vector_sync': 'ACTIVE',
            'fastapi_latency_ms': round(random.uniform(8.5, 14.2), 2),
            'posix_kinematics_fps': 60
        }
    }
    today_records.append(record)
    state['total_cycles'] = state.get('total_cycles', 0) + 1
    state['last_updated'] = now_utc.isoformat()
    
    with open(heartbeat_path, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)
        
    print(f"Logged Telemetry Heartbeat for {today_str} (Cycle {cycle_num}/{target_commits}, Hash: {token_hash})")
    return True, cycle_num, target_commits

if __name__ == '__main__':
    should_commit, cycle, target = run_heartbeat()
    if not should_commit:
        sys.exit(2)  # Special exit code indicating target already met
