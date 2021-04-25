import { createElement } from './util/dom';

const generate = (container) => {
    container.appendChild(createContactDiv());
}

const createContactDiv = () => {
    const pElement = createElement("p", null, null, null, "Contact goes here.....");

    return pElement;
}

export default generate;