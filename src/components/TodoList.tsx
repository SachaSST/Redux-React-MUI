import React from 'react';
import { useSelector } from 'react-redux';
import { List, Box } from '@mui/material';
import TodoItem from './TodoItem';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles()({
  list: {
    width: '100%',
  },
});

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  icon: string;
  details: string;
}

interface RootState {
  todos: {
    active: Todo[];
    archived: Todo[];
  };
}

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.active);
  const { classes } = useStyles();

  return (
    <Box className={classes.list}>
      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </List>
    </Box>
  );
};

export default TodoList;
