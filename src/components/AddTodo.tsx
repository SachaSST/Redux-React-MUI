import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';


const AddButton = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '1.2rem',           
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
      />
    <AddButton component="button">
          <SendIcon style={{ marginRight: '5px' }} />
        </AddButton>
    </Box>
  );
};

export default AddTodo;
