"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Reducers_1 = require("./Reducers");
var redux_logger_1 = require("redux-logger");
var redux_thunk_1 = require("redux-thunk");
var createHashHistory_1 = require("history/createHashHistory");
var react_router_redux_1 = require("react-router-redux");
exports.history = createHashHistory_1.default();
function dispatchAsync(sender, message) {
    var dispatcher = sender;
    dispatcher.asyncDispatch(message);
}
exports.dispatchAsync = dispatchAsync;
// see https://lazamar.github.io/dispatching-from-inside-of-reducers/
exports.asyncDispatchMiddleware = function () {
    return function (next) {
        return function (action) {
            var syncActivityFinished = false;
            var actionQueue = [];
            function flushQueue() {
                actionQueue.forEach(function (a) { return exports.store.dispatch(a); }); // flush queue
                actionQueue = [];
            }
            function asyncDispatch(asyncAction) {
                actionQueue = actionQueue.concat([asyncAction]);
                if (syncActivityFinished) {
                    flushQueue();
                }
            }
            var actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch: asyncDispatch });
            next(actionWithAsyncDispatch);
            syncActivityFinished = true;
            flushQueue();
        };
    };
};
function configureStore(initState) {
    var loggerMiddleware = redux_logger_1.createLogger();
    // create store
    return redux_1.createStore(Reducers_1.rootReducer, initState, redux_1.applyMiddleware(redux_thunk_1.default, // lets us dispatch() functions
    exports.asyncDispatchMiddleware, // adds asyncDispatch function to actions
    loggerMiddleware, // neat middleware that logs actions
    react_router_redux_1.routerMiddleware(exports.history)));
}
exports.store = configureStore();
