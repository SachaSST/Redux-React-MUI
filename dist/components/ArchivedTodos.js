import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText } from '@mui/material';
var ArchivedTodos = function () {
    var archivedTodos = useSelector(function (state) { return state.todos.archived; });
    return (_jsx(List, { children: archivedTodos.map(function (todo) { return (_jsx(ListItem, { children: _jsx(ListItemText, { primary: todo.text }) }, todo.id)); }) }));
};
export default ArchivedTodos;
