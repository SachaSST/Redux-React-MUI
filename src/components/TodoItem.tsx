import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '../makeStyles';
import BedIcon from '@mui/icons-material/Bed';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import OpacityIcon from '@mui/icons-material/Opacity';
import TimerIcon from '@mui/icons-material/Timer';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const useStyles = makeStyles<{ completed: boolean }>()(
  (_theme, { completed }) => ({
    root: {
      textDecoration: completed ? 'line-through' : 'none',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#424242',
      marginBottom: '10px',
      padding: '10px',
      borderRadius: '8px',
      color: '#fff',
    },
    icon: {
      marginRight: '10px',
    },
    text: {
      flexGrow: 1,
    },
    details: {
      textAlign: 'right',
      color: '#90caf9',
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

  const renderIcon = () => {
    switch (todo.icon) {
      case 'bed':
        return <BedIcon />;
      case 'water':
        return <OpacityIcon />;
      case 'fitness':
        return <FitnessCenterIcon />;
      case 'timer':
        return <TimerIcon />;
      case 'meditation':
        return <SelfImprovementIcon />;
      default:
        return <BedIcon />;
    }
  };

  return (
    <Paper className={classes.root}>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Box className={classes.icon}>{renderIcon()}</Box>
      <ListItemText className={classes.text}>
        <Typography variant="h6">{todo.text}</Typography>
        <Typography variant="body2" color="textSecondary">Fonce !</Typography>
      </ListItemText>
      <Box className={classes.details}>
        <Typography variant="body2">
          {todo.details}
        </Typography>
      </Box>
      <IconButton edge="end" onClick={handleArchive} aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
};

export default TodoItem;
