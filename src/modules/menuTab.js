import { createElement } from './util/dom';

import '../styles/menu.scss';

const generate = (container) => {
    container.appendChild(createMenuDiv());
}

const createMenuDiv = () => {
    const menuDiv = createElement("div", "menu");

    for (let i = 0; i <= 8; i++) {
        menuDiv.appendChild(createMenuItem(i+1));
    }

    return menuDiv;
}

const createMenuItem = (title) => {
    const menuItem = createElement("div", null, "menu-item");

    const titleElement = createElement("h1", null, "menu-item-title", null, `Menu Item ${title}`);
    const imgElement = createElement("div", null, "menu-item-img");


    const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const textElement = createElement("p", null, "menu-item-text", null, txt+txt);

    menuItem.appendChild(titleElement);
    menuItem.appendChild(imgElement);
    menuItem.appendChild(textElement);

    return menuItem;
}

export default generate;