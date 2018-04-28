import {Store} from 'redux';
import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from '../../redux/Actions';
import {AppState} from '../../redux/AppState';
import {getHouseData} from '../../services/QuizApi';

export interface RentData {
    _loading: boolean;
    currentIndex: number;
    houses: House[];
    currentHouse: House;
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
        currentHouse: {
            address: '',
            description: '',
            id: 0,
            lat: 0,
            long: 0,
            photo: '',
            price: 0,
        },
        currentIndex: 0,
        houses: [],
    }
;

export const RentActions = {
    refDataLoaded: createAction('REFERENCE_DATA_LOADED',
        (refData: House[]) => ({
            payload: refData,
            type: 'REFERENCE_DATA_LOADED',
        }),
    ),
    refDataLoading: createAction('REFERENCE_DATA_LOADING'),
    updateCurrentHouse: createAction('UPDATE_CURRENT_HOUSE'),
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
                currentIndex: state.houses.length - 1 > state.currentIndex ?
                    state.currentIndex + 1 : state.currentIndex,
            };
        }

        case getType(RentActions.updateCurrentHouse): {
            return {
                ...state,
                currentHouse: state.houses[state.currentIndex],
            };
        }

        case getType(RentActions.refDataLoading): {
            return {
                ...state,
                _loading: true,
            };
        }
        case getType(RentActions.refDataLoaded): {
            return {
                ...state,
                _loading: false,
                houses: action.payload,
            };
        }

        default:
            return state;
    }
}

export const loadReferenceData = (st: Store<AppState>) => {
    st.dispatch(RentActions.refDataLoading());
    getHouseData().then((refData) => {
        st.dispatch(RentActions.refDataLoaded(refData));
        st.dispatch(RentActions.updateCurrentHouse());
    });
};
