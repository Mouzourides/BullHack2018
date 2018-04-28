import {HomeActions} from '../components/Home/HomeActionReducer';
import {navigationAction} from '../components/Screens/Layout/LayoutActionReducer';

export type RootAction = | HomeActions | navigationAction;
