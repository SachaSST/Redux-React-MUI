import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import notificationsReducer from './features/notifications/notificationsSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    notifications: notificationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
