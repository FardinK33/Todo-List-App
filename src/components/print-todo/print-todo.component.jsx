import React, { useState } from 'react';

import './print-todo.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, changeEdit} from '../../redux/features/todo.slice';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const PrintTodo = ({todo}) => {

  const listId = useSelector(state => state.todoSlice.currListID);
  const isEditing = useSelector(state => state.todoSlice.isEditing);
  const [isCompleted, setIsComplited] = useState(false);

  const dispatch = useDispatch();

  const handleChange = () => {
    if (isEditing) return;
    dispatch(changeEdit(todo));
  }

  return (
    <div className='task'>
        <input className='check' type="checkbox" onClick={() => setIsComplited(!isCompleted)}/>

        <span style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none',
          color: (isCompleted) ? 'gray' : 'black'
        }}>{todo.task}</span>

        <AiFillEdit className='icon' onClick={ handleChange}/>

        <AiFillDelete className='icon' onClick={() => dispatch(deleteTodo({...todo, listID: listId}))} />
    </div>
  )
}

export default PrintTodo;