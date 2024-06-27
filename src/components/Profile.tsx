import React from 'react';
import { Container, Typography } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="body1">
        This is the user profile page.
      </Typography>
    </Container>
  );
};

export default Profile;
