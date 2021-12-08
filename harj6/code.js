
// Luodaan persons-olio
let persons = [
    {
        fname: "Reima",
        age:25
    },
    {
        fname: "Liisa",
        age: 17
    },
    {
        fname: "Sami",
        age: 14
    }
]

// one person = p
let children = persons.filter( p => p.age < 18);

// Lisätään ikää
let grown = persons.map( p => {
    p.age++;
    return p;
});


let word = "s";

let filteredPersons = persons.filter(p => p.fname.includes(word));

let names = persons.map(p => p.fname);