console.log("Merhaba Kodlama.io")


//js type safe değildir

let dolarDun = 9.20

let dolarBugun = 9.30

{
    let dolarDun = 9.10 // bura ayrı bir dünya
}

console.log(dolarDun)

const euroDun = 11.2
    //euroDun = 11 hata yapamayız

console.log(euroDun)
    //array diziler
let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


console.log(konutKredileri)