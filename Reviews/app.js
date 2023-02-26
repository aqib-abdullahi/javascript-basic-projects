const reviews = [{
        id: 1,
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        img: 'person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'WEB DESIGNER',
        img: 'person-1.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'INTERN',
        img: 'person-1.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'THE BOSS',
        img: 'person-1.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
]

const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const randomBtn = document.getElementById("random-btn")

const image = document.getElementById("img")
const Name = document.getElementById("name")
const job = document.getElementById("job")
const info = document.getElementById("info")

let currentItem = 0

function showPerson(person) {
    let item = reviews[person]
    image.src = item.img
    Name.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem)
})

nextBtn.addEventListener("click", function() {
    console.log('clicked')
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function() {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener("click", function() {
    let rand = Math.floor(Math.random() * reviews.length)
    showPerson(rand)

})