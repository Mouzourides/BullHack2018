"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const Reducers_1 = require("./Reducers");
const redux_logger_1 = require("redux-logger");
const redux_thunk_1 = require("redux-thunk");
const createHashHistory_1 = require("history/createHashHistory");
const react_router_redux_1 = require("react-router-redux");
exports.history = createHashHistory_1.default();
function dispatchAsync(sender, message) {
    const dispatcher = sender;
    dispatcher.asyncDispatch(message);
}
exports.dispatchAsync = dispatchAsync;
// see https://lazamar.github.io/dispatching-from-inside-of-reducers/
exports.asyncDispatchMiddleware = () => (next) => (action) => {
    let syncActivityFinished = false;
    let actionQueue = [];
    function flushQueue() {
        actionQueue.forEach((a) => exports.store.dispatch(a)); // flush queue
        actionQueue = [];
    }
    function asyncDispatch(asyncAction) {
        actionQueue = actionQueue.concat([asyncAction]);
        if (syncActivityFinished) {
            flushQueue();
        }
    }
    const actionWithAsyncDispatch = Object.assign({}, action, { asyncDispatch });
    next(actionWithAsyncDispatch);
    syncActivityFinished = true;
    flushQueue();
};
function configureStore(initState) {
    const loggerMiddleware = redux_logger_1.createLogger();
    // create store
    return redux_1.createStore(Reducers_1.rootReducer, initState, redux_1.applyMiddleware(redux_thunk_1.default, // lets us dispatch() functions
    exports.asyncDispatchMiddleware, // adds asyncDispatch function to actions
    loggerMiddleware, // neat middleware that logs actions
    react_router_redux_1.routerMiddleware(exports.history)));
}
exports.store = configureStore();
//# sourceMappingURL=Store.js.map