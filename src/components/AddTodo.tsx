import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';

const AddButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.3s',

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-2px)',
  },
}));

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo({
        text,
        dueDate: dueDate ? dueDate.toISOString() : '',
      }));
      setText('');
      setDueDate(null);
    }
  };

  return (
    <Box
      width="100%"
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={4}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <TextField
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="New Todo"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <DateTimePicker
            label="Due Date"
            value={dueDate}
            onChange={(newValue) => setDueDate(newValue)}
          />
        </Grid>
        <Grid item xs={12} md={2} display="flex" justifyContent="center">
          <AddButton type="submit" variant="contained">
            <SendIcon style={{ marginRight: '5px' }} />
            Add
          </AddButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTodo;
