import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Import the controller functions
import {
  register,
  login
} from '../src/controllers/user.controller';

storiesOf('User Controller', module)
  .add('Register', () => (
    <button
      onClick={action('Registering user...')(register({
        body: {
          email: 'test@example.com',
          password: 'password'
        }
      }))}
    >
      Register
    </button>
  ))
  .add('Login', () => (
    <button
      onClick={action('Logging in user...')(login({
        body: {
          email: 'test@example.com',
          password: 'password'
        }
      }))}
    >
      Login
    </button>
  ));