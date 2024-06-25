import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Box width="100%" component="form" onSubmit={handleSubmit} display="flex" alignItems="center" justifyContent="center">
      <TextField 
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="New Todo"
        variant="outlined"
        style={{ marginRight: '10px' }}
      />
      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
