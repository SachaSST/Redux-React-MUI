import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, ListItemSecondaryAction, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import { restoreTodo } from '../features/todos/todosSlice';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles()({
    drawerList: {
        width: 250
    }
});

const ArchivedMenuBar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const archivedTodos = useSelector((state: any) => state.todos.archived);
    const { classes } = useStyles();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && (event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift') {
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
                        Archived Tasks
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List className={classes.drawerList}>
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
