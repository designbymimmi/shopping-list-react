import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Header from './components/Header.jsx';
import ShoppingForm from './components/ShoppingForm.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import DeleteCompleted from './components/DeleteComplete.jsx';

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([]);
  const API_URL = "http://localhost:3001/api/v1/items";

  const getAPIData = () => {
    axios.get(API_URL)
    .then(response => {
      setShoppingListItems(response.data);
    })
    .catch(error => console.error(error));
  }

  // useEffect runs after APP is rendered.
  // The empty [] tells useEffect to only render if certain values have changed.
  useEffect(() => {
    getAPIData();
  }, [])

  const addItem = (userInputText) => {
    const newItem = {
      text: userInputText,
      completed: false
    };

    axios.post(API_URL, newItem)
    .then(() => getAPIData())
  };

  const handleToggle = (id) => {
      shoppingListItems.forEach(item => {
        if (parseInt(id) === item.id) {
          axios.patch(API_URL + "/" + id, {
            completed: !item.completed
          })
          .then(() => getAPIData())
          .catch(error => console.log(error));
        }
      })
  };

  const handleFilter = () => {
    shoppingListItems.forEach(item => {
      if (item.completed === true) {
        axios.delete(API_URL + "/" + item.id.toString())
        .then(() => getAPIData())
        .catch(error => console.error(error))
      }
    })
  };

  return (
    <div>
      <Header />
      <ShoppingForm addItem={addItem} />
      <ShoppingList shoppingListItems={shoppingListItems} handleToggle={handleToggle} />
      <DeleteCompleted handleFilter={handleFilter} />
    </div>
  );
};

export default App;
