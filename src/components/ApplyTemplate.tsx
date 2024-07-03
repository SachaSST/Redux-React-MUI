import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTodo } from '../features/todos/todosSlice';
import { Box, Button, Typography, MenuItem, Select, Paper } from '@mui/material';

const ApplyTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state: RootState) => state.templates.templates);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleApplyTemplate = () => {
    if (selectedTemplate === null) return;

    const template = templates.find((t) => t.id === selectedTemplate);
    if (template) {
      template.tasks.forEach((task) => {
        const taskDate = new Date();
        dispatch(
          addTodo({
            text: task.text,
            dueDate: taskDate.toISOString(),
            recurrence: '',
          })
        );
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', width: '100%' }}>
        <Typography variant="h6" gutterBottom>
          Apply Template
        </Typography>
        <Select
          value={selectedTemplate ?? ''}
          onChange={(e) => setSelectedTemplate(Number(e.target.value))}
          fullWidth
          
        >
          {templates.map((template) => (
            <MenuItem key={template.id} value={template.id}>
              {template.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="contained" color="primary" onClick={handleApplyTemplate}>
          Apply Template
        </Button>
      </Paper>
    </Box>
  );
};

export default ApplyTemplate;
