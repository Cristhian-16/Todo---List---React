import React, { useState } from 'react'
import './Input.css'

export const InputTask = ({ fn }) => {


    const [valueInput, setValueInput] = useState('')

    const onAddChange = (e) => {
        setValueInput(e.target.value)
    }
    const onAddTask = () => {
        if (valueInput.trim().length <= 1) return;

        fn(valueInput)
        setValueInput('')
    }

    return (
        <>
            <input
                onChange={onAddChange}
                className="input-text"
                type="text"
                value={valueInput}
            />
            <button
                className='btn-agregar'
                onClick={onAddTask}
            >
                Agregar
            </button>
        </>
    )
}
