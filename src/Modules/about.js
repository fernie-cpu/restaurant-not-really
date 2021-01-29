const about = {
    renderAllId: 'contentSection',
    render: (element) => {
        const andy = document.createElement('img');
        andy.src = 'img/andy.gif';
        element.appendChild(andy);

        const paraContainer = document.createElement('div');
        paraContainer.classList.add('paraContainer');
        element.appendChild(paraContainer);

        const para = document.createElement('p');
        para.textContent = 'This page isn\'t what you expected right? Yeah, I know. It was supposed to be a project that simulates a restaurant page. But the gist of this project is to learn how modules work and practice it. So consider it as a "Modules exercise".';
        paraContainer.appendChild(para);
    }
}

export {about};