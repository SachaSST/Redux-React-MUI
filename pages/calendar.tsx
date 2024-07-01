import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import CalendarView from '../src/components/CalendarView';

const CalendarPage: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '80px' }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h3" gutterBottom>
          Task Calendar
        </Typography>
        <CalendarView />
      </Box>
    </Container>
  );
};

export default CalendarPage;
