import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './Reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createHashHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';
export var history = createHashHistory();
export function dispatchAsync(sender, message) {
    var dispatcher = sender;
    dispatcher.asyncDispatch(message);
}
// see https://lazamar.github.io/dispatching-from-inside-of-reducers/
export var asyncDispatchMiddleware = function () {
    return function (next) {
        return function (action) {
            var syncActivityFinished = false;
            var actionQueue = [];
            function flushQueue() {
                actionQueue.forEach(function (a) { return store.dispatch(a); }); // flush queue
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
    var loggerMiddleware = createLogger();
    // create store
    return createStore(rootReducer, initState, applyMiddleware(thunkMiddleware, // lets us dispatch() functions
    asyncDispatchMiddleware, // adds asyncDispatch function to actions
    loggerMiddleware, // neat middleware that logs actions
    routerMiddleware(history)));
}
export var store = configureStore();
//# sourceMappingURL=Store.js.map