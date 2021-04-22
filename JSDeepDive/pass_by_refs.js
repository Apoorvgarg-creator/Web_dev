var quiddtichWinner = "Harry Potter";


function changeWinner (winner) {

    console.log("Original winner: "+ winner)
    winner = "Draco Malfoy"
    console.log("Changed winner: " + winner)

}

console.log("The winner was " + quiddtichWinner);

changeWinner(quiddtichWinner);

console.log("Now the winner is "+ quiddtichWinner)

// this means that javascript pass variable by value


var quiddtichWinners = [
    "harry", "ron", "harmoine"
];

function changeWinner (winners){
    winners[0] = "Draco";
    winners[1] = "crabble";
    winners[2] = "pansy";

}

console.log("The winner was " + quiddtichWinners);

changeWinner(quiddtichWinners);

console.log("Now the winner is "+ quiddtichWinners)

// this is also an example of pass by value
// javascript always passes object as value
// when an object is passed, though value is passed but object is a reference hence values changed are affected
