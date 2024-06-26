import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

const AddTodo: React.FC = () => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState<Dayjs | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && dueDate) {
      dispatch(addTodo({
        text,
        dueDate: dueDate.toISOString()
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
    >
      <TextField
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="New Todo"
        variant="outlined"
        style={{ marginRight: '10px' }}
      />
      <DateTimePicker
        label="Due Date"
        value={dueDate as null | undefined}
        onChange={(newValue) => setDueDate(newValue as Dayjs | null)}
        // Remove the renderInput prop
        // renderInput={(params) => <TextField {...params} style={{ marginRight: '10px' }} />}
      />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Add 
      </Button>
    </Box>
  );
};

export default AddTodo;
