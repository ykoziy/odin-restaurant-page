const generate = (container) => {
    const mainElement = document.createElement("main");
    const contentElement = document.createElement("div");

    contentElement.id = "content-main";


    contentElement.appendChild(createHeroDiv());
    mainElement.appendChild(contentElement);
    container.appendChild(mainElement);
}

const createHeroDiv = () => {
    const heroText = 'Authentic italian pizza napoletana. Made with fresh organic ingridients, baked to perfection in wood fired brick oven.';

    const heroDiv = document.createElement("div");
    heroDiv.id = "hero";

    const heading = document.createElement("h1");
    const headingTxt = document.createTextNode("Napoli Pizzeria");
    heading.appendChild(headingTxt);
    heroDiv.appendChild(heading);

    const pElement = document.createElement("p");
    const pTxt = document.createTextNode(heroText);
    pElement.appendChild(pTxt);
    heroDiv.appendChild(pElement);

    const menuButton = document.createElement("button");
    menuButton.classList.add("menu-btn");
    const buttonTxt = document.createTextNode("menu");
    menuButton.appendChild(buttonTxt); 
    heroDiv.appendChild(menuButton);

    return heroDiv;
}

export { generate };