import { useState } from "react";
import TodoList from "./TodoList";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import TodoForm from "./TodoForm";
import { FaCheckCircle } from "react-icons/fa";

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

  return todos.map((todo, index) => (
    <div
      className={
        edit.id === todo.id
          ? "todo-row"
          : todo.isComplete
          ? "todo-row complete"
          : "todo-row"
      }
      key={index}
    >
      {edit.id === todo.id ? (
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      ) : (
        <>
          <div>{todo.text}</div>
          <div className="icons">
            <FaCheckCircle
              onClick={() => completeTodo(todo.id)}
              className="complete-icon"
            />
            <IoTrashOutline
              onClick={() => removeTodo(todo.id)}
              className="delete-icon"
            />
            <CiEdit
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
          </div>
        </>
      )}
    </div>
  ));
}

export default Todo;
