import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { restoreTodo } from '../features/todos/todosSlice';

interface ArchivedMenuBarProps {
  onLogout: () => void;
}

const ArchivedMenuBar: React.FC<ArchivedMenuBarProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const dispatch = useDispatch();
  const archivedTodos = useSelector((state: any) => state.todos.archived);
  const todos = useSelector((state: any) => state.todos.active);

  useEffect(() => {
    const interval = setInterval(checkNotifications, 60000); 
    return () => clearInterval(interval); 
  }, [todos]);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleRestore = (id: number) => {
    dispatch(restoreTodo(id));
  };

  const checkNotifications = () => {
    const now = new Date();
    const newNotifications: string[] = [];

    todos.forEach((todo: any) => {
      const dueDate = new Date(todo.dueDate);
      if (todo.completed) {
        newNotifications.push(`Task "${todo.text}" has been completed.`);
      } else if (dueDate < now) {
        newNotifications.push(`Task "${todo.text}" is overdue.`);
      } else if (dueDate.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
        newNotifications.push(`Task "${todo.text}" is due soon.`);
      }
    });

  

    setNotifications(newNotifications);
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
          <IconButton color="inherit" onClick={() => alert(notifications.join('\n'))}>
            <NotificationsIcon />
          </IconButton>
          <Button color="inherit">
            <Link href="/weather" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Weather
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
