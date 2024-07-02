import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import notificationsReducer from './features/notifications/notificationsSlice';
import templatesReducer from './features/templates/templatesSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    notifications: notificationsReducer,
    templates: templatesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
