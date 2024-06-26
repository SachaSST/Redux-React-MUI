import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box, Typography, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BedIcon from '@mui/icons-material/Bed';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import OpacityIcon from '@mui/icons-material/Opacity';
import TimerIcon from '@mui/icons-material/Timer';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles<{ completed: boolean; dueDate: string }>()(
  (_theme, { completed, dueDate }) => ({
    root: {
      textDecoration: completed ? 'line-through' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: dayjs(dueDate).isBefore(dayjs()) ? '#ffcccb' : '#424242',
      padding: '10px',
      borderRadius: '8px',
      color: '#fff',
      marginBottom: '10px',
      transition: 'background-color 0.3s ease',
    },
    details: {
      textAlign: 'right',
      color: '#90caf9',
      marginLeft: '10px',
    },
    icon: {
      marginRight: '10px',
    },
  })
);

const TodoItem = ({ todo }: any) => {
  const dispatch = useDispatch();
  const { classes } = useStyles({ completed: todo.completed, dueDate: todo.dueDate });

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
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Checkbox
            checked={todo.completed}
            onChange={handleToggle}
            inputProps={{ 'aria-label': 'controlled' }}
            className={classes.icon}
          />
          {renderIcon()}
          <ListItemText primary={todo.text} />
          <Typography variant="body2" className={classes.details}>
            {dayjs(todo.dueDate).locale('fr').format('DD/MM/YYYY HH:mm')}
          </Typography>
          <IconButton edge="end" onClick={handleArchive} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
