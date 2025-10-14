import json, os, getpass
VOTERS_FILE = "updated_data.json" 
CANDIDATES_FILE = "candidates.json"
VOTES_FILE = "votes.json"

def load_json(filename, default):
    if not os.path.exists(filename):
        with open(filename, "w") as f: json.dump(default, f)
        return default
    with open(filename, "r") as f:
        return json.load(f)

def save_json(filename, data):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)


voters = load_json(VOTERS_FILE, [])
candidates = load_json(CANDIDATES_FILE, [])
votes = load_json(VOTES_FILE, {})


#LOGIN VERIFIENG(VOTERS)
def voter_login():
    voter_id = input("Enter Voter ID: ").strip().upper()
    phone = input("Enter Phone: ").strip()
    for v in voters:
        if v["voter_id"] == voter_id and v["phone"] == phone:
            print(f"Welcome {v['name']}!")
            return voter_id
    print("Invalid Voter ID or Phone!")
    return None


#VOTER MANAGEMENT(ADMIN)
def view_voters():
    print("\n--- Registered Voters ---")
    for v in voters[:10]:
        print(f"{v['voter_id']} | {v['name']} | {v['address']}")
    print("... (showing 10 of total", len(voters), ")")



#CANDIDATE MANAGEMENT(ADMIN)
def add_candidate():
    name = input("Enter candidate name: ").strip()
    if name in candidates:
        print("Candidate already exists!")
    else:
        candidates.append(name)
        save_json(CANDIDATES_FILE, candidates)
        print("Candidate added successfully!")

def view_candidates():
    print("\n--- Candidates List ---")
    for c in candidates:
        print("-", c)



#RESULT MANAGEMENT(ADMIN)
def show_results():
    print("\n===== Voting Results =====")
    counts = {}
    for c in candidates:
        counts[c] = list(votes.values()).count(c)
    for name, count in counts.items():
        print(f"{name}: {count} votes")
    print("===========================")