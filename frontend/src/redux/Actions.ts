import {RentAction} from '../components/RentSwiper/RentSwiperActionReducer';
import {navigationAction} from '../components/Screens/Layout/LayoutActionReducer';

export type RootAction = | RentAction | navigationAction;
