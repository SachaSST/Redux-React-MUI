import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  dueDate: string;
  completed: boolean;
}

interface TodosState {
  active: Todo[];
  archived: Todo[];
}

const initialState: TodosState = {
  active: [],
  archived: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; dueDate: string }>) => {
      state.active.push({
        id: Date.now(),
        text: action.payload.text,
        dueDate: action.payload.dueDate,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.active.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    archiveTodo: (state, action: PayloadAction<number>) => {
      const index = state.active.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        const [todo] = state.active.splice(index, 1);
        state.archived.push(todo);
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const index = state.archived.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        const [todo] = state.archived.splice(index, 1);
        state.active.push(todo);
      }
    },
    clearUser: (state) => {
      state.active = [];
      state.archived = [];
    },
  },
});

export const { addTodo, toggleTodo, archiveTodo, restoreTodo, clearUser } = todosSlice.actions;
export default todosSlice.reducer;
