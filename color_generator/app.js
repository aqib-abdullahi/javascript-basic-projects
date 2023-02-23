let colors = ["green", "red", "yellow", "blue", "black", "brown"]

const paragraph = document.getElementById("prag")
const bt = document.getElementById("btn")

function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}


bt.addEventListener("click", function() {
    let rand = randomNumber()
    paragraph.textContent = colors[rand]
    console.log("it has been clicked")
    paragraph.style.color = colors[rand]
    document.body.style.backgroundColor = colors[rand]
})