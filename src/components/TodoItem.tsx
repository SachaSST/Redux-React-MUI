import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    dueDate: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleArchive = () => {
    dispatch(archiveTodo(todo.id));
  };

  const Root = styled(ListItem)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: todo.completed ? '#407531' : '#424242',
    color: '#fff',
    textDecoration: todo.completed ? 'line-through' : 'none',
  }));

  const Text = styled(ListItemText)({
    flex: 1,
    marginLeft: '10px',
  });

  const DueDate = styled(Typography)({
    marginLeft: '10px',
  });

  return (
    <Root>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <Text primary={todo.text} />
      <DueDate variant="body2">
        {dayjs(todo.dueDate).format('DD/MM/YYYY HH:mm')}
      </DueDate>
      <Box>
        <IconButton edge="end" onClick={handleArchive} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Root>
  );
};

export default TodoItem;
