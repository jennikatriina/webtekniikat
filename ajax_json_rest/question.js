// Let's create a HTTP request
let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://yesno.wtf/api/",true);
// send request
xmlhttp.send();

// Let's create an event handler
xmlhttp.onreadystatechange=function() {
    // Now an onreadystatechange event has occured
    if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // Response is ready
        // Let's parse JSON response
        let answerObject = JSON.parse(xmlhttp.response);
        //Let's add textual answer
        document.getElementById("answer").innerHTML= answerObject.answer;
        // Let's add an image
        document.getElementById("answer-img").setAttribute('src', answerObject.image);
    }
}