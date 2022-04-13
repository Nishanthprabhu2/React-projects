import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    }

    const handleChange = (e)=> {
        setInput(e.target.value)
    }

    return (
       <form  className="todo-form">
            <input 
            type="text" 
            className="todo-input" 
            value = {input} 
            placeholder="Add a todo"
            onChange={ handleChange}
             />
            <button className="todo-button" onClick={handleSubmit}>
                Add todo
            </button>
       </form>
    )
}

export default TodoForm
