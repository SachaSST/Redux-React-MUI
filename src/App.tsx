import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ArchivedMenuBar from './components/ArchivedMenuBar';
import Weather from './components/Weather';
import AddTemplate from './components/AddTemplate';
import ApplyTemplate from './components/ApplyTemplate';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { Container, Typography, Box } from '@mui/material';

const App: React.FC = () => {
  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <div>
      <ArchivedMenuBar onLogout={handleLogout} />
      <Container maxWidth="md" style={{ marginTop: '80px' }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
          <Routes>
            <Route path="/" element={
              <>
                <Box width="100%" display="flex" flexDirection="column" alignItems="center" mb={2} mt={2}>
                  <Typography variant="h3" gutterBottom>Todo List React/Redux/MUI</Typography>
                  <AddTodo />
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <TodoList />
                </Box>
              </>
            } />
            <Route path="/weather" element={<Weather />} />
            <Route path="/add-template" element={<AddTemplate />} />
            <Route path="/apply-template" element={<ApplyTemplate />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Container>
    </div>
  );
};

export default App;