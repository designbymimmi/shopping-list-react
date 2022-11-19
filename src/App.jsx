import React, { useState } from "react";
import './App.css';
import Header from './components/Header.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx';
import DeleteCompleted from './components/DeleteComplete.jsx';

function App() {

  const [todoListItems, setTodoListItems] = useState([]);

  const addTask = (userInputText) => {
    const newTodo = {
      id: new Date().getTime(), //create unique ID
      text: userInputText,
      completed: false
    }
    setTodoListItems([...todoListItems].concat(newTodo));
  };

  const handleToggle = (id) => {
    const updatedTodoItems = [...todoListItems].map((todo) => {
      if (todo.id == id) {
        todo.completed = !todo.completed; 
      }
      return todo;
    })
    setTodoListItems(updatedTodoItems);
  };

  const handleFilter = () => {
    let filtered = todoListItems.filter(task => {
      return !task.completed;
    });
    setTodoListItems(filtered);
  };

  return (
    <div>
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList todoListItems={todoListItems} handleToggle={handleToggle} handleFilter={handleFilter} />
      <DeleteCompleted handleFilter={handleFilter} />
    </div>
  );
};

export default App;
