import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  getPosts,
  setPosts,
  editPost,
  deletePost,
  completedPost,
  notCompletedPost,
  recurrentPost
} from '../src/controllers/post.controller';

storiesOf('Post Controller', module)
  .add('Get Posts', () => (
    <button onClick={action('Fetching posts...')(getPosts)}>Get Posts</button>
  ))
  .add('Set Post', () => (
    <button
      onClick={action('Setting post...')(setPosts({
        body: {
          message: 'New Post',
          author: 'Author',
          dueDate: new Date().toISOString(),
          reccurence: 'none'
        }
      }))}
    >
      Set Post
    </button>
  ))
  .add('Edit Post', () => (
    <button
      onClick={action('Editing post...')(editPost('POST_ID', {
        body: {
          message: 'Updated Post',
          author: 'Author',
          dueDate: new Date().toISOString(),
          reccurence: 'none'
        }
      }))}
    >
      Edit Post
    </button>
  ))
  .add('Delete Post', () => (
    <button onClick={action('Deleting post...')(deletePost('POST_ID'))}>
      Delete Post
    </button>
  ))
  .add('Complete Post', () => (
    <button onClick={action('Completing post...')(completedPost('POST_ID'))}>
      Complete Post
    </button>
  ))
  .add('Not Complete Post', () => (
    <button onClick={action('Marking post as not completed...')(notCompletedPost('POST_ID'))}>
      Not Complete Post
    </button>
  ))
  .add('Recurrent Post', () => (
    <button
      onClick={action('Setting recurrent post...')(recurrentPost('POST_ID', {
        body: {
          reccurence: 'weekly'
        }
      }))}
    >
      Recurrent Post
    </button>
  ));