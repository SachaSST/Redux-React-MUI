import React from 'react';
import { storiesOf } from '@storybook/react';

// Import the User model
import User from '../src/models/user.model';

storiesOf('User Model', module)
  .add('User Schema', () => (
    <pre>{JSON.stringify(User.schema.obj, null, 2)}</pre>
  ));