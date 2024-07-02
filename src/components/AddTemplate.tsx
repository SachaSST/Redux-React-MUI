import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTemplate } from '../features/templates/templatesSlice';
import { Box, Button, TextField, Typography } from '@mui/material';

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
    <Box>
      <Typography variant="h6">Add New Template</Typography>
      <TextField
        label="Template Name"
        value={templateName}
        onChange={(e) => setTemplateName(e.target.value)}
        fullWidth
      />
      {tasks.map((task, index) => (
        <Box key={index} display="flex" mt={2}>
          <TextField
            label="Day"
            value={task.day}
            onChange={(e) => handleTaskChange(index, 'day', e.target.value)}
            fullWidth
            style={{ marginRight: 8 }}
          />
          <TextField
            label="Time"
            value={task.time}
            onChange={(e) => handleTaskChange(index, 'time', e.target.value)}
            fullWidth
            style={{ marginRight: 8 }}
          />
          <TextField
            label="Task"
            value={task.text}
            onChange={(e) => handleTaskChange(index, 'text', e.target.value)}
            fullWidth
          />
        </Box>
      ))}
      <Button onClick={handleAddTask}>Add Task</Button>
      <Button onClick={handleSubmit}>Save Template</Button>
    </Box>
  );
};

export default AddTemplate;
