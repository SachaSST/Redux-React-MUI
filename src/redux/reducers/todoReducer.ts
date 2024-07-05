import { GET_POSTS, ADD_POST, EDIT_POST, DELETE_POST, COMPLETE_POST, NOT_COMPLETE_POST, SET_RECCURENCE } from '../actions/todoActions';

interface Post {
  _id: string;
  message: string;
  completed: boolean;
  date: string;
  reccurence: string;
}

interface TodoState {
  posts: Post[];
}

const initialState: TodoState = {
  posts: [],
};

const todoReducer = (state = initialState, action: any): TodoState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post._id === action.payload._id ? action.payload : post)),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload),
      };
    case COMPLETE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post._id === action.payload ? { ...post, completed: true } : post)),
      };
    case NOT_COMPLETE_POST:
      return {
        ...state,
        posts: state.posts.map(post => (post._id === action.payload ? { ...post, completed: false } : post)),
      };
    case SET_RECCURENCE:
      return {
        ...state,
        posts: state.posts.map(post => (post._id === action.payload._id ? action.payload : post)),
      };
    default:
      return state;
  }
};

export default todoReducer;
