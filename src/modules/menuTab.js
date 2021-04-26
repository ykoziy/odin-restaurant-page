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
    const txtContainerElement = createElement("div", null, "menu-text-container");

    const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const pElement = createElement("p", null, "menu-item-text", null, txt+txt);

    txtContainerElement.appendChild(pElement);

    menuItem.appendChild(titleElement);
    menuItem.appendChild(imgElement);
    menuItem.appendChild(txtContainerElement);

    return menuItem;
}

export default generate;