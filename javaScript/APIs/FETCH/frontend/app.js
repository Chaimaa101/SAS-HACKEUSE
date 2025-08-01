
// ******* FETCH API *************

// fetch("http://localhost:4000/recipes").then(res =>res.json()).then(data =>console.log(data))

//  const btns = document.querySelectorAll("button")
//  btns[0].addEventListener("click", () => {

//     fetch("http://localhost:4000/recipes",{
//     method : "POST",
//     headers : {
//         'content-type' : 'applicatio/json'
//     },
//     body : JSON.stringify({
//         "id": "3",
//       "title": "AGHROM",
//       "ingredients": [
//         "tomate",
//         "poivron",
//         "huile d'olive",
//         "POULET"
//       ],
//       "steps": "Couper les légumes, assaisonner, servir frais.",
//       "duration": "64 minutes"
//     })
// })
//  })

//  let id = 12
//  btns[1].addEventListener("click", () => {
//      fetch(`http://localhost:4000/recipes/${id}`,{
//     method : "PATCH",
//     headers : {
//         'content-type' : 'applicatio/json'
//     },
//     body : JSON.stringify({
//       "title": "CCCCCCCC",
//       "duration": "30 minutes"
//     })
// })

//  })
//  btns[2].addEventListener("click", ()=>{
//      fetch(`http://localhost:4000/recipes/${id}`,{
//     method : 'DELETE',
//     headers : {
//         'content-type' : 'applicatio/json'
//     },
// })

//  })

// ******* AXIOS API *************

axios.get('http://localhost:4000/recipes')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

   const btns = document.querySelectorAll("button")
 btns[0].addEventListener("click", () => {
    axios.post(`http://localhost:4000/recipes`, {
    "id": "300",
      "title": "HELLO",
      "ingredients": [
        "carot",
        "poivron",
        "huile",
        "cumin"
      ],
      "steps": "Couper les légumes, assaisonner, servir frais.",
      "duration": "500 minutes"
  })
  .then(res => console.log('Recipe ajouté :', res.data))
  .catch(err => console.error(err));

 })
  let id = 2
 btns[1].addEventListener("click", () => {
  axios.patch(`http://localhost:4000/recipes/${id}`, {"duration" : "0 sec"})
  .then(res => console.log('Recipe updated', res.data))
  .catch(err => console.error(err))
 })


btns[2].addEventListener("click", () => {
  axios.delete(`http://localhost:4000/recipes/${id}`)
  .then(res => console.log('Recipe Deleted', res.data))
  .catch(err => console.error(err))
})