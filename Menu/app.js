const menu = [{
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "quarantine buddy",
        category: "bakes",
        price: 16.99,
        img: "./images/item-7.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const subSection = document.querySelector(".sub-section")
const container = document.querySelector(".filter-buttons-container")

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu)

    const categories = menu.reduce(function(values, itemms) {
        if (!values.includes(itemms.category))
            values.push(itemms.category)
        return values
    }, ["all"])
    console.log(categories)
    const buttons = categories.map(function(bts) {
        return `<button class="filter-btns" data-id=${bts}>${bts}</button>`
    }).join("")
    console.log(buttons);
    container.innerHTML = buttons
    const filterButtons = document.querySelectorAll(".filter-btns")
    filterButtons.forEach(function(btns) {
        btns.addEventListener("click", function(e) {
            let category = e.currentTarget.dataset.id
            let menuCategory = menu.filter(function(itemms) {
                if (itemms.category == category)
                    return itemms
            })
            if (category == 'all')
                displayMenuItems(menu)
            else
                displayMenuItems(menuCategory)
        })
    })

})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(items) {
        return `<article>
        <div class="menu-items">
            <div class="image-container">
                <img src=${items.img} alt=${items.title}>
            </div>
            <div class="info">
                <header class="menu-header">
                    <p class="meal-name">${items.title}</p>
                    <p class="meal-price">$${items.price}</p>
                </header>
                <p class="meal-info">${items.desc}</p>
            </div>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join("")
    subSection.innerHTML = displayMenu
}