async function addVoter() {
    const name = document.getElementById("voterName").value;
    const voterID = document.getElementById("voterID").value;

    const res = await fetch("/api/add_voter", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name, voterID})
    });

    const data = await res.json();
    alert(data.message);
    viewVoters();
}

async function removeVoter() {
    const voterID = document.getElementById("removeVoterID").value;

    const res = await fetch("/api/remove_voter", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({voterID})
    });

    const data = await res.json();
    alert(data.message);
    viewVoters();
}

async function viewVoters() {
    const res = await fetch("/api/view_voters");
    const voters = await res.json();
    const ul = document.getElementById("votersList");
    ul.innerHTML = "";

    voters.forEach(v => {
        const li = document.createElement("li");
        li.textContent = `${v.name} (${v.voterID}) - Voted: ${v.hasVoted ? "Yes" : "No"}`;
        ul.appendChild(li);
    });
}

async function viewResults() {
    const res = await fetch("/api/view_results");
    const results = await res.json();
    const ul = document.getElementById("resultsList");
    ul.innerHTML = "";

    for (const candidate in results) {
        const li = document.createElement("li");
        li.textContent = `${candidate}: ${results[candidate]} votes`;
        ul.appendChild(li);
    }
}

// Load voters initially
viewVoters();
