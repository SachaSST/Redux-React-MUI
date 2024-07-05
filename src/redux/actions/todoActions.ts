import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../store';
import { Action } from 'redux';

// Action Types
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const COMPLETE_POST = 'COMPLETE_POST';
export const NOT_COMPLETE_POST = 'NOT_COMPLETE_POST';
export const SET_RECCURENCE = 'SET_RECCURENCE';

interface Post {
  _id?: string;
  message: string;
  completed?: boolean;
  date?: string;
  dueDate?: string; // Add dueDate here
  reccurence?: string;
}

interface AddPostAction {
  type: typeof ADD_POST;
  payload: Post;
}

// Define the Thunk Action type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Action Creators
export const getPosts = (): AppThunk => async dispatch => {
  const response = await axios.get('http://localhost:5001/post');
  dispatch({ type: GET_POSTS, payload: response.data });
};

export const addPost = (postData: Post): AppThunk => async dispatch => {
  const response = await axios.post('http://localhost:5001/post', postData);
  dispatch<AddPostAction>({ type: ADD_POST, payload: response.data });
};

// Define other action creators similarly
export const editPost = (id: string, postData: Post): AppThunk => async dispatch => {
  const response = await axios.put(`http://localhost:5001/post/${id}`, postData);
  dispatch({ type: EDIT_POST, payload: response.data });
};

export const deletePost = (id: string): AppThunk => async dispatch => {
  await axios.delete(`http://localhost:5001/post/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};

export const completePost = (id: string): AppThunk => async dispatch => {
  await axios.patch(`http://localhost:5001/post/completed-task/${id}`);
  dispatch({ type: COMPLETE_POST, payload: id });
};

export const notCompletePost = (id: string): AppThunk => async dispatch => {
  await axios.patch(`http://localhost:5001/post/not-completed-task/${id}`);
  dispatch({ type: NOT_COMPLETE_POST, payload: id });
};

export const setReccurence = (id: string, reccurence: string): AppThunk => async dispatch => {
  const response = await axios.patch(`http://localhost:5001/post/reccurence-task/${id}`, { reccurence });
  dispatch({ type: SET_RECCURENCE, payload: response.data });
};
