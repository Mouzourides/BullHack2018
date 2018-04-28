"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Store_1 = require("./redux/Store");
var react_redux_1 = require("react-redux");
var react_router_redux_1 = require("react-router-redux");
var Routes_1 = require("./redux/Routes");
require("bootstrap/dist/css/bootstrap.min.css");
require("./style.css");
// loadReferenceData(store);
Store_1.store.dispatch(react_router_redux_1.replace('/login'));
ReactDOM.render(<react_redux_1.Provider store={Store_1.store}>
        <Routes_1.default />
    </react_redux_1.Provider>, document.getElementById('quiz'));
