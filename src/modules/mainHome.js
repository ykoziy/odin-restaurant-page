import { createElement } from './util/dom';

const generate = (container) => {
    const mainElement = createElement("main");
    const contentElement = createElement("div", "content-main");

    contentElement.appendChild(createHeroDiv());
    mainElement.appendChild(contentElement);
    container.appendChild(mainElement);
}

const createHeroDiv = () => {
    const heroText = 'Authentic italian pizza napoletana. Made with fresh organic ingridients, baked to perfection in wood fired brick oven.';

    const heroDiv = createElement("div", "hero");

    const heading = createElement("h1", null, null, null, "Napoli Pizzeria");
    heroDiv.appendChild(heading);

    const pElement = createElement("p", null, null, null, heroText);
    const pTxt = document.createTextNode(heroText);
    heroDiv.appendChild(pElement);

    const menuButton = createElement("button", null, "menu-btn", null, "menu");
    menuButton.classList.add("menu-btn");
    heroDiv.appendChild(menuButton);

    return heroDiv;
}

export { generate };