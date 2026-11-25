import { useState } from "react";
import type { FormEvent } from "react";
import type { Todo } from "./types";
import { todos as initialTodos } from "./data";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [title, setTitle] = useState<string>("");
  
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

　　const normalizedTitle: string = title.trim();
　　if (normalizedTitle === "") {
  　　return;
　　}


    const newTodo: Todo = {
      id: Date.now(), title, completed: false,
    };
    setTodos((current) => [...current, newTodo]);
    setTitle("");
  }
  
  return (
    <main>
      <h1>React TODO</h1>
      <TodoList todos={todos}></TodoList>
      <form onSubmit={handleSubmit}>
        <label>
          new todo
          <input value={title}
          onChange={(event) => setTitle(event.target.value)}/>
        </label>
        <button type="submit">追加</button>
      </form>
      <p>入力中：{title}</p>
    </main>
  );
}