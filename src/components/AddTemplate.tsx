import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTemplate } from '../features/templates/templatesSlice';
import { Box, Button, TextField, Typography, Grid, Paper } from '@mui/material';

const AddTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const [templateName, setTemplateName] = useState('');
  const [tasks, setTasks] = useState([{ day: '', time: '', text: '' }]);

  const handleAddTask = () => {
    setTasks([...tasks, { day: '', time: '', text: '' }]);
  };

  const handleTaskChange = (index: number, key: string, value: string) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, [key]: value } : task
    );
    setTasks(updatedTasks);
  };

  const handleSubmit = () => {
    dispatch(addTemplate({ name: templateName, tasks }));
    setTemplateName('');
    setTasks([{ day: '', time: '', text: '' }]);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Add New Template
        </Typography>
        <TextField
          label="Template Name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          fullWidth
          margin="normal"
        />
        {tasks.map((task, index) => (
          <Grid container spacing={2} key={index} style={{ marginBottom: '10px' }}>
            <Grid item xs={4}>
              <TextField
                label="Day"
                value={task.day}
                onChange={(e) => handleTaskChange(index, 'day', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Time"
                value={task.time}
                onChange={(e) => handleTaskChange(index, 'time', e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Task"
                value={task.text}
                onChange={(e) => handleTaskChange(index, 'text', e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        ))}
        <Button variant="contained" color="primary" onClick={handleAddTask} style={{ marginRight: '10px' }}>
          Add Task
        </Button>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Save Template
        </Button>
      </Paper>
    </Box>
  );
};

export default AddTemplate;
