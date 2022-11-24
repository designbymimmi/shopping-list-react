import React from "react";

function ShoppingItem({ shoppingItem, handleToggle }) {

    const handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    return (
        <div>
            <li className={shoppingItem.completed ? "list-group-item bg-light strike" : "list-group-item font-weight-bold"}>
                <div className="d-flex justify-content-between">
                    <span>
                        {shoppingItem.text}
                    </span>

                    <button id={shoppingItem.id} key={shoppingItem.id + shoppingItem.text} name="shopping" 
                            value={shoppingItem.id} onClick={handleClick} className={shoppingItem.completed ? "btn btn-dark" : "btn btn-primary"}>
                        <i className={shoppingItem.completed ? "fas fa-undo-alt" : "fas fa-check"}></i>
                    </button>
                </div>
            </li>
        </div>
    )
};

export default ShoppingItem;
