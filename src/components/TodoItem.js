import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <ListItem
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => dispatch(toggleTodo(todo.id))}
    >
      <ListItemText primary={todo.text} />
      <IconButton edge="end" onClick={() => dispatch(removeTodo(todo.id))}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
