import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate: string;
}

interface TodosState {
  active: Todo[];
  archived: Todo[];
}

const initialState: TodosState = {
  active: [],
  archived: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string; dueDate: string }>) => {
      state.active.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
        dueDate: action.payload.dueDate
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.active.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    archiveTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.active.findIndex(todo => todo.id === action.payload);
      if (todoIndex >= 0) {
        const [todo] = state.active.splice(todoIndex, 1);
        state.archived.push(todo);
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.archived.findIndex(todo => todo.id === action.payload);
      if (todoIndex >= 0) {
        const [todo] = state.archived.splice(todoIndex, 1);
        state.active.push(todo);
      }
    },
    checkDueTodos: (state) => {
      const now = new Date().toISOString();
      state.active.forEach(todo => {
        if (new Date(todo.dueDate) <= new Date(now)) {
          todo.completed = true;
        }
      });
    }
  }
});

export const { addTodo, toggleTodo, archiveTodo, restoreTodo, checkDueTodos } = todosSlice.actions;
export default todosSlice.reducer;
