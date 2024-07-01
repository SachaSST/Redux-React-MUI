import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useSelector } from 'react-redux';
import styled from '@emotion/styled';

const localizer = momentLocalizer(moment);

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #121212;
  color: #fff;
`;

const StyledCalendar = styled(Calendar)`
  width: 80%;
  max-width: 1200px;
  height: 80vh;
  background-color: #1e1e1e;
  color: #fff;

  .rbc-toolbar {
    background-color: #2e2e2e;
    border-bottom: 1px solid #444;
    margin-bottom: 20px;
  }

  .rbc-toolbar button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    margin: 0 5px;
    cursor: pointer;
  }

  .rbc-toolbar button:hover {
    background-color: #555;
  }

  .rbc-month-view, .rbc-time-view {
    background-color: #2e2e2e;
  }

  .rbc-event {
    background-color: #4caf50;
    border-radius: 4px;
    padding: 5px;
    color: #fff;
  }

  .rbc-selected {
    background-color: #388e3c !important;
  }

  .rbc-today {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .rbc-off-range-bg {
    background-color: #333;
  }
`;

const CalendarView = () => {
  const todos = useSelector((state: any) => state.todos.active);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const formattedEvents = todos.map((todo: any) => ({
      title: todo.text,
      start: new Date(todo.dueDate),
      end: new Date(todo.dueDate),
      allDay: true,
    }));
    setEvents(formattedEvents);
  }, [todos]);

  return (
    <CalendarContainer>
      <StyledCalendar
        localizer={localizer}
        events={events}
        startAccessor={(event: any) => new Date(event.start)}
        endAccessor={(event: any) => new Date(event.end)}
        style={{ height: 500 }}
      />
    </CalendarContainer>
  );
};

export default CalendarView;
