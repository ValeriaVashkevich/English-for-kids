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

burgerMenu.onmouseenter = () => {
  burgerMenu.classList.add("hover");
};

burgerMenu.onmouseleave = () => {
  burgerMenu.classList.remove("hover");
};

const switchContainer = document.createElement("div");
switchContainer.className = "switch-container";
const switchLabel = document.createElement("div");
switchLabel.className = "switch-label";

switchContainer.onmouseenter = () => {
  switchContainer.classList.add("hover");
};

switchContainer.onmouseleave = () => {
  switchContainer.classList.remove("hover");
};

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

const defaultActiveLink = "Main Page";
let activeLink = defaultActiveLink;

const makeActiveLink = () => {
  const linkList = document.querySelectorAll(".menu-link");
  for (let i = 0; i < linkList.length; i++) {
    linkList[i].classList.remove("active");
    if (linkList[i].textContent === activeLink) {
      linkList[i].classList.add("active");
    }
  }
};

for (let i = 0; i < contentItems.length; i++) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.className = "menu-link";
  link.textContent = contentItems[i];

  if (link.textContent === activeLink) {
    link.classList.add("active");
  }

  link.onclick = () => {
    activeLink = link.textContent;
    makeActiveLink();

    if (link.textContent === contentItems[0]) {
      renderMainPageBack();
    }
    if (link.textContent !== contentItems[0]) {
      renderSectionPage(contentItems[i]);
    }

    burgerMenu.classList.remove("active");
    burgerMenuContent.classList.remove("active");
    body.classList.remove("lock");
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
  const yellowSectionCardContainer = document.querySelectorAll(
    ".section-card_container"
  );
  const yellowBurgerMenu = document.querySelector(".burger-menu");
  const greenBurgerMenuContent = document.querySelector(".burger-menu_content");

  if (isItPlay) {
    switchLabel.classList.add("off");
    yellowBurgerMenu.classList.add("green");
    greenBurgerMenuContent.classList.add("yellow");
    for (let i = 0; i < yellowMainCard.length; i++) {
      yellowMainCard[i].classList.add("green");
    }
    for (let i = 0; i < yellowSectionCardContainer.length; i++) {
      yellowSectionCardContainer[i].classList.add("green");
    }
  }

  if (!isItPlay) {
    switchLabel.classList.remove("off");
    yellowBurgerMenu.classList.remove("green");
    greenBurgerMenuContent.classList.remove("yellow");
    for (let i = 0; i < yellowMainCard.length; i++) {
      yellowMainCard[i].classList.remove("green");
    }
    for (let i = 0; i < yellowSectionCardContainer.length; i++) {
      yellowSectionCardContainer[i].classList.remove("green");
    }
  }
};

// Cards in main:

const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-container";

// Render Section Page:

