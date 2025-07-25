
// Parie 1: Déclaration & accès aux éléments
let panier = ["pomme", "banane", "kiwi"]
console.log(panier)
console.log(panier[0])
console.log(panier[panier.length -1])
panier[1] = "orange"
console.log(panier)
panier.push("fraise")
console.log(panier)
panier.unshift("mangue")
console.log(panier)
panier.pop()
console.log(panier)

// Partie 2: Déclaration & accès aux éléments
console.log(panier.length)

for(i=0;i<=panier.length-1;i++){
    if(panier[i] == "kiwi"){
        console.log("kiwi existe dans le panier")
    }else{
    console.log("kiwi n'existe pas dans le panier")
    }
}

for(i=0;i<=panier.length-1;i++){
    if(panier[i] == "pomme"){
        console.log(i)
    } 
}

let nouveauPanier = []
nouveauPanier.unshift([panier[0],panier[1]])

console.log(nouveauPanier)

// Partie 3 – Tableaux imbriqués
let panierCategories = [
["pomme", "banane"],
["lait", "fromage"],
["savon", "shampoing"]
];
console.log(panierCategories[1][0])
panierCategories[panierCategories.length-1] == "gel douche"
