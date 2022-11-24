import React, { useState } from "react";
import './App.css';
import Header from './components/Header.jsx';
import ShoppingForm from './components/ShoppingForm.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import DeleteCompleted from './components/DeleteComplete.jsx';

function App() {

  const [shoppingListItems, setshoppingListItems] = useState([]);

  const addTask = (userInputText) => {
    const newshopping = {
      id: new Date().getTime(), //create unique ID
      text: userInputText,
      completed: false
    }
    setshoppingListItems([...shoppingListItems].concat(newshopping));
  };

  const handleToggle = (id) => {
    const updatedshoppingItems = [...shoppingListItems].map((shopping) => {
      if (shopping.id == id) {
        shopping.completed = !shopping.completed; 
      }
      return shopping;
    })
    setshoppingListItems(updatedshoppingItems);
  };

  const handleFilter = () => {
    let filtered = shoppingListItems.filter(task => {
      return !task.completed;
    });
    setshoppingListItems(filtered);
  };

  return (
    <div>
      <Header />
      <ShoppingForm addTask={addTask} />
      <ShoppingList shoppingListItems={shoppingListItems} handleToggle={handleToggle} handleFilter={handleFilter} />
      <DeleteCompleted handleFilter={handleFilter} />
    </div>
  );
};

export default App;
