import {combineReducers} from 'redux';
import {GlobalState} from "./AppState";
import {AppReducer} from "../component/AppActionReducer";

export const rootReducer = combineReducers<GlobalState>({
    AppData: AppReducer,
});
