import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Routing from './Component/Routing';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Provider store={store}>
    <Routing/>
</Provider>)
