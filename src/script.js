import "./styles/style.css";

const app = document.getElementById("app");

const container = document.createElement("div");
container.className = "container";

const header = document.createElement("header");
header.className = "header";

const main = document.createElement("main");
main.className = "main";

const footer = document.createElement("footer");
footer.className = "footer";

app.append(container);
container.append(header);
container.append(main);
container.append(footer);

// Header:

const burgerMenu = document.createElement("div");
burgerMenu.className = "burger-menu";

header.append(burgerMenu);

for (let i = 0; i < 3; i++) {
  const lineBurger = document.createElement("div");
  lineBurger.className = "line_burger-menu";
  burgerMenu.append(lineBurger);
}

//Burger-menu content:

const contentItems = [
  "Main Page",
  "Action (set A)",
  "Action (set B)",
  "Something",
  "Something",
  "Animal (set A)",
  "Animal (set B)",
  "Clothes",
  "Emotions",
];

const burgerMenuContent = document.createElement("nav");
burgerMenuContent.className = "burger-menu_content";
app.append(burgerMenuContent);

const burgerMenuList = document.createElement("ul");
burgerMenuContent.append(burgerMenuList);
for (let i = 0; i < 9; i++) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
//   link[i].textContent = contentItems[i];
  burgerMenuList.append(listItem);
  listItem.append(link);
}

// Cards in main:

for (let i = 0; i < 8; i++) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";
  main.append(cardContainer);
}
