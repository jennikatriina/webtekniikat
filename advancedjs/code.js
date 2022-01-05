let participants = document.getElementById("participantsAmount");
let type = document.getElementById("type");

function toggleVisibility(id, display) {
        document.getElementById(id).style.display = display;
    }


toggleVisibility("two", "none");
toggleVisibility("oneEdited", "none");
toggleVisibility("refresh", "none");

function showParticipants() {
    if (type.value == "social") {
        toggleVisibility("participants", "block");
    } else {
        toggleVisibility("participants", "none");
        participants.value = 1;
    }

    
}


showParticipants();


function get_activity() {

    if (participants.value >= 5 || participants.value <= 0) {
        document.getElementById("error").innerHTML = "Please select from 1 to 4 participants.";
        return;

    } else { 
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let activity = JSON.parse(this.response);

                console.log(activity)

                document.getElementById("whatToDoP").innerHTML = activity.activity + "!";

                /*if (this.response == '{"error":"No activity found with the specified parameters"}') {
                document.getElementById("error").innerHTML = "Error"; } */
                toggleVisibility("refresh", "inline-block");
            }
        }
    };


    let test = "https://www.boredapi.com/api/activity?" + "participants=" + participants.value + "&type=" + type.value;


    xmlhttp.open("GET", test, true);
    xmlhttp.send();
    
    toggleVisibility("one", "none");
    toggleVisibility("oneEdited", "block");
    toggleVisibility("two", "block");

    document.getElementById("typeResult").innerHTML = type.value;
    document.getElementById("participantResult").innerHTML = participants.value;
}

function startOver() {
    location.reload();
}

function refresh() {
    test = "";
    document.getElementById("whatToDoP").innerHTML = "Refreshing...";
    toggleVisibility("refresh", "none");
    get_activity();
}