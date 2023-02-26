const btns = document.querySelectorAll(".btn")
const value = document.querySelector("#count")

let counter = 0

btns.forEach(function(button) {
    button.addEventListener("click", function(buttons) {
        const but = buttons.currentTarget.classList;
        if (but.contains('increase')) {
            counter++
        } else if (but.contains('decrease')) {
            counter--
        } else {
            counter = 0
        }
        value.textContent = counter
    })
})