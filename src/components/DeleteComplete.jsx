import React from "react";

function DeleteComplete({ handleFilter }) {
    return (
        <div className="card-footer text-center">
            <button onClick={handleFilter} className="btn btn-danger font-weight-bold">Delete Completed</button>
        </div>
    )
}

export default DeleteComplete;
