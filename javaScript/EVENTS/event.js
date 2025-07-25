
// Challenge 1
const btns = document.querySelectorAll('button');
const p = document.querySelector('p');

btns[0].addEventListener('click', function () {
    p.style.color = "red"
});

// Challenge 2

// const input = document.querySelector('input')
// const ul = document.querySelector("ul")

// btns[1].addEventListener('click' ,function(){

//     const li = document.createElement("li")
//     const btn = document.createElement("button")
//     let valu = input.value
//     if(valu !== ""){
//         li.textContent = valu
//         ul.appendChild(li)
//         btn.textContent = "supprimer"
//         li.appendChild(btn)
//     }


// btn.addEventListener('click' , function(){
//     li.remove()
// })
// })

const input = document.querySelector('input')
const ul = document.querySelector("ul")

btns[1].addEventListener('click', function () {
    let valu = input.value
    if (valu !== "") {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        const div = document.createElement("span")
        div.textContent = valu
        btn.textContent = "supprimer"
        btn.addEventListener('click', function () {
            li.remove()
        })
        li.appendChild(div)
        li.appendChild(btn)
        ul.appendChild(li)
    }
    valu = " "
    
})


//  Challenge 4  
let nombre = 0
btns[2].addEventListener('click', function () {
    nombre += 1
    btns[2].textContent = nombre
})