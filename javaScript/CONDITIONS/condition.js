let note = 17
     if (note>=10) {
        console.log("Validé")
     }else{
        console.log("Echec")
     }

     let temp = 23
     if (temp<10) {
        console.log("Froid")

     } if(10<temp>25) {
        console.log("Douce")
     } if (temp >10) {
        console.log("Chaud")
    
     }

    let longueur = 12
    let contientChiffre = true

    if(longueur>=8 && contientChiffre == 1){
        console.log("Mot de pass sécurisé")
    }else{
        console.log("Mot de pass faible")

    }

    let isLoggedIn = true
    let hasPaidSubscription = true

    if(isLoggedIn && hasPaidSubscription){
        console.log("Accès autorisé")
    }
    if(isLoggedIn && !hasPaidSubscription){
        console.log("Abonnement requis")
    }if(!isLoggedIn && hasPaidSubscription){
        console.log("Connexion requis")

    }


    let noteMath = 12, noteFr = 10, noteInfo = 20


    let prix =5000
    let estMembre = true

    if (estMembre && prix>100) {
        console.log(prix - (prix*1/100))
    } else {
        console.log(prix )
    }

    let anciennete = 8
    let salaire = 2000
    if (anciennete>=5) {
        console.log(salaire+500)
    
    if(2<anciennete>5){
        console.log(salaire+200)
    }
    }else{
        console.log(salaire)
    }

    
    let moyenne= 15
    if (moyenne>=10) {
        if (moyenne>=16) {
        console.log("Très bien") 
        if (moyenne>=14) {
        console.log("Bien") 
        }
        if (moyenne>=12) {
        console.log("Assez bien") 
        }
        }
    }else{
        console.log("Passable") 

    }