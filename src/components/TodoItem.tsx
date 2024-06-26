import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles<{ completed: boolean; }>()(
    (theme, { completed }) => ({
        root: {
            textDecoration: completed ? 'line-through' : 'none',
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.5),
            backgroundColor: completed ? theme.palette.action.hover : theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            transition: 'background-color 0.3s ease',
            '&:hover': {
                backgroundColor: theme.palette.action.selected,
            },
        },
        text: {
            flex: 1,
            color: completed ? theme.palette.text.disabled : theme.palette.text.primary,
        },
        icon: {
            color: theme.palette.error.main,
        },
    })
);

const TodoItem = ({ todo }: any) => {
    const dispatch = useDispatch();
    const { classes } = useStyles({ completed: todo.completed });

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleArchive = () => {
        dispatch(archiveTodo(todo.id));
    };

    return (
        <ListItem className={classes.root}>
            <Checkbox
                checked={todo.completed}
                onChange={handleToggle}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <ListItemText primary={todo.text} className={classes.text} />
            <Box>
                <IconButton edge="end" onClick={handleArchive} aria-label="delete" className={classes.icon}>
                    <DeleteIcon />
                </IconButton>
            </Box>
        </ListItem>
    );
};

export default TodoItem;
