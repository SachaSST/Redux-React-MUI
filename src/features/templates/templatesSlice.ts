import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  day: string;
  time: string;
  text: string;
}

interface Template {
  id: number;
  name: string;
  tasks: Task[];
}

interface TemplatesState {
  templates: Template[];
}

const initialState: TemplatesState = {
  templates: [],
};

const templatesSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    addTemplate: (state, action: PayloadAction<Omit<Template, 'id'>>) => {
      const newTemplate: Template = {
        id: state.templates.length ? state.templates[state.templates.length - 1].id + 1 : 1,
        ...action.payload,
      };
      state.templates.push(newTemplate);
    },
  },
});

export const { addTemplate } = templatesSlice.actions;

export default templatesSlice.reducer;
