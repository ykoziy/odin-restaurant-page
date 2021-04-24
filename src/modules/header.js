
const generate = (container) => {
    const navChoices = ["home", "menu", "contact"];
    const navElement = document.createElement("nav");
    const listElement = document.createElement("ul");

    navChoices.forEach(navItem => {
        let itemElement = document.createElement("li");
        const txt = document.createTextNode(navItem);
        itemElement.appendChild(txt);
        listElement.appendChild(itemElement);
    });

    navElement.appendChild(createLogoDiv("Napoli Pizzeria"));

    navElement.appendChild(listElement);
    container.appendChild(navElement);
}

const createLogoDiv = (title) => {
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    const heading = document.createElement("h1");
    const txt = document.createTextNode(title);

    heading.appendChild(txt);
    logoDiv.appendChild(heading);

    return logoDiv;
}

export { generate };