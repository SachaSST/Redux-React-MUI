import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '../makeStyles';
import dayjs from 'dayjs';

const useStyles = makeStyles<{ completed: boolean }>()(
  (_theme, { completed }) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      backgroundColor: completed ? '#407531' : '#424242',
      color: completed ? '#fff' : '#fff',
      textDecoration: completed ? 'line-through' : 'none',
    },
    text: {
      flex: 1,
      marginLeft: '10px',
    },
    dueDate: {
      marginLeft: '10px',
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
      <Typography variant="body2" className={classes.dueDate}>
        {dayjs(todo.dueDate).format('DD/MM/YYYY HH:mm')}
      </Typography>
      <Box>
        <IconButton edge="end" onClick={handleArchive} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TodoItem;
