import type { Todo } from "../types";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <li>
      <strong>{todo.title}</strong>
      <span> {todo.completed ? "(完了)" : "(未完了)"}</span>
      {todo.dueDate && (
        <span style={{ color: todo.dueDate < today ? "red" : "inherit" }}>
          {" "}期限: {todo.dueDate}
        </span>
      )}
    </li>
  );
}