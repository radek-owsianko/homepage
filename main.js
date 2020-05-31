let firstName = "Radek";
let age = 34;

console.log(firstName);
console.log(age);
console.log(`Czesc Nazywam sie ${firstName} i mam ${age} lat`);


const emptyParagraph = document.querySelector(".week-summary__destription--js");

emptyParagraph.innerHTML = `A to jest tekst, który nagle powstał z udziałem JavaScriptu:)`;

const welcome = (firstName,age) => {
    console.log(`Witaj Drogi odwiedzający. Mam na imię ${firstName} i mam ${age} lat.`);
}
welcome(`Radek`,35);

const result = (myNumber) => {
    console.log(`Dostałam liczbę ${myNumber}`);
    return myNumber*5;
}

const result_2 = result(age);
console.log(result_2);

function createContent (querySelectorContenet, content) {
    const element = document.querySelector(querySelectorContenet);
    element.innerHTML = content;
}

createContent(".main_header__h1--js", `Radzio Włądzio ku ku ku ka:) ha ha`);


const change_img = (takeImg, newContent) => {
    const something = document.querySelector(takeImg);
    something.innerHTML = newContent;
}

change_img (".main_header__h1--js",`A to jest nowy Content stworzony za pomocą JAvaScrptu:)`);