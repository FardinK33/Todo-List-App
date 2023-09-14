import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, changeEdit } from "../../../redux/features/todo.slice";

import './add-todo.styles.scss';

const EditTodo = ({todo}) => {
  const [task, setTask] = useState(todo.task);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    if (task.trim() === '') return;

    dispatch(updateTodo({...todo, task: task}));
    changeEdit();
    setTask('');
  }

  return (
    <form className="form-container edit-todo" onSubmit={handleChange}>
      <input 
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
    </form>
  );
};

export default EditTodo;
