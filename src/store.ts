// src/store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todoReducer from './redux/reducers/todoReducer';
import notificationsReducer from './features/notifications/notificationsSlice';
import templatesReducer from './features/templates/templatesSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer, 
    notifications: notificationsReducer,
    templates: templatesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
