import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storeFile';
import Home from './container/Home';

// view is connected to the store
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root')
)