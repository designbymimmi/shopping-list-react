import React from "react";

function Todo({ todoItem, handleToggle }) {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    return (
        <div>
            <li className={todoItem.completed ? "list-group-item bg-light strike" : "list-group-item font-weight-bold"}>
                <div className="d-flex justify-content-between">
                    <span>
                        {todoItem.text}
                    </span>

                    <button id={todoItem.id} key={todoItem.id + todoItem.text} name="todo" 
                            value={todoItem.id} onClick={handleClick} className={todoItem.completed ? "btn btn-dark" : "btn btn-primary"}>
                        <i className={todoItem.completed ? "fas fa-undo-alt" : "fas fa-check"}></i>
                    </button>
                </div>
            </li>
        </div>
    )
};

export default Todo;
