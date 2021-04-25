const createElement = (type, id, classList, attributes, txt) => {
    const element = document.createElement(type);
    if (id) {
        element.id = id;
    }

    if (classList) {
        element.classList.add(...classList.split(" "));
    }

    if (attributes) {
        //TODO
    }

    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }

    return element;
}

export { createElement };