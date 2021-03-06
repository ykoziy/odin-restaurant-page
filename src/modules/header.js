import { createElement } from './util/dom';
import { handleNavClick } from './page';
import '../styles/header.scss';

const generate = (container) => {
    const navChoices = ["home", "menu", "contact"];
    const navElement = createElement("nav");
    const listElement = createElement("ul");

    navChoices.forEach(navItem => {
        const itemElement = createElement("li", null, null, null, navItem);
        itemElement.addEventListener("click", handleNavClick);
        listElement.appendChild(itemElement);
    });

    listElement.children[0].classList.add("active");

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