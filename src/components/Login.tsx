import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectUserLoading, selectUserError } from '../features/users/userSlice';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { AppDispatch } from '../store'; // Import the AppDispatch type

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>(); // Use the correct dispatch type
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;