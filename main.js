let firstName = "Radek";
let age = 34;

console.log(firstName);
console.log(age);
console.log(`Czesc Nazywam sie ${firstName} i mam ${age} lat`);


const emptyParagraph = document.querySelector(".week-summary__destription--js");

emptyParagraph.innerHTML = `A to jest tekst, który nagle powstał z udziałem JavaScriptu:)`;

const welcome = (firstName,age) => {
    alert(`Witaj Drogi odwiedzający. Mam na imię ${firstName} i mam ${age} lat.`);
}
welcome(`Radek`,35);