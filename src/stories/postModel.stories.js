import React from 'react';
import { storiesOf } from '@storybook/react';

// Import the Post model
import Post from '../src/models/post.model';

storiesOf('Post Model', module)
  .add('Post Schema', () => (
    <pre>{JSON.stringify(Post.schema.obj, null, 2)}</pre>
  ));