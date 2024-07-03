import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, TextField, Typography } from '@mui/material';
import { signIn } from 'next-auth/react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        await signIn('credentials', { email, password });
        router.push('/');
      } else {
        const errorData = await res.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('An unexpected error happened:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <Box>
      <Typography variant="h6">Sign Up</Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default SignUp;
