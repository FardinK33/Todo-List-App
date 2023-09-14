import React from "react";

import "./categories.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../redux/features/todo.slice";
import AddList from "../todo-form/add-category/add-category.component";

const Categories = () => {
  let lid,
    length,
    title = "";
  useSelector((state) => {
    lid = state.todoSlice.currListID;
    length = state.todoSlice.todoList.length;

    if (lid < length) {
      title = state.todoSlice.todoList[lid].listTitle;
    }
  });

  const dispatch = useDispatch();
  return (
    <div className="categories">
      <a onClick={() => dispatch(decrease())} className="category-button">&#60;</a>
        {title === "" ? (
          <AddList />
        ) : (
          <h2 className="heading">
          {title}
          </h2>
        )}
      <a onClick={() => dispatch(increase(length))} className="category-button">&#62;</a>
    </div>
  );
};

export default Categories;
