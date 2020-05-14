const firstName = "Radek";
const age = 34;

console.log(firstName);
console.log(age);
console.log(`Czesc Nazywam sie ${firstName} i mam ${age} lat`);
alert(`Hej jestem ${firstName} i mam ${age} lata`);

const emptyParagraph = document.querySelector(".week-summary__destription--js");

emptyParagraph.innerHTML = `A to jest tekst, który nagle powstał z udziałem JavaScriptu:)`;