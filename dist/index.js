import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
ReactDOM.render(_jsx(Provider, { store: store, children: _jsx(App, {}) }), document.getElementById('root'));
