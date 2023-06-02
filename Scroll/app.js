const drop = document.querySelector(".ul-link")
const dropButton = document.querySelector('.menu-button')
const toTop = document.querySelector(".to-top")
const plainNav = document.querySelector(".second-nav")
const fixedNav = document.querySelector(".first-nav")
const CopyDate = document.querySelector(".date")
const linkH = document.querySelector('.ul-link')
const listH = document.querySelector('.ul-list')

newDate = new Date().getFullYear()
CopyDate.textContent = newDate

dropButton.addEventListener("click", function() {
    drop.classList.toggle('drop')
    if (drop.getBoundingClientRect().height == 0) {
        let listHH = listH.getBoundingClientRect().height
        linkH.style.height = `${listHH + 30}px`
    } else {
        linkH.style.height = 0
    }
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
    let fixedNavHeight = fixedNav.getBoundingClientRect().height
    if (height >= fixedNavHeight * 2) {
        toTop.classList.add('showBtn')
    } else {
        toTop.classList.remove('showBtn')
    }
    let secondNavHeight = plainNav.getBoundingClientRect().height
    if (height >= secondNavHeight) {
        fixedNav.classList.add('fnav')
    } else if (height == 0) {
        fixedNav.classList.remove('fnav')
    }
})