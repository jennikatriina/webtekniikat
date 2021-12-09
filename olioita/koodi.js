let person = {
    fname: "Reima",
    lname: "Riihimäki",
    age: 22
}

// Lisätään pituus olioon
person.length = "168";

// Muutetaan olion ikä
person.age = 25;

console.log(person);

let persons = [
    {
        fname: "Tiina",
        lname: "Karvonen",
        age: 34
    },
    {
        fname: "Lasse",
        lname: "Haverinen",
        age: 28
    },
    person
];

console.log(persons);

// Tulostetaan jokaisen olion etunimet
persons.forEach(p => console.log(p.fname));




let copyPerson = person;

// tämä muuttaa alkuperäistä oliota
copyPerson.fname = "Reiska";

console.log(person);





function testi(p) {
    p.age = 50;
}

//funktio muokkaa oliota
testi(person);

console.log(person.age);


// luo uuden olion, ei vaikuta aiempaan olioon
function toinenTesti(p) {
    p = {
        fname: "Timo",
        lname: "Timoteus",
        age: 12
    }
}