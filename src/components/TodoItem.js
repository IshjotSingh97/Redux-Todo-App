import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

const TodoItem = ({ id, text, done }) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div>
            <p onClick={handleCheck}>{text} {done.toString()}</p>
            <p>Click to change status</p>
        </div>
    )
}

export default TodoItem
