import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { restoreTodo } from '../features/todos/todosSlice';
import { clearNotifications } from '../features/notifications/notificationsSlice';

interface ArchivedMenuBarProps {
  onLogout: () => void;
}

const ArchivedMenuBar: React.FC<ArchivedMenuBarProps> = ({ onLogout }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const dispatch = useDispatch();
  const archivedTodos = useSelector((state: any) => state.todos.archived);
  const notifications = useSelector((state: any) => state.notifications.notifications);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const handleRestore = (id: number) => {
    dispatch(restoreTodo(id));
  };

  const handleNotificationClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
    dispatch(clearNotifications());
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
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Archived Tasks
            </Link>
          </Typography>
          <Button color="inherit">
            <Link href="/weather" style={{ textDecoration: 'none', color: 'inherit' }}>
              Weather
            </Link>
          </Button>
          <IconButton color="inherit" onClick={handleNotificationClick}>
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleNotificationClose}
          >
            {notifications.length > 0 ? (
              notifications.map((notification: any, index: number) => (
                <MenuItem key={index}>{notification.message}</MenuItem>
              ))
            ) : (
              <MenuItem>No Notifications</MenuItem>
            )}
          </Menu>
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
