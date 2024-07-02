import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store';
import { Todo } from '../todos/todosSlice';

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationsSlice.actions;

export const checkNotifications = (): AppThunk => (dispatch, getState) => {
  const { todos } = getState() as RootState;
  const currentTime = new Date().getTime();

  todos.active.forEach((todo: Todo) => {
    if (!todo.completed && new Date(todo.dueDate).getTime() < currentTime) {
      dispatch(addNotification({ id: todo.id, message: `Task "${todo.text}" is overdue!`, read: false }));
    } else if (todo.completed) {
      dispatch(addNotification({ id: todo.id, message: `Task "${todo.text}" has been completed!`, read: false }));
    }
  });
};

export default notificationsSlice.reducer;
