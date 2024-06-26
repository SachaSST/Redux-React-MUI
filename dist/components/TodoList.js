import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import TodoItem from './TodoItem';
var TodoList = function () {
    var todos = useSelector(function (state) { return state.todos.active; });
    return (_jsx(List, { children: todos.map(function (todo) { return (_jsx(TodoItem, { todo: todo }, todo.id)); }) }));
};
export default TodoList;
