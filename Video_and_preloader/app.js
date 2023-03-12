const video = document.querySelector(".video-container")
const buttons = document.querySelector(".switch-buttons")
const spanMove = document.querySelector(".switch")
const preloader = document.querySelector(".loader")

window.addEventListener('load', function() {
    preloader.classList.add("hide-loader")
})
buttons.addEventListener('click', function() {
    if (!spanMove.classList.contains('move')) {
        spanMove.classList.add('move')
        spanMove.classList.remove('switch')
        video.pause()
    } else {
        spanMove.classList.add('switch')
        spanMove.classList.remove('move')
        video.play()
    }
})