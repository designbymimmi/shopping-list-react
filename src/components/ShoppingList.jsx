import React from "react";
import ShoppingItem from './ShoppingItem.jsx';

function ShoppingList({ shoppingListItems, handleToggle }) {

    return (
        <ul className="list-group">
            {shoppingListItems.map(shoppingItem => {
                return (
                    <ShoppingItem key={shoppingItem.id} shoppingItem={shoppingItem} handleToggle={handleToggle} />
                )
            })}
        </ul>
    )
};

export default ShoppingList;
