import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    active: [],
    archived: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.active.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.active.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    archiveTodo: (state, action) => {
      const todoIndex = state.active.findIndex(todo => todo.id === action.payload);
      if (todoIndex >= 0) {
        const [todo] = state.active.splice(todoIndex, 1);
        state.archived.push(todo);
      }
    },
    restoreTodo: (state, action) => {
      const todoIndex = state.archived.findIndex(todo => todo.id === action.payload);
      if (todoIndex >= 0) {
        const [todo] = state.archived.splice(todoIndex, 1);
        state.active.push(todo);
      }
    }
  },
});

export const { addTodo, toggleTodo, archiveTodo, restoreTodo } = todosSlice.actions;
export default todosSlice.reducer;
