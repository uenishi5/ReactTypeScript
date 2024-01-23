import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { Todo } from "./Todo";

//型宣言
type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const getDate = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      });
  };

  return (
    <div className="App">
      <button onClick={getDate}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} id={todo.id} comleted={todo.completed}></Todo>
      ))}
    </div>
  );
}

export default App;
