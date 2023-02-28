const togbtn = document.getElementById("toggle-button")
const closbtn = document.getElementById("close-button")
const sidbar = document.querySelector(".side-bar")

togbtn.addEventListener("click", function() {
    sidbar.classList.toggle("show-side")
})

closbtn.addEventListener("click", function() {
    sidbar.classList.remove("show-side")
})