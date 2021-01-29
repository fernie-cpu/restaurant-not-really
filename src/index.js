import "./style.css"
import {mainPage} from './Modules/home'
import {about} from './Modules/about'
import {todo} from './Modules/todo'
import {contact} from './Modules/contact'
import {renderPage} from './Modules/handler'

mainPage();
renderPage(about)();

//add event listeners
const tabs = [
    {id: 'todoButton', render: renderPage(todo)},
    {id: 'homeButton', render: renderPage(about)},
    {id: 'contactButton', render: renderPage(contact)},
];

tabs.forEach(tab => {
    const tabButton = document.getElementById(tab.id);
    tabButton.addEventListener('click', tab.render)
});