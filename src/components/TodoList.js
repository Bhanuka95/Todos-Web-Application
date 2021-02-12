import React from 'react';
import ToDo from './Todo';

const TodoList = ({todos}) => {
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <ToDo />
                ))}
            </ul>
            
        </div>
        
    )
}

export default TodoList;