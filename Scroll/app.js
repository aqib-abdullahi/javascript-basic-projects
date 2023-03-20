const drop = document.querySelector(".ul-link")
const dropButton = document.querySelector('.menu-button')
const toTop = document.querySelector(".to-top")
const plainNav = document.querySelector(".second-nav")
const fixedNav = document.querySelector(".first-nav")

dropButton.addEventListener("click", function() {
    drop.classList.toggle('drop')
    console.log('clicked');
})

toTop.addEventListener("click", function() {
    let h = document.body.getBoundingClientRect().height
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener('scroll', function() {
    let height = window.pageYOffset
    let secondNavHeight = plainNav.getBoundingClientRect().height
    if (height >= secondNavHeight) {
        fixedNav.classList.add('fnav')
    } else if (height == 0) {
        fixedNav.classList.remove('fnav')
    }


})