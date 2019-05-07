import React from 'react';

const TodoList = props => {
    const { todos, filter } = props;
    const show = todos.filter(todo => {
        if (filter === "all") {
            return true;
        } else if (filter === "active") {
            return !todo.completed;
        } else {
            return todo.completed;
        }
    });
    return (
        <div>
            {
                show.map((todo, index) => {
                    return (
                        <li 
                            key={index} 
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                            onClick={() => {props.toggleTodo(index)}}> 
                            {todo.text}
                        </li>
                    );
                })
            }
        </div>
    );
}

export default TodoList;