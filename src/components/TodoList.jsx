import React from "react";
import Todo from './Todo.jsx'

function TodoList({ todoListItems, handleToggle }) {
    return (
        <ul className="list-group">
            {todoListItems.map(todoItem => {
                return (
                    <Todo todoItem={todoItem} handleToggle={handleToggle} />
                )
            })}
        </ul>
    )
};

export default TodoList;
