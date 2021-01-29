import {buttons} from './handler'

const mainPage = () => {
    const mainDiv = document.getElementById('content');
    const navBar = document.createElement('div');

    function title(){
        const head = document.createElement('h1');
        head.textContent = 'Andy\'s Work';
        navBar.appendChild(head);
    }

    function navButtons() {
        navBar.setAttribute('id', 'navBar')
        mainDiv.appendChild(navBar);
    }
    
    function contentDiv() {
        const contentdiv = document.createElement('div');
        contentdiv.setAttribute('id', 'contentSection')
        mainDiv.appendChild(contentdiv);
    }

    navButtons();
    title();
    contentDiv();
    ['Home', 'TODO', 'Contact'].forEach(btn => buttons(btn));
};

export {mainPage}