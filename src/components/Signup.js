import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (email, password) => {
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        throw new Error('Failed to sign up');
      }
      alert('Sign up successful');
    } catch (err) {
      console.error(err);
      alert('Error signing up');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(email, password);
  };

  return (
    <Box>
      <Typography variant="h6">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
