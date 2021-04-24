const socialNetworks = [
    {
        "url": "https://twitter.com/",
        "icon": "fa-twitter"
    },
    {
        "url": "https://www.instagram.com/",
        "icon": "fa-instagram"
    },
    {
        "url": "https://www.facebook.com/",
        "icon": "fa-facebook"
    },        
];


const generate = (container) => {
    const credits = "Created by Yuriy Koziy. © 2021";
    const footerElement = document.createElement("footer");

    footerElement.appendChild(createCreditDiv(credits));
    footerElement.appendChild(createSocialDiv());

    container.appendChild(footerElement);
}

const createCreditDiv = (contents) => {
    const creditDiv = document.createElement("div");
    const pElement =  document.createElement("p");
    const txt = document.createTextNode(contents);

    pElement.appendChild(txt);
    creditDiv.id = "credit";
    creditDiv.appendChild(pElement);

    return creditDiv;
}

const createSocialDiv = () => {
    const socialDiv = document.createElement("div");
    const listElement = document.createElement("ul");

    socialNetworks.forEach(item => {
        let itemElement = document.createElement("li");
        itemElement.appendChild(createSocialLink(item.url, item.icon));
        listElement.appendChild(itemElement);
    });

    socialDiv.id = "social";
    socialDiv.appendChild(listElement);

    return socialDiv;
}

const createSocialLink = (url, icon) => {
    const aElement = document.createElement("a");
    const iconElement = document.createElement("i");

    aElement.href = url;
    aElement.target = "_blank";

    iconElement.classList.add("fab", "fa-2x", icon);

    aElement.appendChild(iconElement);
    return aElement;
}

export { generate };
