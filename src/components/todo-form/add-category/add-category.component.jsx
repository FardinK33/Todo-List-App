import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../../redux/features/todo.slice";

import './add-category.styles.scss';

const AddList = () => {

  const [listName, setListName] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listName.trim() === '') return;
    dispatch(addList(listName));
    setListName('');
  }

  return (
      <form className="form-container" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="add-category"
          placeholder="Create New List" 
          onChange={ e => setListName(e.target.value)}
          value={listName}
        />
      </form>
  );
};

export default AddList;
