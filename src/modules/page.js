import { generate as generateHeader} from './header';
import { generate as generateMain} from './mainHome';
import { generate as generateFooter} from './footer';

const loadPage = () => {
    const contentDiv = document.getElementById("content");
    generateHeader(contentDiv);
    generateMain(contentDiv);
    generateFooter(contentDiv);
}

export { loadPage };