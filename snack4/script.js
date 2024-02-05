let numberCycle = [];

let exitCycle = true;

userChoice = "";

while (exitCycle) {
    const input = prompt("Inserisci un numero o scrivi 'Esci' per uscire:");

    if (input === 'Esci') {
        alert("Hai scelto di uscire dal ciclo.");
        exitCycle = false;
    } else {
        const numberChosen = Number(input);

        if (!isNaN(numberChosen) && Number.isInteger(numberChosen)) {
            if (numberChosen % 2 === 0) {
                document.getElementById("result").innerHTML = ("Il numero è pari:", numberChosen);
            } else {
                document.getElementById("result").innerHTML = ("Il numero è dispari, il successivo è:", numberChosen + 1);
            }
        } else {
            alert("Inserisci un numero intero valido.");
        }
    }
}