const renderSectionPage = (section) => {
  const oldCard = document.querySelectorAll(".main-card");
  const oldSectionCard = document.querySelectorAll(".section-card_container");

  const playSwitchContainer = document.createElement("div");
  playSwitchContainer.className = "play_switch-container";
  const playSwitchLabel = document.createElement("div");
  playSwitchLabel.className = "play_switch-label";

  for (let i = 0; i < oldCard.length; i++) {
    oldCard[i].remove();

    const sectionName = cards.find((el) => el.section === section);
    const sectionContent = sectionName.content;

    const sectionCardContainer = document.createElement("div");
    sectionCardContainer.className = "section-card_container";
    if (isItPlay) {
      sectionCardContainer.classList.add("green");
    }

    const sectionCardFront = document.createElement("div");
    sectionCardFront.className = "section-card_front";
    const SectionImgFront = document.createElement("div");
    SectionImgFront.className = "section_front-img";
    SectionImgFront.style.backgroundImage = `url(${sectionContent[i].image})`;
    const SectionDescFront = document.createElement("div");
    SectionDescFront.className = "section_front-description";
    SectionDescFront.textContent = sectionContent[i].word;

    const sectionCardBack = document.createElement("div");
    sectionCardBack.className = "section-card_back";
    const SectionImgBack = document.createElement("div");
    SectionImgBack.className = "section_front-img";
    SectionImgBack.style.backgroundImage = `url(${sectionContent[i].image})`;
    const SectionDescBack = document.createElement("div");
    SectionDescBack.className = "section_front-description";
    SectionDescBack.textContent = sectionContent[i].translation;

    const rotate = document.createElement("div");
    rotate.className = "rotate";
    rotate.style.backgroundImage = "url(img/rotate.png)";

    rotate.onclick = () => {
      sectionCardFront.classList.add("rotate-front");
      sectionCardBack.classList.add("rotate-back");
    };

    sectionCardContainer.onmouseleave = () => {
      sectionCardFront.classList.remove("rotate-front");
      sectionCardBack.classList.remove("rotate-back");
    };

    const cardSectionAudio = document.createElement("audio");
    cardSectionAudio.src = sectionContent[i].audioSrc;

    SectionImgFront.onclick = () => {
      cardSectionAudio.play();
    };
    SectionDescFront.onclick = () => {
      cardSectionAudio.play();
    };

    cardsContainer.append(sectionCardContainer);

    sectionCardContainer.append(sectionCardFront);
    sectionCardContainer.append(sectionCardBack);

    sectionCardFront.append(SectionImgFront);
    sectionCardFront.append(SectionDescFront);
    sectionCardFront.append(rotate);

    sectionCardBack.append(SectionImgBack);
    sectionCardBack.append(SectionDescBack);

    sectionCardContainer.append(cardSectionAudio);

    main.append(playSwitchContainer);
    playSwitchContainer.append(playSwitchLabel);
  }

  for (let i = 0; i < oldSectionCard.length; i++) {
    oldSectionCard[i].remove();

    const sectionName = cards.find((el) => el.section === section);
    const sectionContent = sectionName.content;

    const sectionCardContainer = document.createElement("div");
    sectionCardContainer.className = "section-card_container";
    if (isItPlay) {
      sectionCardContainer.classList.add("green");
    }

    const sectionCardFront = document.createElement("div");
    sectionCardFront.className = "section-card_front";
    const SectionImgFront = document.createElement("div");
    SectionImgFront.className = "section_front-img";
    SectionImgFront.style.backgroundImage = `url(${sectionContent[i].image})`;
    const SectionDescFront = document.createElement("div");
    SectionDescFront.className = "section_front-description";
    SectionDescFront.textContent = sectionContent[i].word;

    const sectionCardBack = document.createElement("div");
    sectionCardBack.className = "section-card_back";
    const SectionImgBack = document.createElement("div");
    SectionImgBack.className = "section_front-img";
    SectionImgBack.style.backgroundImage = `url(${sectionContent[i].image})`;
    const SectionDescBack = document.createElement("div");
    SectionDescBack.className = "section_front-description";
    SectionDescBack.textContent = sectionContent[i].translation;

    const rotate = document.createElement("div");
    rotate.className = "rotate";
    rotate.style.backgroundImage = "url(img/rotate.png)";

    rotate.onclick = () => {
      sectionCardFront.classList.add("rotate-front");
      sectionCardBack.classList.add("rotate-back");
    };

    sectionCardContainer.onmouseleave = () => {
      sectionCardFront.classList.remove("rotate-front");
      sectionCardBack.classList.remove("rotate-back");
    };

    const cardSectionAudio = document.createElement("audio");
    cardSectionAudio.src = sectionContent[i].audioSrc;

    SectionImgFront.onclick = () => {
      cardSectionAudio.play();
    };
    SectionDescFront.onclick = () => {
      cardSectionAudio.play();
    };

    cardsContainer.append(sectionCardContainer);

    sectionCardContainer.append(sectionCardFront);
    sectionCardContainer.append(sectionCardBack);

    sectionCardFront.append(SectionImgFront);
    sectionCardFront.append(SectionDescFront);
    sectionCardFront.append(rotate);

    sectionCardBack.append(SectionImgBack);
    sectionCardBack.append(SectionDescBack);

    sectionCardContainer.append(cardSectionAudio);
  }
};

// Render Main Page:

const renderMainPage = () => {
  for (let i = 0; i < mainCardContent.length; i++) {
    const mainCard = document.createElement("div");
    mainCard.className = "main-card";

    mainCard.onclick = () => {
      renderSectionPage(mainCardContent[i].title);
      activeLink = mainCardContent[i].title;
      makeActiveLink();
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

const renderMainPageBack = () => {
  const oldSectionCard = document.querySelectorAll(".section-card_container");

  for (let i = 0; i < oldSectionCard.length; i++) {
    oldSectionCard[i].remove();

    const mainCard = document.createElement("div");
    mainCard.className = "main-card";
    if (isItPlay) {
      mainCard.classList.add("green");
    }

    mainCard.onclick = () => {
      renderSectionPage(mainCardContent[i].title);
      activeLink = mainCardContent[i].title;
      makeActiveLink();
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
