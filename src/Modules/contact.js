import {createList} from './handler'

const contact = {
    renderAllId: 'contentSection',
    render: (location) => {
        createList(location, 'Do you really wanna Andy\'s contact tho?')
    }
}

export {contact}