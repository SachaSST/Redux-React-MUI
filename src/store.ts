import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import notificationsReducer from './features/notifications/notificationsSlice';
import templatesReducer from './features/templates/templatesSlice';
import userReducer from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    notifications: notificationsReducer,
    templates: templatesReducer,
    user: userReducer,
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