import React from 'react';
import ReactDom from 'react-dom';

import App from './App.js';
import { createStore } from 'redux';
import allReducers from './reducers/index.js'

const store = createStore(allReducers);

ReactDom.render(<App />, document.getElementById('root'));