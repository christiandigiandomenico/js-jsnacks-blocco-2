const userNames = ["Antonio", "Giuseppe", "Antonino", "Federico", "Cassone"];
const userNames2 = ["Peppe", "Andrea"];

while (userNames2.length < userNames.length) {
    const userChoice = prompt("Inserisci un nome");
    userNames2.push(userChoice);
}

while (userNames.length < userNames2.length) {
    const userChoice = prompt("Inserisci un nome");
    userNames.push(userChoice);
}

document.getElementById("result").innerHTML = ("Array 1:", userNames);
document.getElementById("result2").innerHTML = ("Array 2:", userNames2);