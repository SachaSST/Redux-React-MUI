import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';
import notificationsReducer from './features/notifications/notificationsSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    notifications: notificationsReducer,
  },
});

export default store;
