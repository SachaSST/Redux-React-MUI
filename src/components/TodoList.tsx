import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { List, Box, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import SearchBar from './SearchBar';

const TodoList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const todos = useSelector((state: any) => state.todos.active);

  const filteredTodos = todos.filter((todo: any) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box width="100%">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <List>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo: any) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography variant="body1" color="textSecondary" align="center">
            No tasks found
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default TodoList;
