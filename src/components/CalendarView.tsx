import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Typography, Card, CardContent, useTheme } from '@mui/material';

const localizer = momentLocalizer(moment);

const generateRecurringEvents = (todo: any) => {
  const events = [];
  const startDate = new Date(todo.dueDate);

  if (todo.recurrence === 'daily') {
    for (let i = 0; i < 30; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(newDate.getDate() + i);
      events.push({
        title: todo.text,
        start: newDate,
        end: newDate,
        allDay: true,
      });
    }
  } else if (todo.recurrence === 'weekly') {
    for (let i = 0; i < 12; i++) {
      const newDate = new Date(startDate);
      newDate.setDate(newDate.getDate() + i * 7);
      events.push({
        title: todo.text,
        start: newDate,
        end: newDate,
        allDay: true,
      });
    }
  } else if (todo.recurrence === 'monthly') {
    for (let i = 0; i < 12; i++) {
      const newDate = new Date(startDate);
      newDate.setMonth(newDate.getMonth() + i);
      events.push({
        title: todo.text,
        start: newDate,
        end: newDate,
        allDay: true,
      });
    }
  } else {
    events.push({
      title: todo.text,
      start: startDate,
      end: startDate,
      allDay: true,
    });
  }

  return events;
};

const CalendarView = () => {
  const todos = useSelector((state: any) => state.todos.active);
  const theme = useTheme();

  const events = todos.flatMap((todo: any) => generateRecurringEvents(todo));

  return (
    <Box p={2}>
      <Card sx={{ bgcolor: theme.palette.background.paper, color: theme.palette.text.primary, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Calendar View
          </Typography>
          <Box p={2} style={{ height: '500px' }}>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: '100%' }}
              eventPropGetter={(event) => ({
                style: {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.common.white,
                  borderRadius: '8px',
                  padding: '5px',
                  border: 'none',
                },
              })}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CalendarView;
