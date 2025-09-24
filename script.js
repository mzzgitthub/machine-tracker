const machineSelect = document.getElementById("machineDropdown");
const partSelect = document.getElementById("partDropdown");
const issueSelect = document.getElementById("issueDropdown");
const verificationList = document.getElementById("verificationList");
const solutionList = document.getElementById("solutionList");

const topMachine = document.getElementById("topMachine");
const topPart = document.getElementById("topPart");
const topIssue = document.getElementById("topIssue");

const counts = {
  machines: {},
  parts: {},
  issues: {}
};

function populateParts(machine) {
  partSelect.innerHTML = "";
  issueSelect.innerHTML = "";
  verificationList.innerHTML = "";
  solutionList.innerHTML = "";

  const parts = Object.keys(machineData[machine] || {});
  parts.forEach(part => {
    const option = document.createElement("option");
    option.value = part;
    option.textContent = part;
    partSelect.appendChild(option);
  });

  if (parts.length > 0) {
    partSelect.value = parts[0];
    populateIssues(machine, parts[0]);
  }
}

function populateIssues(machine, part) {
  issueSelect.innerHTML = "";
  verificationList.innerHTML = "";
  solutionList.innerHTML = "";

  const issues = Object.keys(machineData[machine]?.[part] || {});
  issues.forEach(issue => {
    const option = document.createElement("option");
    option.value = issue;
    option.textContent = issue;
    issueSelect.appendChild(option);
  });

  if (issues.length > 0) {
    issueSelect.value = issues[0];
    showDetails(machine, part, issues[0]);
  }
}

function showDetails(machine, part, issue) {
  verificationList.innerHTML = "";
  solutionList.innerHTML = "";

  const entries = machineData[machine]?.[part]?.[issue] || [];

  entries.forEach(entry => {
    entry.verification?.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      verificationList.appendChild(li);
    });

    entry.solution?.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      solutionList.appendChild(li);
    });
  });
}

function updateTopCounts(type, value) {
  if (!value) return;
  counts[type][value] = (counts[type][value] || 0) + 1;
  const top = Object.entries(counts[type]).sort((a, b) => b[1] - a[1])[0];

  if (type === "machines") topMachine.textContent = `🔥 Top Machine: ${top[0]} (${top[1]})`;
  if (type === "parts") topPart.textContent = `🔥 Top Part: ${top[0]} (${top[1]})`;
  if (type === "issues") topIssue.textContent = `🔥 Top Issue: ${top[0]} (${top[1]})`;
}

machineSelect.addEventListener("change", () => {
  populateParts(machineSelect.value);
  updateTopCounts("machines", machineSelect.value);
});

partSelect.addEventListener("change", () => {
  populateIssues(machineSelect.value, partSelect.value);
  updateTopCounts("parts", partSelect.value);
});

issueSelect.addEventListener("change", () => {
  showDetails(machineSelect.value, partSelect.value, issueSelect.value);
  updateTopCounts("issues", issueSelect.value);
});

Object.keys(machineData).forEach(machine => {
  const option = document.createElement("option");
  option.value = machine;
  option.textContent = machine;
  machineSelect.appendChild(option);
});

if (machineSelect.options.length > 0) {
  machineSelect.value = machineSelect.options[0].value;
  populateParts(machineSelect.value);
  updateTopCounts("machines", machineSelect.value);
}
