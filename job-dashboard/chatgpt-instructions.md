# jobs.json changes for the job dashboard (schema 1.1.0)

Paste everything below the line into the ChatGPT project or task that refreshes the job search each week.

---

The weekly `jobs.json` feeds a dashboard. The dashboard has a "Currently open" / "All time" toggle. "All time" shows every role that was ever in the report, including closed ones. To support that, apply these changes to the export from now on. Keep everything else in schema 1.0.0 as is.

## 1. `archived_jobs` is the permanent history

- Never delete an entry from `archived_jobs`. Carry every entry forward to each new export unchanged, unless rule 4 applies
- When a role from the last export's `jobs[]` is gone (listing removed, 404, redirected, or no longer posted), move it to `archived_jobs` in the same export. Do not drop it
- Each `archived_jobs` entry must be the **full job object** as it was last reported while open. Include every field a `jobs[]` entry has: `id`, `company_id`, `title`, `application_url`, `primary_region`, `location_text`, `work_arrangement`, `level`, `compensation`, `report_tag`, `is_new`, `first_reported_on`, `last_reported_on`, `verification`, `fit_summary`, `biggest_risk`, `role_family`, `sources`
- Then add these closure fields:

| Field | Type | Meaning |
|---|---|---|
| `lifecycle_status` | `"closed"` or `"unverified"` | `"closed"` when the listing is confirmed gone. `"unverified"` when it was missing from your checks but the closure is not confirmed |
| `closed_on` | `YYYY-MM-DD` | The report date when you first detected the role as gone. Never change it later |
| `close_reason` | string | A short reason with evidence, for example "Greenhouse listing returns 404" |

- Set `is_new` to `false` on archived entries

## 2. Backfill the two existing archived entries

`anthropic-5302966008` and `rivian-29677` hold only a few fields today. Fill in the full job fields from the report where they last appeared. Rename `removed_on` to `closed_on` and `reason` to `close_reason`, and set `lifecycle_status` from `status` (`reported_closed` becomes `"closed"`). If you can't recover a field, set it to `null`, but always include `primary_region` and `compensation`.

## 3. Keep companies that have only closed roles

If a company has no open roles but appears in `archived_jobs`, keep it in `companies[]` with `summary.reported_open_count: 0`. The dashboard looks up company names and regions there.

## 4. Reopened roles

If an archived role is posted again, move it back into `jobs[]` with the **same `id`**, and remove it from `archived_jobs`. The same id must never appear in both lists.

## 5. Dates and IDs

- Set `first_reported_on` on every job, open or archived. It is null on all jobs today. Use the earliest report date you know of. If you don't know it, use this report's date for new roles
- Keep company and job IDs stable across refreshes. The dashboard uses `id` to decide whether a role is open or closed

## 6. Region order

Set `display.region_order` to `["la", "sd", "other_socal", "sf", "elsewhere"]`. Use `other_socal` for Southern California outside LA and San Diego, for example Irvine, Orange County, Santa Barbara and the Inland Empire.

## 7. Longer descriptions and downsides

The dashboard shows `fit_summary` and `biggest_risk` in full on every card. Today they are one short line each. Write them longer, for every role in every export, open and archived:

- `fit_summary`: 3 to 5 sentences, about 350 to 600 characters. Say what the company or team builds, what the role owns day to day, the main tech stack, and why it fits the candidate's background. Be concrete. Use facts from the listing, not generic praise
- `biggest_risk`: 2 to 3 sentences, about 200 to 400 characters. The dashboard labels it "Potential downsides". Name the concrete drawbacks: a pay cut against the candidate's current comp, an on-site or relocation requirement, a level below Staff, unclear scope, company stability, or a long interview process. Keep the field name `biggest_risk`

## 8. Salary is base only

`base_min`, `base_max` and `base_midpoint` are annual base salary only. The dashboard labels them "Base". If a listing gives only total comp or OTE, set the base fields to `null` and describe the total in `compensation.bonus` or `compensation.equity` as text. Never put total comp in the base fields.

## 9. Level labels and comp hygiene

- `level.label` is shown on every card, so keep it short. Use exactly one of: `"Senior"`, `"Staff"`, `"Senior Staff"`, `"Principal"`, `"Unlevelled"`
- Set `level.is_inferred` to `true` when the listing doesn't state the level. The dashboard adds "(inferred)" itself, so don't write "Inferred" in the label
- Put any nuance in a new `level.note` string, for example "Google L8", "player-coach", "flat IC structure" or "potentially below current level". Use `null` when there is nothing to add
- Recheck `compensation.bonus` and `compensation.equity` against the listing each run. Never carry text like "(previously reported)". Use `"Offered"` only when the listing mentions equity without detail
- `primary_region` is the region of the office the candidate would most likely work from. When a listing names several offices, list the in-region office first in `location_text`

## 10. Version

Set `schema_version` to `"1.1.0"`. Update `meta.complete_history` to `true` once rules 1 to 4 are in place and the backfill is done.

## Example archived entry

```json
{
  "id": "rivian-29677",
  "company_id": "rivian",
  "title": "Staff Software Engineer, Enterprise Services",
  "application_url": "https://careers.rivian.com/careers-home/jobs/29677",
  "primary_region": "other_socal",
  "location_text": "Irvine, CA",
  "work_arrangement": "hybrid",
  "level": { "label": "Staff", "is_inferred": false },
  "compensation": { "currency": "USD", "period": "year", "base_min": 180000, "base_max": 240000, "base_midpoint": 210000, "is_approximate": false, "salary_location": null, "bonus": null, "equity": null, "source_url": "https://careers.rivian.com/careers-home/jobs/29677" },
  "report_tag": "PREVIOUSLY REPORTED",
  "is_new": false,
  "first_reported_on": "2026-09-14",
  "last_reported_on": "2026-09-28",
  "verification": { "last_verified_on": "2026-10-05", "evidence": "listing_404", "note": null },
  "fit_summary": "…",
  "biggest_risk": "…",
  "role_family": "technical_ic",
  "sources": [{ "url": "https://careers.rivian.com/careers-home/jobs/29677", "kind": "application", "retrieved_on": "2026-09-28" }],
  "lifecycle_status": "closed",
  "closed_on": "2026-10-05",
  "close_reason": "Listing returns 404"
}
```

The values in this example are placeholders. Don't copy them.
