const btn = document.getElementById("toggle-button")
const link = document.querySelector(".links")

btn.addEventListener("click", function() {
    link.classList.toggle("show-links")
})