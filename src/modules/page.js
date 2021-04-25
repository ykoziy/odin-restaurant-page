import { generate as generateHeader} from './header';
import { generate as generateMain} from './mainHome';
import { generate as generateFooter} from './footer';

const loadPage = () => {
    const contentDiv = document.getElementById("content");
    generateHeader(contentDiv);
    generateMain(contentDiv);
    generateFooter(contentDiv);
}

const togglePage = (page) => {
    if (page == "home") {
        console.log('Load home page.');
    } else if (page == "menu") {
        console.log('Load menu page.');
    } else if (page == "contact") {
        console.log('Load contact page.');
    }
};

const handleNavClick = (event) => {
    const navItems = Array.from(event.currentTarget.parentNode.children);
    navItems.forEach(item => {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
    togglePage(event.target.textContent);
}

export { loadPage, handleNavClick };