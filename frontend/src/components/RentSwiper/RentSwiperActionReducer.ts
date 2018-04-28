import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from '../../redux/Actions';

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

// internal actions to track the loading of reference data
export const RentActions = {
    updateCurrentIndex: createAction('UPDATE_INDEX'),
};

// // // Guff to make the typed actions work
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

        default:
            return state;
    }
}
