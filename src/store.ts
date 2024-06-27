import { configureStore, createSlice } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
