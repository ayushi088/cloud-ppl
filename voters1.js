function login() {
    const voterId = document.getElementById('voterId').value;
    if(voterId.trim() === "") {
        alert("Please enter your Voter ID");
        return;
    }
    
    document.getElementById('votingSection').style.display = 'block';
}

function submitVote() {
    const candidates = document.getElementsByName('candidate');
    let selected = null;
    for(let c of candidates) {
        if(c.checked) {
            selected = c.value;
            break;
        }
    }
    if(selected === null) {
        alert("Please select a candidate");
        return;
    }

  
    document.getElementById('votingSection').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
    console.log(`Voter selected: ${selected}`);
}
