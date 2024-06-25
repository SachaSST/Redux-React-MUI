import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ArchivedMenuBar from './components/ArchivedMenuBar';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <div>
      <ArchivedMenuBar />
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
    </div>
  );
};

export default App;
