import {RentData} from '../components/RentSwiper/RentSwiperActionReducer';
import {NavigationState} from '../components/Screens/Layout/LayoutActionReducer';

export interface AppState {
    readonly rentData: RentData;
    readonly navData: NavigationState;
}
