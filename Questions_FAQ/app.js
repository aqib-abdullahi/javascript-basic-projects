const buttons = document.querySelectorAll(".question-btn")
const article = document.querySelectorAll(".question")

buttons.forEach(function(btns) {
    btns.addEventListener('click', function(e) {
        const cur_btn = e.currentTarget.parentElement.parentElement
        cur_btn.classList.toggle('questions')
        article.forEach(function(item) {
            if (item !== cur_btn)
                item.classList.remove('questions')
        })
    })
})