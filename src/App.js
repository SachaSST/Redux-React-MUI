import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Todo List
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

export default App;
