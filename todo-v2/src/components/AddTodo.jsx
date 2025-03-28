import React, { useContext, useState, useRef } from "react";
import { TodoContext } from "../store/TodoContext";

const AddTodo = () => {
  const { addHandler } = useContext(TodoContext);

  const nameElement = useRef(null);
  const dateElement = useRef(null);

  // const [name, setName] = useState("");
  // const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameElement.current.value;
    const date = dateElement.current.value;
    addHandler(name, date);
    nameElement.current.value = null
    dateElement.current.value = null
  };
  return (
    <form
      onSubmit={submitHandler}
      className="add d-flex justify-content-between "
    >
      <input
        style={{ width: "250px" }}
        type="text"
        placeholder="Add Todo here..."
        ref={nameElement}
        className="form-control"
      />
      <input
        style={{ width: "310px" }}
        type="date"
        ref={dateElement}
        className="form-control"
      />
      <button type="submit" className="btn-primary btn px-4">
        +
      </button>
    </form>
  );
};

export default AddTodo;
