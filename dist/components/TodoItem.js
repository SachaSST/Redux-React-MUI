import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, archiveTodo } from '../features/todos/todosSlice';
import { ListItem, ListItemText, IconButton, Checkbox, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
var TodoItem = function (_a) {
    var todo = _a.todo;
    var dispatch = useDispatch();
    var handleToggle = function () {
        dispatch(toggleTodo(todo.id));
    };
    var handleArchive = function () {
        dispatch(archiveTodo(todo.id));
    };
    return (_jsxs(ListItem, { children: [_jsx(Checkbox, { checked: todo.completed, onChange: handleToggle, inputProps: { 'aria-label': 'controlled' } }), _jsx(ListItemText, { primary: todo.text, style: { textDecoration: todo.completed ? 'line-through' : 'none' } }), _jsx(Box, { children: _jsx(IconButton, { edge: "end", onClick: handleArchive, "aria-label": "delete", children: _jsx(DeleteIcon, {}) }) })] }));
};
export default TodoItem;
