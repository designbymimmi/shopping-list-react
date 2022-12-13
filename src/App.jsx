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

  // I SHOULD PROBABLY MOVE THIS INTO ITS OWN FILE AND THEN IMPORT IT
  const getAPIData = () => {
    axios.get(API_URL)
    .then((response) => {
      const items = response.data;
      // console.log(items)
      // Add data to state
      setShoppingListItems(items);
    })
    .catch(error => console.error(`Error: ${error}`));
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
    .then(response => {
      // Get the updated data
      getAPIData();
    })

    // const newItem = {
    //   id: new Date().getTime(), //create unique ID
    //   text: userInputText,
    //   completed: false
    // }
    // setshoppingListItems([...shoppingListItems].concat(newItem));
  };

  const handleToggle = (id) => {
    // const updatedshoppingItems = [...shoppingListItems].map((item) => {
    //   if (item.id == id) {
    //     item.completed = !item.completed; 
    //   }
    //   return item;
    // })
    // setShoppingListItems(updatedshoppingItems);

      shoppingListItems.forEach(item => {
        if (parseInt(id) === item.id) {
          axios.patch(API_URL + "/" + id, {
            completed: !item.completed
          }
          ).then(response => {
            getAPIData();
          }
            )
          .catch(error => console.log(`Error: ${error}`));
        }
      })

  };

  const handleFilter = () => {
    let filtered = shoppingListItems.filter(task => {
      return !task.completed;
    });
    setShoppingListItems(filtered);
  };

  return (
    <div>
      <Header />
      <ShoppingForm addItem={addItem} />
      <ShoppingList shoppingListItems={shoppingListItems} handleToggle={handleToggle} handleFilter={handleFilter} />
      <DeleteCompleted handleFilter={handleFilter} />
    </div>
  );
};

export default App;
