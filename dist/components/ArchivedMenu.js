import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer, List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from '@mui/icons-material/Restore';
import { restoreTodo } from '../features/todos/todosSlice';
var ArchivedMenu = function () {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var dispatch = useDispatch();
    var archivedTodos = useSelector(function (state) { return state.todos.archived; });
    var toggleDrawer = function (open) { return function (event) {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    }; };
    var handleRestore = function (id) {
        dispatch(restoreTodo(id));
    };
    return (_jsxs("div", { children: [_jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", onClick: toggleDrawer(true), children: _jsx(MenuIcon, {}) }), _jsx(Drawer, { anchor: "left", open: open, onClose: toggleDrawer(false), children: _jsx(List, { children: archivedTodos.map(function (todo) { return (_jsxs(ListItem, { button: true, children: [_jsx(ListItemText, { primary: todo.text }), _jsx(ListItemSecondaryAction, { children: _jsx(IconButton, { edge: "end", onClick: function () { return handleRestore(todo.id); }, children: _jsx(RestoreIcon, {}) }) })] }, todo.id)); }) }) })] }));
};
export default ArchivedMenu;
