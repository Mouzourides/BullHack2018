import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {store} from './component/redux/Store';

import {replace} from 'react-router-redux';
import {Provider} from 'react-redux';
import Home from "./component/Home/Home";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';

store.dispatch(replace('/home'));

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,

    document.getElementById('root'),
);