// src/components/Profile.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUserInfo } from '../features/users/userSlice';
import { Container, Typography, Button, Box } from '@mui/material';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserInfo);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!userInfo) {
    return (
      <Container maxWidth="sm">
        <Box mt={5}>
          <Typography variant="h6" component="h1">
            You are not logged in
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1">
          Profile
        </Typography>
        <Typography variant="body1">Username: {userInfo.username}</Typography>
        <Typography variant="body1">Email: {userInfo.email}</Typography>
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;