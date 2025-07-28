const cartes=document.querySelectorAll(".card")
for( let carte of cartes) {
    carte.addEventListener("click", function(){
        for(let c of cartes){
            c.classList.remove("active")
        }
        // const p=carte.querySelector(".desc")
        carte.classList.add("active")
    })
}