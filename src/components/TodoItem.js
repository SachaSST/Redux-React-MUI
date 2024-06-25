import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleArchive = () => {
    dispatch(archiveTodo(todo.id));
  };

  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <ListItemText 
        primary={todo.text} 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      />
      <Box>
        <IconButton edge="end" onClick={handleArchive} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
