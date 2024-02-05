let arrayNumbers = [];

let userNumber;

while (arrayNumbers.length !== 10) {

    userNumber = Number(prompt("Inserisci un numero"));

    if (userNumber % 2 == 0) {
        arrayNumbers.push(userNumber)
        document.getElementById("result").innerHTML = arrayNumbers;
    } else {
        arrayNumbers.push(userNumber)
        document.getElementById("result").innerHTML = arrayNumbers + 1;
    }

}