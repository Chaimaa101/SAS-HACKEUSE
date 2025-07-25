
const btns = document.querySelectorAll('button');
const input = document.querySelector('input')
const ul = document.querySelector("ul")

btns[0].addEventListener('click', function () {
    let valu = input.value
    if (input.value !== "") {
        const li = document.createElement("li")
        const btn = document.createElement("span")
        const div = document.createElement("span")
        div.textContent = valu
        btn.textContent = "🗑️"
        btn.classList.add("supprimer")
        btn.addEventListener('click', function () {
            li.remove()
        })
        div.addEventListener('click', function () {
            div.style.textDecoration = "line-through"
            div.style.color = "lightslategray"
        })
        li.appendChild(div)
        li.appendChild(btn)
        ul.appendChild(li)
        input.value = " "
    }
})
