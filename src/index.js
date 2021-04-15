import React from 'react';
import ReactDom from 'react-dom';

import App from './App.js';
import { createStore } from 'redux';
import allReducers from './reducers/index.js'
import { Provider } from 'react-redux';
 
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDom.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));