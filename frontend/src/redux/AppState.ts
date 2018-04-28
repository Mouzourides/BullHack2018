import {HomeData} from '../components/Home/HomeActionReducer';
import {NavigationState} from '../components/Screens/Layout/LayoutActionReducer';

export interface AppState {
    readonly homeData: HomeData;
    readonly navData: NavigationState;
}
