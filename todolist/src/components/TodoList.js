import react, {useState} from 'react'
import TodoForm from './TodoForm'

export  function TodoList ()  {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }

    
    return(
        <div>
        <h1>Whats the plan for today</h1>
        <TodoForm onSubmit={addTodo}></TodoForm>
        </div>
        
    )
} 