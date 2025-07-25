 console.log(5 == "5"); // true
 console.log(5 === "5"); // false
 console.log(10 != 8); // true
 console.log(10 !== "10"); // true
 console.log(4 < 7); // true
 console.log(4 > 7); // false
 console.log(7 >= 7); // true
 console.log(5 <= 3); // false
 console.log("abc" == "abc"); // true
 console.log(null == undefined); // true

 // Exercices avec variables

let a1 = 6;
let b1 = "6";
console.log(a1 == b2); // true
 let a2 = 6;
let b2 = "6";
console.log(a === b); // false
 let note = 15;
console.log(note >= 10); // true

let age = 17;
console.log(age >= 18); // false

let isActive = true;
console.log(isActive == 1); // true


// Exercices à compléter
let a3 = 20;
let b3 = 15;
console.log(a3 > b3) //TRUE

let mot1 = "chat";
let mot2 = "chien";
console.log(mot1 > mot2) //false


let x = 5;
console.log(x>= 1 && x<= 10) // true

let prix = 100;
let solde = 50;
console.log(sold>prix) //FALSE

let nom = "Ali";
let nom2 = "ali";
console.log(nom == nom2)

//Exercices de logique avec comparaison

let score = 90;
if(score > 85){
    console.log("Excellent")
}

let age1 = 18;
if (age1>= 18) {
    console.log("Majeur")
} else {
    console.log("Mineur")
}

let motDePasse = "azerty";
let confirmation = "azerty";
if (motDePasse == confirmation) {
    console.log("Mot de passe correct")
}

let produit = "ordinateur";
let categorie = "Ordinateur";
console.log(produit == categorie)
// Compare en ignorant la casse (utilise toLowerCase)
num1 = 12;
let num2 = 12;
let num3 = "12";
// Quelle est la différence entre == et === pour ces trois ?
// == compare la valeur
// === compare la valeur + le type


// Exercices bonus avec conditions
let poids = 70;
let taille = 1.75;
let imc = poids / (taille * taille);
// Vérifie si l’IMC est supérieur à 25
console.log(imc>25)

let userInput = "";
// Vérifie si l'utilisateur a saisi quelque chose (non vide)
if (userInput == "") {
    console.log("Saisir une valeur non vide")
}
let stock = 0;
// Affiche "Rupture" si stock est égal à 0
if (stock == 0) {
    console.log("Rupture")
}
 note = 9;
// Affiche "Ajourné" si note < 10, sinon "Admis"
if (note<10) {
    console.log("Ajourné")
}else {
    console.log("Admis")
}

let a = null;
let b = undefined;
// Teste les différents cas de comparaison (== et ===)
console.log(a == b)
console.log(a === b)