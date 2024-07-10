import React, { useState } from 'react';
import { TextField, Button, Box, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/todoActions'; // Import the action
import { AppDispatch } from '../store'; // Import the AppDispatch type

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
  const [recurrence, setRecurrence] = useState('none');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addPost({
        message: text,
        dueDate: dueDate ? dueDate.toISOString() : '',
        reccurence: recurrence,
      }));
      setText('');
      setDueDate(null);
      setRecurrence('none');
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
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="New Todo"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <DateTimePicker
            label="Due Date"
            value={dueDate}
            onChange={(newValue) => setDueDate(newValue)}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth variant="outlined">
            <InputLabel>Recurrence</InputLabel>
            <Select
              value={recurrence}
              onChange={(e) => setRecurrence(e.target.value)}
              label="Recurrence"
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3} display="flex" justifyContent="center">
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