import { createElement } from './util/dom';

const generate = (container) => {
    const navChoices = ["home", "menu", "contact"];
    const navElement = createElement("nav");
    const listElement = createElement("ul");

    navChoices.forEach(navItem => {
        const itemElement = createElement("li", null, null, null, navItem);
        listElement.appendChild(itemElement);
    });

    navElement.appendChild(createLogoDiv("Napoli Pizzeria"));

    navElement.appendChild(listElement);
    container.appendChild(navElement);
}

const createLogoDiv = (title) => {
    const logoDiv = createElement("div", "logo");
    const heading = createElement("h1", null, null, null, title);
    logoDiv.appendChild(heading);

    return logoDiv;
}

export { generate };