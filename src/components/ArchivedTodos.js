import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';

const ArchivedTodos = () => {
  const archivedTodos = useSelector((state) => state.todos.archived);

  return (
    <List>
      {archivedTodos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default ArchivedTodos;
