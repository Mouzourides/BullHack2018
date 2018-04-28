import { combineReducers } from 'redux';
import { RentReducer } from '../components/RentSwiper/RentSwiperActionReducer';
import { NavigationReducer } from '../components/Screens/Layout/LayoutActionReducer';
export var rootReducer = combineReducers({
    homeData: RentReducer,
    navData: NavigationReducer,
});
//# sourceMappingURL=Reducers.js.map