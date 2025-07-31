// Exercice 1 : Fonction fléchée basique
const calculerSurface = (longueur, largeur) => longueur * largeur

console.log(calculerSurface(5, 3))

// Exercice 2 : Fonction fléchée avec traitement conditionnel
const verifierMajorite = (age) => {
    if (age >= 18) {
        return "Majeur"
    } else {
        return "Mineur"
    }
}
console.log(verifierMajorite(2))

// Exercice 3 : Création de message dynamique
const creerMessage = (prenom,metier) => `Bonjour ${prenom} vous traillez comme ${metier}`
console.log(creerMessage("chaimaa","Backend Developer"))

// Exercice 4 : Calcul et affichage de prix

const afficherPrix = ({nom, prixHT, tauxTVA = 0.2}) => {
   
   let montantTVA = prixHT * tauxTVA
   let prixTTC = prixHT + montantTVA
   return `${nom} : ${prixTTC} € TTC (dont ${montantTVA} € de TVA)`
}

console.log(afficherPrix({nom: "bon-produit", prixHT: 2344, tauxTVA: 0.3}))

// Exercice 5 : Déstructuration d’objet simple

// Exercice 6 : Déstructuration avec renommage

// Exercice 7 : Déstructuration imbriquée

// Exercice 8 : Calcul de remise avec valeur par défaut

// Exercice 9 : Fusion de tableaux et ajout d’éléments

// Exercice 10 : Copie profonde d’objet avec modification

// Exercice 11 : Somme dynamique avec rest parameters