import { createElement } from './util/dom';

import { generate as homeTab } from './homeTab';

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
        console.log('Load menu page.');        
    } else if (page == "contact") {
        clearPage();
        console.log('Load contact page.');        
    }
};

const clearPage = () => {
    const contentElement = document.getElementById("content-main");
    contentElement.textContent = "";
}

export { generate, togglePage};