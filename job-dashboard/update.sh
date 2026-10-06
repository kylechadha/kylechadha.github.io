#!/usr/bin/env bash
# Validate the latest jobs.json (default ~/Downloads/jobs.json), copy it here, commit, and push.
set -euo pipefail

src="${1:-$HOME/Downloads/jobs.json}"
dir="$(cd "$(dirname "$0")" && pwd)"

python3 - "$src" <<'PY'
import json, sys
d = json.load(open(sys.argv[1]))
jobs, cos = d.get("jobs"), d.get("companies")
assert isinstance(jobs, list) and jobs, "jobs[] missing or empty"
assert isinstance(cos, list), "companies[] missing"
missing = {j.get("company_id") for j in jobs} - {c.get("id") for c in cos}
assert not missing, f"jobs reference unknown companies: {missing}"
both = {j.get("id") for j in jobs} & {a.get("id") for a in d.get("archived_jobs") or []}
if both: print(f"WARN: ids in both jobs and archived_jobs (shown as open): {both}")
print(f"OK: {len(jobs)} jobs, {len(cos)} companies, report {d.get('report_date')}")
PY

cp "$src" "$dir/jobs.json"
cd "$dir"
git add jobs.json
if git diff --cached --quiet -- jobs.json; then echo "No change"; exit 0; fi
git commit -m "Job dashboard: data for $(python3 -c 'import json; print(json.load(open("jobs.json")).get("report_date", "?"))')" -- jobs.json
git push
