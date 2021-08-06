import './styles/style.css'

const app = document.getElementById('app')

const container = document.createElement('div')
container.className = 'container'

const header = document.createElement('header')
header.className = 'header'

const main = document.createElement('main')
main.className = 'main'

const footer = document.createElement('footer')
footer.className = 'footer'

const burgerMenu = document.createElement('div')
burgerMenu.className = 'burger-menu'

app.append(container)
container.append(header)
container.append(main)
container.append(footer)

header.append(burgerMenu)
for (let i = 0; i < 3; i++) {
    const lineBurger = document.createElement('div')
    lineBurger.className = 'line_burger-menu'
    burgerMenu.append(lineBurger)
}

for (let i = 0; i < 8; i++) {
    const cardContainer = document.createElement('div')
    cardContainer.className = 'card-container'
    main.append(cardContainer)
}



