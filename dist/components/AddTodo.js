import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
var AddTodo = function () {
    var _a = useState(''), text = _a[0], setText = _a[1];
    var dispatch = useDispatch();
    var handleSubmit = function (e) {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };
    return (_jsxs(Box, { width: "100%", component: "form", onSubmit: handleSubmit, display: "flex", alignItems: "center", justifyContent: "center", children: [_jsx(TextField, { fullWidth: true, value: text, onChange: function (e) { return setText(e.target.value); }, label: "New Todo", variant: "outlined", style: { marginRight: '10px' } }), _jsx(Button, { type: "submit", variant: "contained", endIcon: _jsx(SendIcon, {}), children: "Add" })] }));
};
export default AddTodo;
