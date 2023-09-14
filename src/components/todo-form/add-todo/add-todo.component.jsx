import React, { useState } from "react";

import "./add-todo.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/features/todo.slice";


const AddTodo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const listID = useSelector(state => state.todoSlice.currListID);
  const length = useSelector(state => state.todoSlice.todoList.length);
  const isEditing = useSelector(state => state.todoSlice.isEditing);

  const handleSubmit = e => {

    e.preventDefault();

    if (task.trim()==='') return;

    dispatch(addTodo({
      listID: listID,
      task: task,
      isEditing: false,
      isCompleted: false
    }));

    setTask('');

  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type Your Task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        disabled={(listID==length) || (isEditing)}
      />
    </form>
  );
};

export default AddTodo;
