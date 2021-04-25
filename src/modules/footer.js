import { createElement } from './util/dom';
import '../styles/footer.scss';

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
    const creditDiv = createElement("div", "credit");
    const pElement =  createElement("p", null, null, null, contents);

    creditDiv.appendChild(pElement);

    return creditDiv;
}

const createSocialDiv = () => {
    const socialDiv = createElement("div", "social");
    const listElement = createElement("ul");

    socialNetworks.forEach(item => {
        let itemElement = createElement("li");
        itemElement.appendChild(createSocialLink(item.url, item.icon));
        listElement.appendChild(itemElement);
    });

    socialDiv.appendChild(listElement);

    return socialDiv;
}

const createSocialLink = (url, icon) => {
    const aElement = createElement("a", null, null, [['href', url], ['target', '_blank']]);
    const iconElement = createElement("i", null, `fab fa-2x ${icon}`);

    aElement.appendChild(iconElement);
    return aElement;
}

export { generate };
