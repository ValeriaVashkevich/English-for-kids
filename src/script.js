import "./styles/style.css";
import { mainCardContent, cards } from "./card";

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

  link.onclick = () => {
    if (contentItems === contentItems[0]) {
      renderMainPage();
    }
    renderSectionPage(contentItems[i]);
    // for (let i = 0; i < contentItems.length; i++) {
    //   if (contentItems === contentItems[0]) {
    //     renderMainPage();
    //   }
    // }
  };

  burgerMenuList.append(listItem);
  listItem.append(link);
}


burgerMenu.onclick = () => {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
  body.classList.toggle("lock");
};


// Switch:

let isItPlay = false;

switchContainer.onclick = () => {
  isItPlay = !isItPlay;

  const yellowMainCard = document.querySelectorAll(".main-card");
  const yellowSectionCard = document.querySelectorAll(".section-card");

  const playCardSectionImg = document.querySelectorAll(".card_section-img");
  const playCardSectionDesc = document.querySelectorAll(
    ".card_section-description"
  );

  if (isItPlay) {
    switchLabel.classList.add("off");
    for (let i = 0; i < yellowMainCard.length; i++) {
      yellowMainCard[i].classList.add("green");
    }
    for (let i = 0; i < yellowSectionCard.length; i++) {
      yellowSectionCard[i].classList.add("green");
      playCardSectionImg[i].classList.add("only");
      playCardSectionDesc[i].classList.add("none");
    }
  }

  if (!isItPlay) {
    switchLabel.classList.remove("off");
    for (let i = 0; i < yellowMainCard.length; i++) {
      yellowMainCard[i].classList.remove("green");
    }
    for (let i = 0; i < yellowSectionCard.length; i++) {
      yellowSectionCard[i].classList.remove("green");
      playCardSectionImg[i].classList.remove("only");
      playCardSectionDesc[i].classList.remove("none");
    }
  }
};

// Cards in main:

const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";

// Render Section Page:

const renderSectionPage = (section) => {
  const oldCard = document.querySelectorAll(".main-card");
  for (let i = 0; i < oldCard.length; i++) {
    oldCard[i].remove();

    const sectionName = cards.find((el) => el.section === section);
    const sectionContent = sectionName.content;

    const sectionCard = document.createElement("div");
    sectionCard.className = "section-card";

    const cardSectionImg = document.createElement("div");
    cardSectionImg.className = "card_section-img";
    cardSectionImg.style.backgroundImage = `url(${sectionContent[i].image})`;

    const cardSectionDesc = document.createElement("div");
    cardSectionDesc.className = "card_section-description";
    cardSectionDesc.textContent = sectionContent[i].word;

    const cardSectionAudio = document.createElement("audio");
    cardSectionAudio.src = sectionContent[i].audioSrc;

    sectionCard.onclick = () => {
      cardSectionAudio.play();
    };

    cardsContainer.append(sectionCard);
    sectionCard.append(cardSectionImg);
    sectionCard.append(cardSectionDesc);
    sectionCard.append(cardSectionAudio);
  }
};

const renderPlaySectionPage = (section) => {
  const oldCard = document.querySelectorAll(".main-card");
  for (let i = 0; i < oldCard.length; i++) {
    oldCard[i].remove();

    const sectionName = cards.find((el) => el.section === section);
    const sectionContent = sectionName.content;

    const sectionCard = document.createElement("div");
    sectionCard.className = "section-card";

    const cardSectionImg = document.createElement("div");
    cardSectionImg.className = "card_section-img";
    cardSectionImg.style.backgroundImage = `url(${sectionContent[i].image})`;

    const cardSectionDesc = document.createElement("div");
    cardSectionDesc.className = "card_section-description";
    cardSectionDesc.textContent = sectionContent[i].word;

    cardsContainer.append(sectionCard);
    sectionCard.append(cardSectionImg);
    sectionCard.append(cardSectionDesc);
  }
};

// Render Main Page:

const renderMainPage = () => {
  for (let i = 0; i < mainCardContent.length; i++) {
    const mainCard = document.createElement("div");
    mainCard.className = "main-card";

    mainCard.onclick = () => {
      if (!isItPlay) {
        renderSectionPage(mainCardContent[i].title);
      }
      renderPlaySectionPage(mainCardContent[i].title);
    };

    const cardMainImg = document.createElement("div");
    cardMainImg.className = "card_main-img";
    cardMainImg.style.backgroundImage = `url(${mainCardContent[i].img})`;

    const cardMainDesc = document.createElement("div");
    cardMainDesc.className = "card_main-description";
    cardMainDesc.textContent = mainCardContent[i].title;

    main.append(cardsContainer);
    cardsContainer.append(mainCard);
    mainCard.append(cardMainImg);
    mainCard.append(cardMainDesc);
  }
};

renderMainPage();
