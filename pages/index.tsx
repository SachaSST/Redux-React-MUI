import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AddTodo from '../src/components/AddTodo';
import TodoList from '../src/components/TodoList';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '80px' }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={2}
          mt={2}
        >
          <Typography variant="h3" gutterBottom>
            Todo List React/Redux/MUI
          </Typography>
          <AddTodo />
        </Box>
        <Box width="100%" display="flex" justifyContent="center">
          <TodoList />
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
