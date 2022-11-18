import React, { useState } from "react";

function TodoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };
    
    return (
        <div className="card-body">
            <form onSubmit={handleSubmit} className="input-group mb-4">
                <input className="form-control" value={userInput} type="text" onChange={handleChange} placeholder="New item..." />
                <div className="input-group-append">
                    <button className="btn btn-warning input-group-button font-weight-bold">Add</button>
                </div>
            </form>
        </div>
    )
};

export default TodoForm;
