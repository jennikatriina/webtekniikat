// Jenni Lohi

// Haetaan käyttäjän antamat osallistujien määrä sekä aktiviteetin tyyppi
let participants = document.getElementById("participantsAmount");
let type = document.getElementById("type");

// Luodaan funktio jolla voidaan muuttaa elementtien näkyvyyttä
function toggleVisibility(id, display) {
    document.getElementById(id).style.display = display;
}

// Luodaan funktio, jolla joko laitetaan piiloon osallistuja-divi tai laitetaan se näkyviin; jos käyttäjä valitsee "social" -tyyppisen aktiviteetin, laitetaan osallistujien määrän valinta näkyviin
function showParticipants() {
    if (type.value == "social") {
        toggleVisibility("participants", "block");
    } else {
        toggleVisibility("participants", "none");
        participants.value = 1;
    }
}

// Laitetaan aluksi piiloon toiset divit sekä refresh-nappi
toggleVisibility("two", "none");
toggleVisibility("oneEdited", "none");
toggleVisibility("refresh", "none");

showParticipants();

// Ensimmäiselle napille funktio, jolla haetaan aktiviteetti
function get_activity() {
    // Jos osallistujia on alle 1 ja yli 4, näytetään error-viesti ja lopetetaan funktio
    if (participants.value >= 5 || participants.value <= 0) {
        document.getElementById("error").innerHTML = "Please select from 1 to 4 participants.";
        return;
    
    // Jos määrät ok, haetaan XML-serveristä tietoja
    } else {
        // Tallennetaan muuttujaan uusi XML-pyyntö
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            // Jos kaikki ok, 
            if (this.readyState == 4 && this.status == 200) {
                // Tallennetaan saadut tiedot muuttujaan
                let activity = JSON.parse(this.response);
                // Lisätään aktiviteetti näkyviin käyttäjälle
                document.getElementById("whatToDoP").innerHTML = activity.activity + "!";
                // Laitetaan refresh-nappi esiin
                toggleVisibility("refresh", "inline-block");
            }
        }
    };

    // Haetaan käyttäjän antamien tietojen mukaan aktiviteetti ja osallistujien määrä
    let xml = "https://www.boredapi.com/api/activity?" + "participants=" + participants.value + "&type=" + type.value;


    xmlhttp.open("GET", xml, true);
    xmlhttp.send();

    // Eka divi pois näkyvistä, toiset näkyviin
    toggleVisibility("one", "none");
    toggleVisibility("oneEdited", "block");
    toggleVisibility("two", "block");
    
    // Näytetään käyttäjälle annetut kriteerit vielä
    document.getElementById("typeResult").innerHTML = type.value;
    document.getElementById("participantResult").innerHTML = participants.value;
}

// Luodaan funktio "Start over"-napille sitä varten että käyttäjä haluaa aloittaa koko homman alusta
function startOver() {
    location.reload();
}

// Jos käyttäjä haluaa samoilla tiedoilla uuden tehtävän, luodaan sitä varten "Get another"-napille funktio jolla haetaan uudet tiedot XML-serveristä
function refresh() {
    test = "";
    document.getElementById("whatToDoP").innerHTML = "Refreshing...";
    toggleVisibility("refresh", "none");
    get_activity();
}