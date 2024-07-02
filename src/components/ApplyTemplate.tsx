import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addTodo } from '../features/todos/todosSlice';
import { Box, Button, TextField, Typography, MenuItem, Select } from '@mui/material';

const ApplyTemplate: React.FC = () => {
  const dispatch = useDispatch();
  const templates = useSelector((state: RootState) => state.templates.templates);
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const handleApplyTemplate = () => {
    if (selectedTemplate === null) return;

    const template = templates.find(t => t.id === selectedTemplate);
    if (template) {
      template.tasks.forEach(task => {
        const taskDate = new Date();
        // Ajustez la logique pour définir la date et l'heure de la tâche en fonction du jour et de l'heure du template
        dispatch(addTodo({
          text: task.text,
          dueDate: taskDate.toISOString(),
          recurrence: '',
        }));
      });
    }
  };

  return (
    <Box>
      <Typography variant="h6">Apply Template</Typography>
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
      <Button onClick={handleApplyTemplate}>Apply Template</Button>
    </Box>
  );
};

export default ApplyTemplate;
