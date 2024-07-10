import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import the routes
import postRoutes from '../src/routes/post.routes';

storiesOf('Post Routes', module)
  .add('Routes', () => (
    <pre>{JSON.stringify(postRoutes.stack.map(route => ({
      path: route.route.path,
      methods: route.route.methods
    })), null, 2)}</pre>
  ));