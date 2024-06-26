import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector((state: any) => state.todos.active);

    return (
        <List>
            {todos.map((todo: any) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </List>
    );
};

export default TodoList;
