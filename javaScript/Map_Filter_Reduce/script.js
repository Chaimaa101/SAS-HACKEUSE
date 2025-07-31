const input =  [100, 12, 54, 47, 5, 6]

// const Carre = (arr) =>arr.map(x =>Math.pow(x,2))
// console.log(Carre(input))

// const Pair = (arr) => arr.filter(x => x%2 == 0)
// console.log(Pair(input))

// const Somme = (arr) => arr.reduce((acc, x) => acc + x, 0)
// console.log(Somme(input))


const pairCarre = (arr) => arr.map(x =>Math.pow(x,2))
console.log(pairCarre(Pair(input)))


const Max = (arr) => arr.reduce((acc, x) => Math.max(acc,x))
console.log(Max(input))



