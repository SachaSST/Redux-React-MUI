import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import { useDispatch, useSelector } from 'react-redux';
import { restoreTodo } from '../features/todos/todosSlice';

interface ArchivedMenuBarProps {
  onLogout: () => void;
}

const ArchivedMenuBar: React.FC<ArchivedMenuBarProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const archivedTodos = useSelector((state: any) => state.todos.archived);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleRestore = (id: number) => {
    dispatch(restoreTodo(id));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Archived Tasks
              </a>
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/weather" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Weather
              </a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/add-template" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Add Template
              </a>
            </Link>
          </Button>
          <Button color="inherit">
            <Link href="/apply-template" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Apply Template
              </a>
            </Link>
          </Button>
          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          {archivedTodos.map((todo: any) => (
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
    </Box>
  );
};

export default ArchivedMenuBar;
