import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';

import {RootAction} from '../../redux/Actions';

export interface HomeData {
    _loading: boolean;
    name: string;
}

const initState: HomeData = {
    _loading: false,
    name: 'Sam',
};

// // internal actions to track the loading of reference data
export const HomeActions = {
    updateName: createAction('UPDATE_NAME',
        (value: number) => ({
            payload: value,
            type: 'UPDATE_NAME',
        }),
    ),
};

// // // Guff to make the typed actions work
const returnOfCreateQuizActions =
    Object.values({...HomeActions}).map(getReturnOfExpression);
export type HomeActions = typeof returnOfCreateQuizActions[number];

export function HomeReducer(state: HomeData = initState, action: RootAction): HomeData {

    switch (action.type) {
        case getType(HomeActions.updateName): {
            return {
                ...state,
            };
        }

        default:
            return state;
    }
}
