import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    active: [
      { id: 1, text: 'Faire mon lit', completed: false, icon: 'bed', details: '' },
      { id: 2, text: 'Boire de l\'eau', completed: false, icon: 'water', details: '0/1 verre' },
      { id: 3, text: 'Concentre-toi avec la technique Pomodoro', completed: false, icon: 'timer', details: '25min' },
      { id: 4, text: 'Aller à la salle de sport', completed: false, icon: 'fitness', details: '0/1 fois' },
      { id: 5, text: 'Méditer', completed: false, icon: 'meditation', details: '10min' }
    ],
    archived: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.active.push({ id: Date.now(), text: action.payload, completed: false, icon: 'bed', details: '' });
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
