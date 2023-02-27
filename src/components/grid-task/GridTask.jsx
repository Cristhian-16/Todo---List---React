import React from 'react'
import { GridItem } from '../grid-item/GridItem'
import './GridTask.css'

export const GridTask = ({ tasks, fn }) => {
    return (
        <>
            {
                tasks.map(task => (
                    <GridItem
                        key={task.id}
                        id={task.id}
                        fn={fn}
                    > {task.text} </GridItem>
                ))
            }
        </>

    )
}
