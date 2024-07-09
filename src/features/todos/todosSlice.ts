// src/features/todos/todosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
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
  archived: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.active.push(action.payload);
    },
    archiveTodo: (state, action: PayloadAction<number>) => {
      const index = state.active.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.archived.push(state.active[index]);
        state.active.splice(index, 1);
      }
    },
    restoreTodo: (state, action: PayloadAction<number>) => {
      const index = state.archived.findIndex(todo => todo.id === action.payload);
      if (index !== -1) {
        state.active.push(state.archived[index]);
        state.archived.splice(index, 1);
      }
    },
  },
});

export const { addTodo, archiveTodo, restoreTodo } = todosSlice.actions;
export type { Todo, TodosState };
export default todosSlice.reducer;