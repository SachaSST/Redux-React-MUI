import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ArchivedMenuBar from './components/ArchivedMenuBar';
import Weather from './components/Weather';
import { Container, Typography, Box } from '@mui/material';
var App = function () {
    return (_jsxs("div", { children: [_jsx(ArchivedMenuBar, {}), _jsx(Container, { maxWidth: "md", style: { marginTop: '80px' }, children: _jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", children: [_jsx(Weather, {}), _jsxs(Box, { width: "100%", display: "flex", flexDirection: "column", alignItems: "center", mb: 2, mt: 2, children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Todo List React/Redux/MUI" }), _jsx(AddTodo, {})] }), _jsx(Box, { width: "100%", display: "flex", justifyContent: "center", children: _jsx(TodoList, {}) })] }) })] }));
};
export default App;
