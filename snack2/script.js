const randomNumber = Math.floor(Math.random() * 100) + 1;

let userChoice;

do {

    userChoice = Number(prompt("Inserisci un numero da 1 a 100"))

    if (userChoice > randomNumber) {
        alert("Il numero è troppo alto");
    } else if (userChoice < randomNumber) {
        alert("Il numero è troppo basso");
    } else {
        alert("Numero esatto!");
    }

} while (userChoice !== randomNumber)