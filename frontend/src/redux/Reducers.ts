import {combineReducers} from 'redux';
import {RentReducer} from '../components/RentSwiper/RentSwiperActionReducer';
import {NavigationReducer} from '../components/Screens/Layout/LayoutActionReducer';
import {AppState} from './AppState';

export const rootReducer = combineReducers<AppState>({
    navData: NavigationReducer,
    rentData: RentReducer,
});
