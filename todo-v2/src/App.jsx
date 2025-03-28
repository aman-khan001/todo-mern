import React, { useState, useReducer } from "react";
import "./App.css";
import Logo from "./components/Logo";
import AddTodo from "./components/AddTodo";
import ItemsList from "./components/ItemsList";
import Message from "./components/Message";
import { TodoContext, TodoContextProvider } from "./store/TodoContext";

const App = () => {
  

    return (
      <TodoContextProvider>
        <div
        className="bg-dark  text-light rounded p-2"
        style={{ width: "40vw" }}
      >
        <Logo />
        <AddTodo />
        <Message />
        <ItemsList />
      </div>
      </TodoContextProvider>
    );
 
};

export default App;
