let number = 2;
let test = "Muuttujan number arvo + 6 on " + (number + 6);



/*let test2 = `
    & Muuttujan number 
    arvo + 6 on ${ number + 6 } `;

document.write("Tästä alkaa testitulostus:");
document.write(test);
document.write(test2);*/

 //document.cookie="loadCount=1";

let cookie = document.cookie;
let loadCount = 0;

document.write("Sivu ladattu" + loadCount + " kertaa");

// Evästeiden käsittely (kopioitu ja muokattu wsschoolista)
function setCookie(cname, cvalue, exdays) {
    document.cookie = cname + "=" + cvalue + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let cookieArray = document.cookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
      let c = cookieArray[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }