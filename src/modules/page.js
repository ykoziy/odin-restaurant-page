import { generate as generateHeader} from './header';
import { generate as generateMain, togglePage} from './main';
import { generate as generateFooter} from './footer';

const loadPage = () => {
    const contentDiv = document.getElementById("content");
    generateHeader(contentDiv);
    generateMain(contentDiv);
    generateFooter(contentDiv);
}

const handleNavClick = (event) => {
    const navItems = Array.from(event.currentTarget.parentNode.children);
    navItems.forEach(item => {
        item.classList.remove("active");
    });
    event.target.classList.add("active");
    togglePage(event.target.textContent);
}

export { loadPage, handleNavClick };