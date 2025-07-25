const h1 = document.querySelector(" h1")
h1.innerHTML = "Bienvenue dans le mindset CTO !";


const p = document.querySelector("p")
p.style.color = "lightblue"

const li = document.createElement("li")
li.innerHTML = "Former une vision long terme"
const ul = document.querySelector("ul")
ul.appendChild(li)

const img = document.querySelector("img")
img.remove()

const a = document.getElementsByTagName("a")
a[2].setAttribute("href","mailto:cto@entreprise.com") 

const form = document.forms[0]

const date = new Date().toLocaleDateString()
h1.append(date)

const textarea = document.querySelector("textarea")
textarea.setAttribute("placeholder", "Votre question sur la stratégie technique")

p.classList.add("important")
console.log(p)

const btn = document.createElement("button")
btn.innerHTML = "Télécharger le guide CTO"
form.appendChild(btn)

const lis  = document.querySelectorAll("li")
console.log(lis.length) 

