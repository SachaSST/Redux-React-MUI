import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodo from '../src/components/AddTodo';
import TodoList from '../src/components/TodoList';
import ArchivedMenuBar from '../src/components/ArchivedMenuBar';
import Weather from '../src/components/Weather';
import { Container, Typography, Box } from '@mui/material';

interface AppProps {
  onLogout: () => void;
}

const App: React.FC<AppProps> = ({ onLogout }) => {
  return (
    <div>
      <ArchivedMenuBar onLogout={onLogout} />
      <Container maxWidth="md" style={{ marginTop: '80px' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
};

export default App;
