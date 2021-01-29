
function createList(location, title, ...arggs) {
    location.textContent = title;
    const list = document.createElement('ul');
    [...arggs].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
    location.appendChild(list);
}


function renderPage(page) {
    return () => {
        const renderAll = document.getElementById(page.renderAllId);
        renderAll.innerHTML = '';
        page.render(renderAll);
    }
}


function buttons(name) {
    const button = document.createElement('button');
    button.setAttribute('id', name.toLowerCase() + 'Button');
    button.className = 'button';
    button.textContent = name;
    navBar.appendChild(button);
}

export {createList, renderPage, buttons};