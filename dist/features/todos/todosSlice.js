var _a;
import { createSlice } from '@reduxjs/toolkit';
var todosSlice = createSlice({
    name: 'todos',
    initialState: {
        active: [],
        archived: []
    },
    reducers: {
        addTodo: function (state, action) {
            state.active.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: function (state, action) {
            var todo = state.active.find(function (todo) { return todo.id === action.payload; });
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        archiveTodo: function (state, action) {
            var todoIndex = state.active.findIndex(function (todo) { return todo.id === action.payload; });
            if (todoIndex >= 0) {
                var todo = state.active.splice(todoIndex, 1)[0];
                state.archived.push(todo);
            }
        },
        restoreTodo: function (state, action) {
            var todoIndex = state.archived.findIndex(function (todo) { return todo.id === action.payload; });
            if (todoIndex >= 0) {
                var todo = state.archived.splice(todoIndex, 1)[0];
                state.active.push(todo);
            }
        }
    },
});
export var addTodo = (_a = todosSlice.actions, _a.addTodo), toggleTodo = _a.toggleTodo, archiveTodo = _a.archiveTodo, restoreTodo = _a.restoreTodo;
export default todosSlice.reducer;
