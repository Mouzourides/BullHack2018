import {combineReducers} from 'redux';
import {GlobalState} from "./GlobalState";
import {HomeReducer} from "../Home/HomeActionReducer";

export const rootReducer = combineReducers<GlobalState>({
    homeState: HomeReducer,
});

