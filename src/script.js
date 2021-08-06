import './styles/style.css'

const app = document.getElementById('app')

const container = document.createElement('div')
container.className = 'container'

const header = document.createElement('header')
header.className = 'header'

const burgerMenu = document.createElement('div')
burgerMenu.className = 'burger-menu'

app.append(container)
container.append(header)

header.append(burgerMenu)
for (let i = 0; i < 3; i++) {
    const lineBurger = document.createElement('div')
    lineBurger.className = 'line_burger-menu'
    burgerMenu.append(lineBurger)
}