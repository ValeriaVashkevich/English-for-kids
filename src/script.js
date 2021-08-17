import "./styles/style.css";
import { mainImg, cards } from "./card";

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

const switchContainer = document.createElement("div");
switchContainer.className = "switch-container";
const switchLabel = document.createElement("div");
switchLabel.className = "switch-label";

header.append(burgerMenu);
burgerMenu.append(lineBurger);

header.append(switchContainer);
switchContainer.append(switchLabel);

//Burger-menu content:

const contentItems = [
  "Main Page",
  "Action (set A)",
  "Action (set B)",
  "Animal (set A)",
  "Animal (set B)",
  "Emotions",
  "Food",
  "Holidays",
  "Sports game",
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
  body.classList.toggle("lock");
};

// Cards in main:

const renderMainPage = () => {
  for (let i = 0; i < mainImg.length; i++) {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    let cardMainImg = document.createElement("div");
    cardMainImg.className = "card_main-img";
    cardMainImg.style.backgroundImage = `url(${mainImg[i].img})`;

    let cardDesc = document.createElement("div");
    cardDesc.className = "card-description";
    cardDesc.textContent = mainImg[i].title;

    main.append(cardContainer);
    cardContainer.append(cardMainImg);
    cardContainer.append(cardDesc);

    switchContainer.onclick = () => {
      let backCards = document.querySelectorAll(".card-container");
      switchLabel.classList.toggle("off");
      backCards.classList.toggle("play");
    };
  }
  
 
};

renderMainPage();

let cardsSection = cards.find((el) => el.section);
let cardsTitle = mainImg.find((el) => el.title);

const renderSectionPage = () => {
  const cardsSectionImg = document.querySelectorAll(".card_main-img");
  const cardDescSection = document.querySelectorAll(".card-description");
  for (let i = 0; i < cards.length; i++) {
    cardsSectionImg[i].style.backgroundImage = `url(${cards[i].content.image})`;
    cardDescSection[i].textContent = cards[i].content.word;
  }
};

const cardFuck = document.querySelectorAll(".card-container");

// card.onclick = () => {
//   console.log("card");
// };

// card.onclick = () => {
//   if (cardsSection === cardsTitle){
//     renderSectionPage()}
//     console.log('bbb');
// };

// cardsContainer.onclick = () => {
//   for (let i = 0; i < cardsContainer.length; i++) {
//     let cardsSection = cards.find((el) => el.section === mainImg[i].title);

//     // console.log(cardsSection);

//     cardsSectionImg.style.backgroundImage = `url(${cardsSection.content.image})`;
//     cardDescSection.textContent = cardsSection.content.word;
//   }
//   renderSectionPage()
// };

// for (let i = 0; i < mainImg.length; i++) {
//   const cardContainer = document.createElement("div");
//   cardContainer.className = "card-container";

//   let cardMainImg = document.createElement("div");
//   cardMainImg.className = "card_main-img";
//   cardMainImg.style.backgroundImage = `url(${mainImg[i].img})`;

//   let cardDesc = document.createElement("div");
//   cardDesc.className = "card-description";
//   cardDesc.textContent = mainImg[i].title;

//   main.append(cardContainer);
//   cardContainer.append(cardMainImg);
//   cardContainer.append(cardDesc);

//   cardContainer.onclick = () => {
//     const cardsSectionImg = document.querySelectorAll(".card_main-img");
//     const cardDescSection = document.querySelectorAll(".card-description");
//     let cardsSection = cards.find((el) => el.section === mainImg[i].title);

//       console.log(cardsSection.content[i].image);
//       cardsSectionImg.style.backgroundImage = `url(${cardsSection.content[i].image})`;
//       cardDescSection.textContent = cardsSection.content[i].word;

//   };
// }
