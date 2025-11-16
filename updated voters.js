function login() {
    const voterId = document.getElementById('voterId').value.trim();
    if (voterId === "") {
        alert("Please enter your Voter ID");
        return;
    }

    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('votingSection').style.display = 'block';
}


function submitVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (!selectedCandidate) {
        alert("Please select a candidate");
        return;
    }

    document.getElementById('votingSection').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}

window.onload = function() {
    document.getElementById('loginSection').style.display = 'block';
    document.getElementById('votingSection').style.display = 'none';
    document.getElementById('confirmation').style.display = 'none';
};

