const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const parag = document.getElementById("prg")
const button = document.getElementById("btn")
let loop = "#"

function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}

button.addEventListener("click", function() {
    for (let i = 0; i < 6; i++) {
        loop += colors[randomNumber()]
    }
    parag.textContent = loop
    document.body.style.backgroundColor = loop
    console.log("done")
    loop = "#"
})