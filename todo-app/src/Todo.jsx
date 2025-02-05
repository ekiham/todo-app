import { useState } from "react";
import TodoList from "./TodoList";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <IoTrashOutline />
        <CiEdit />
      </div>
    </div>
  ));
}

export default Todo;
