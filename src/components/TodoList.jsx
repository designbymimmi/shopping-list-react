import React from "react";
import Todo from './Todo.jsx'

function TodoList({ todoListItems, handleToggle, handleFilter }) {
    return (
        <ul className="list-group">
            {todoListItems.map(todoItem => {
                return (
                    <Todo todoItem={todoItem} handleToggle={handleToggle} handleFilter={handleFilter}/>
                )
            })}
            <button onClick={handleFilter} className="btn btn-danger font-weight-bold">Delete Completed</button>
        </ul>
    )
};

export default TodoList;
