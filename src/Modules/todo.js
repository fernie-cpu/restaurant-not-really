import {createList} from './handler'

const todo = {
    renderAllId: 'contentSection',
    render: (location) => {
        createList(location, 'A list of stuff to do','Learn', 'Learn more', 'Keep learning' )
    }
}

export {todo}