import {Store} from 'redux';
import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from '../../redux/Actions';
import {AppState} from '../../redux/AppState';
import {getHouseData} from '../../services/QuizApi';

export interface RentData {
    _loading: boolean;
    currentIndex: number;
    houses: House[];
}

export interface House {
    id: number;
    address: string;
    photo: string;
    description: string;
    lat: number;
    long: number;
    price: number;
}

const initState: RentData = {
    _loading: false,
    currentIndex: 0,
    houses: [],
};

export const RentActions = {
    getHouseData: createAction('GET_HOUSE_DATA',
        (refData: House[]) => ({
            payload: refData,
            type: 'GET_HOUSE_DATA',
        }),
    ),
    updateCurrentIndex: createAction('UPDATE_INDEX'),
};

const returnOfCreateQuizActions =
    Object.values({...RentActions}).map(getReturnOfExpression);
export type RentAction = typeof returnOfCreateQuizActions[number];

export function RentReducer(state: RentData = initState, action: RootAction): RentData {

    switch (action.type) {
        case getType(RentActions.updateCurrentIndex): {
            return {
                ...state,
                currentIndex: state.currentIndex++,
            };
        }

        case getType(RentActions.getHouseData): {
            return {
                ...state,
                houses: action.payload,
            };
        }

        default:
            return state;
    }
}

export const loadReferenceData = (st: Store<AppState>) => {
    getHouseData().then((refData) => st.dispatch(RentActions.getHouseData(refData)));
};
