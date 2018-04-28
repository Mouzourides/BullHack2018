import {Action, applyMiddleware, createStore, Dispatch, Middleware, Store} from 'redux';
import {RootAction} from './Actions';

import {rootReducer} from './Reducers';
import thunkMiddleware from 'redux-thunk';
import {GlobalState} from "./AppState";
import createHashHistory from "history/createHashHistory";
import {routerMiddleware} from "react-router-redux";
import {createLogger} from 'redux-logger';


export const history = createHashHistory();

export function dispatchAsync(sender: RootAction, message: RootAction) {
    const dispatcher = sender as any as { asyncDispatch: (action: RootAction) => void };
    dispatcher.asyncDispatch(message);
}

// see https://lazamar.github.io/dispatching-from-inside-of-reducers/
export const asyncDispatchMiddleware: Middleware =
    () =>
        (next: Dispatch<void>) =>
            <A extends Action>(action: A) => {
                let syncActivityFinished = false;
                let actionQueue: any[] = [];

                function flushQueue() {
                    actionQueue.forEach((a: any) => store.dispatch(a)); // flush queue
                    actionQueue = [];
                }

                function asyncDispatch(asyncAction: RootAction) {
                    actionQueue = actionQueue.concat([asyncAction]);

                    if (syncActivityFinished) {
                        flushQueue();
                    }
                }

                const actionWithAsyncDispatch =
                    Object.assign({}, action, {asyncDispatch});

                next(actionWithAsyncDispatch);
                syncActivityFinished = true;
                flushQueue();
            };

function configureStore(initState?: GlobalState): Store<GlobalState> {
    const loggerMiddleware = createLogger();
    // create store
    return createStore(
        rootReducer,
        initState!,
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            asyncDispatchMiddleware, // adds asyncDispatch function to actions
            loggerMiddleware, // neat middleware that logs actions
            routerMiddleware(history),
        ),
    ) as Store<GlobalState>;
}

export const store: Store<GlobalState> = configureStore();
