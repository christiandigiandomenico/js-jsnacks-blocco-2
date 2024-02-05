const userNumber = [];

let sum = 0;

while (sum <= 50) {

    const userChoice = Number(prompt("Scrivi un numero"));

    userNumber.push(userChoice)

    sum += userChoice

}


document.getElementById("result").innerHTML = (`La somma è ${sum}`)