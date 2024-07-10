import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  text: string;
  dueDate: string;
  recurrence: string;
  completed: boolean;
  archived: boolean;
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
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'completed' | 'archived'>>) => {
      const newTodo: Todo = {
        id: state.active.length ? state.active[state.active.length - 1].id + 1 : 1,
        ...action.payload,
        completed: false,
        archived: false,
      };
      state.active.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.active.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    archiveTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.active.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const [archivedTodo] = state.active.splice(todoIndex, 1);
        archivedTodo.archived = true;
        state.archived.push(archivedTodo);
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const todoIndex = state.archived.findIndex(todo => todo.id === action.payload);
      if (todoIndex !== -1) {
        const [restoredTodo] = state.archived.splice(todoIndex, 1);
        restoredTodo.archived = false;
        state.active.push(restoredTodo);
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
