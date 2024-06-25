import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import { restoreTodo } from '../features/todos/todosSlice';

const ArchivedMenu = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const archivedTodos = useSelector((state) => state.todos.archived);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleRestore = (id) => {
    dispatch(restoreTodo(id));
  };

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {archivedTodos.map((todo) => (
            <ListItem button key={todo.id}>
              <ListItemText primary={todo.text} />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleRestore(todo.id)}>
                  <RestoreIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ArchivedMenu;
