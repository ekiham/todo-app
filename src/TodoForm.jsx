import { useState, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  useEffect(() => {
    if (props.edit) {
      setInput(props.edit.value);
    }
  }, [props.edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            autoFocus
            placeholder={input}
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            maxLength={30}
          />
          <button className="todo-update-button">Update task</button>
        </>
      ) : (
        <>
          <input
            type="text"
            autoFocus
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            maxLength={30}
          />
          <button className="todo-button">Add a task</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
