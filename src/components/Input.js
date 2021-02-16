import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'

const Input = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addTodo = () => {
        dispatch(saveTodo({
            id: Date.now(),
            text: input,
            done: false
        }))
    }


    return (
        <div>
            <input type='text' onChange={(e) => setInput(e.target.value)} />
            <input type='button' value='Add' onClick={addTodo} />
        </div>
    )
}

export default Input
