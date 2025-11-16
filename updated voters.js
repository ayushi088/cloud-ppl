function login() {
    const voterId = document.getElementById('voterId').value.trim();
    if (voterId === "") {
        alert("Please enter your Voter ID");
        return;
    }

    localStorage.setItem('loggedIn', 'true');
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('votingSection').style.display = 'block';
}

function submitVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (!selectedCandidate) {
        alert("Please select a candidate");
        return;
    }
    localStorage.setItem('vote', selectedCandidate.value);   
    document.getElementById('votingSection').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}
window.onload = function() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('votingSection').style.display = 'block';
    }
};
