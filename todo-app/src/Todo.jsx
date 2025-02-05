import { useState } from "react";
import TodoList from "./TodoList";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <IoTrashOutline
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <CiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="delete-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
