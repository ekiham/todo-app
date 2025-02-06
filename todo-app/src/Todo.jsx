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

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      {edit.id === todo.id ? (
        <TodoForm edit={edit} onSubmit={submitUpdate} />
      ) : (
        <>
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
              className="edit-icon"
            />
          </div>
        </>
      )}
    </div>
  ));
}

export default Todo;
