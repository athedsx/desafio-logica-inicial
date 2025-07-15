let xp = 10001
if (xp <= 1000) {
    xp = "Ferro"
} else if (xp <= 2000) {
    xp = "Bronze"
} else if (xp <= 5000) {
    xp = "Prata Ouro"
} else if (xp <= 8000) {
    xp = "Platina Diamante"
} else if (xp <= 9000) {
    xp = "Ascendente"
} else if (xp <= 10000) {
    xp = "Imortal"
} else if (xp >= 10001) {
    xp = "Radiante"
}

let heroName = "João"
let mensagemFinal = "O Héroi de nome " + heroName + " está no nível de " + xp

console.log(mensagemFinal)