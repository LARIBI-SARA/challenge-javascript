let countries = ['China','Japan','South Korea','Vietnam','Malaysia']
let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']
//CHALLENGE 2
for (let i = 0; i < countries.length; i++) {
    console.log(`Your country: ${countries[i]} has the capital named: ${capital[i]}.`);
  }
  
 //CHALLENGE 3 
const randomizer = Math.floor(Math.random() * 4);



let fate;


if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}

console.log(fate);  
//CHALLENGE 4
function checkSeason(month) {
    if (month >= 3 && month <= 5) {
        return "Spring";
    } else if (month >= 6 && month <= 8) {
        return "Summer";
    } else if (month >= 9 && month <= 11) {
        return "Autumn";
    } else {
        return "Winter";
    }
}
while (true) {
    month = prompt("Veuillez entrer un nombre de mois (entre 1 et 12) :");
   

    if (month >= 1 && month <= 12) {
        break; // Sortir de la boucle si la saisie est valide
    } else {
        alert("Erreur : Veuillez entrer un nombre de mois valide entre 1 et 12.");
    }
}

console.log(checkSeason(month))
