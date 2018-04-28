import {combineReducers} from 'redux';
import {HomeReducer} from '../components/Home/HomeActionReducer';
import {NavigationReducer} from '../components/Screens/Layout/LayoutActionReducer';
import {AppState} from './AppState';

export const rootReducer = combineReducers<AppState>({
    homeData: HomeReducer,
    navData: NavigationReducer,
});
