import React from 'react';

import Categories from '../categories/categories.component';
import AddTodo from '../todo-form/add-todo/add-todo.component';
import PrintTodo from '../print-todo/print-todo.component';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../../redux/features/todo.slice';
import EditTodo from '../todo-form/add-todo/edit-todo.component';
import {AiOutlineDelete} from 'react-icons/ai';

import './todo-container.styles.scss';

const Todo = () => {
  
  const listID= useSelector(state => state.todoSlice.currListID);
  const length = useSelector(state => state.todoSlice.todoList.length);
  
  const dispatch = useDispatch();
  let todoList = [];
  
  todoList = useSelector(state => state.todoSlice.todoList);

  return (
    <div className='todo-container'>
        <h1 className="main-heading">Keep Notes of What ToDo !</h1>

        <div className="bg-container">
        
        <Categories />
        <AddTodo />
        
        <div className='list-container'>
        {

          (length > listID) && 
            
          todoList[listID].listData.map(todo => (
            (todo.isEditing) ? 
            <EditTodo key={todo.id} todo={todo}/>
            :
            <PrintTodo key={todo.id} listID={listID} todo={todo} />
            
          ))
            
        }
        </div>
        </div>

        <AiOutlineDelete className='delete-button'
        onClick={()=> dispatch(deleteList(listID))} />

        {/* <button 
        className='list-button'
        onClick={()=> dispatch(deleteList(listID))}
        >Delete List</button> */}
    </div>
  )
}

export default Todo;