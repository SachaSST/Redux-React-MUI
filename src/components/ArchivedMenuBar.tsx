import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { restoreTodo } from '../features/todos/todosSlice';
import { RootState } from '../store';
import { clearNotifications } from '../features/notifications/notificationsSlice';

interface ArchivedMenuBarProps {
  onLogout: () => void;
}

const ArchivedMenuBar: React.FC<ArchivedMenuBarProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const archivedTodos = useSelector((state: RootState) => state.todos.archived);
  const notifications = useSelector((state: RootState) => state.notifications.notifications);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleRestore = (id: number) => {
    dispatch(restoreTodo(id));
  };

  const handleNotificationsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  const handleClearNotifications = () => {
    dispatch(clearNotifications());
    handleNotificationsClose();
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
            <Link href="/calendar" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                calendar
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
          <IconButton color="inherit" onClick={handleNotificationsClick}>
            <NotificationsIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleNotificationsClose}
          >
            {notifications.length === 0 ? (
              <MenuItem disabled>No notifications</MenuItem>
            ) : (
              notifications.map((notification) => (
                <MenuItem key={notification.id}>{notification.message}</MenuItem>
              ))
            )}
            <MenuItem onClick={handleClearNotifications}>Clear all</MenuItem>
          </Menu>
          <Button color="inherit">
            <Link href="/auth/signin" passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: 'inherit' }}>
                Sign In
              </a>
            </Link>
          </Button>
          <Button color="inherit">
  <Link href="/auth/signup" passHref legacyBehavior>
    <a style={{ textDecoration: 'none', color: 'inherit' }}>
      Sign Up
    </a>
  </Link>
</Button>

        </Toolbar>
      </AppBar>
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
    </Box>
  );
};

export default ArchivedMenuBar;
