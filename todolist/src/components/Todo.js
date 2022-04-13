import React from 'react'
import TodoForm from './TodoForm'

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    return (
        <div>
            <TodoForm />
        </div>
    )
}

export default Todo
