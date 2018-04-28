import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {store} from './redux/Store';

import {Provider} from 'react-redux';
import Routes from './redux/Routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import {loadReferenceData} from './components/RentSwiper/RentSwiperActionReducer';
import './style.css';

loadReferenceData(store);

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,

    document.getElementById('root'),
);
