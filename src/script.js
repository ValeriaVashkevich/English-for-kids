import "./styles/style.css";
import cards from "./card";
// import ico from {
//   "./assets/card ico/action.png",
//    "./assets/card ico/action2.png",
//    "./assets/card ico/animals.png",
//    "./assets/card ico/animals2.png",
//    "./assets/card ico/emotion.png",
//    "./assets/card ico/food.png",
//    "./assets/card ico/holidays.png",
//    "./assets/card ico/sports.png"
// };


const body = document.body;
body.className = "body";

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

const lineBurger = document.createElement("span");

header.append(burgerMenu);
burgerMenu.append(lineBurger);

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
burgerMenuList.className = "menu-list";
burgerMenuContent.append(burgerMenuList);

for (let i = 0; i < contentItems.length; i++) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.className = "menu-link";
  link.textContent = contentItems[i];
  burgerMenuList.append(listItem);
  listItem.append(link);
}

burgerMenu.onclick = () => {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
};

// Cards in main:

for (let i = 0; i < cards[0].length; i++) {
  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  const cardIco = document.createElement("div");
  cardIco.className = "card-ico";
  // cardIco.style.backgroundImage = ico

  const cardDesc = document.createElement("div");
  cardDesc.className = "card-description";
  cardDesc.textContent = cards[0][i];

  main.append(cardContainer);
  cardContainer.append(cardIco);
  cardContainer.append(cardDesc);
}
