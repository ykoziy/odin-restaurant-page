import { createElement } from './util/dom';

const generate = (container) => {
    container.appendChild(createMenuDiv());
}

const createMenuDiv = () => {
    const pElement = createElement("p", null, null, null, "Menu goes here.....");

    return pElement;
}

export default generate;