const drop = document.querySelector(".ul-link")
const dropButton = document.querySelector('.menu-button')

dropButton.addEventListener("click", function() {
    drop.classList.toggle('drop')
    console.log('clicked');
})