import pandas as pd
import json
import os

# === Paths ===
base_dir = os.path.dirname(os.path.abspath(__file__))
root_dir = os.path.dirname(base_dir)
data_path = os.path.join(root_dir, "data", "machine_issues_log.xlsx")
js_output_path = os.path.join(root_dir, "js", "machineData.js")

# === Load Excel ===
df = pd.read_excel(data_path)
df.columns = df.columns.str.strip()

# === Build nested dictionary ===
data = {}
for _, row in df.iterrows():
    machine = str(row["Machine Name"]).strip()
    part = str(row["Part"]).strip()
    issue = str(row["Issue"]).strip()
    verification = str(row["Verification"]).strip()
    solution = str(row["Solution"]).strip()

    data.setdefault(machine, {}).setdefault(part, {}).setdefault(issue, []).append({
        "verification": [v.strip() for v in verification.split(";") if v.strip()],
        "solution": [s.strip() for s in solution.split(";") if s.strip()]
    })

# === Save as JS file ===
js_output = "const machineData = " + json.dumps(data, indent=2) + ";"

with open(js_output_path, "w", encoding="utf-8") as f:
    f.write(js_output)

print(f"✅ JS file updated: {js_output_path}")
