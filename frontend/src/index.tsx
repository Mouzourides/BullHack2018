import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {store} from './redux/Store';

import {replace} from 'react-router-redux';
import Routes from './redux/Routes';
import {Provider} from 'react-redux';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style.css';

store.dispatch(replace('/home'));

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,

    document.getElementById('root'),
);