import { createElement } from './util/dom';

import homeTab from './homeTab';
import menuTab from './menuTab';
import contactTab from './contactTab';

import '../styles/main.scss';

const generate = (container) => {
    const mainElement = createElement("main");
    const contentElement = createElement("div", "content-main");

    homeTab(contentElement);

    mainElement.appendChild(contentElement);
    container.appendChild(mainElement);
}

const togglePage = (page) => {
    const contentElement = document.getElementById("content-main");
    if (page == "home") {
        clearPage();
        homeTab(contentElement);
    } else if (page == "menu") {
        clearPage();
        menuTab(contentElement);     
    } else if (page == "contact") {
        clearPage();
        contactTab(contentElement);    
    }
};

const clearPage = () => {
    const contentElement = document.getElementById("content-main");
    contentElement.textContent = "";
}

export { generate, togglePage};