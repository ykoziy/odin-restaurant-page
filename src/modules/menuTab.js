import { createElement } from './util/dom';

import '../styles/menu.scss';

const menuItems = [
    ["Pizza Marinara", './img/pizza-photo.jpg', "Topped with tomato, garlic, oregano, and extra-virgin olive oil."],
    ["Pizza Margherita", './img/pizza-photo.jpg', "Topped with tomato, fresh sliced mozzarella, fresh basil, and extra-virgin olive oil."],
    ["Pizza Margherita Extra", './img/pizza-photo.jpg', "Topped with tomato, sliced mozzarella di Bufala, fresh basil, and extra-virgin olive oil."],
    ["Pizza Napoli", './img/pizza-photo.jpg', "Topped with tomato, anchovies, mozzarella, capers and extra-virgin olive oil."],
    ["Pizza Diavola", './img/pizza-photo.jpg', "Topped with tomato, mozzarella, fresh basil, peperoni and extra-virgin olive oil."],    
];

const generate = (container) => {
    container.appendChild(createMenuDiv());
}

const createMenuDiv = () => {
    const menuDiv = createElement("div", "menu");

    menuItems.forEach(item => {
        menuDiv.appendChild(createMenuItem(item[0], item[1], item[2]));
    });

    return menuDiv;
}

const createMenuItem = (title, picture, description) => {
    const menuItem = createElement("div", null, "menu-item");
    const titleElement = createElement("h1", null, "menu-item-title", null, `${title}`);

    const imgElement = createElement("div", null, "menu-item-img");
    const photo = createElement("img", null, null, [['src', picture], ['alt', 'Pizza photo']]);
    imgElement.appendChild(photo);

    const txtContainerElement = createElement("div", null, "menu-text-container");
    const pElement = createElement("p", null, "menu-item-text", null, description);

    txtContainerElement.appendChild(pElement);

    menuItem.appendChild(titleElement);
    menuItem.appendChild(imgElement);
    menuItem.appendChild(txtContainerElement);

    return menuItem;
}

export default generate;