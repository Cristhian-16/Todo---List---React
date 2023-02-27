import React from 'react'

export const GridItem = ({ id, fn, children }) => {
    return (
        <li className='list-item'>
            {children}
            <button
                className='btn-list-item'
                onClick={() => fn.onDeleteTask(id)}>
                ❌
            </button>
        </li>
    )
}
