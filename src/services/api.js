import axios from 'axios';

const API_URL = 'http://localhost:5000/api/topics';

export const addTodo = async (todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};
