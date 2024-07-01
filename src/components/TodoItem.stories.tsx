import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TodoItem from './TodoItem';

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
} as Meta;

const Template: StoryFn<any> = (args) => <TodoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  todo: {
    id: 1,
    text: 'Sample Todo',
    completed: false,
    dueDate: new Date().toISOString(),
  },
};

export const Completed = Template.bind({});
Completed.args = {
  todo: {
    id: 2,
    text: 'Completed Todo',
    completed: true,
    dueDate: new Date().toISOString(),
  },
};
