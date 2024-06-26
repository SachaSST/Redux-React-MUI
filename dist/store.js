import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
var store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
export default store;
