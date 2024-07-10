import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import the routes
import userRoutes from '../src/routes/user.routes';

storiesOf('User Routes', module)
  .add('Routes', () => (
    <pre>{JSON.stringify(userRoutes.stack.map(route => ({
      path: route.route.path,
      methods: route.route.methods
    })), null, 2)}</pre>
  ));