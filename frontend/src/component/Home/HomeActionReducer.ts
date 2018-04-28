import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from "../redux/Actions";

export interface HomeState {
    name: string;
}

const initState: HomeState = {
    name: 'Sam',
};

// // internal actions to track the loading of reference data
export const HomeActions = {
    updateName: createAction('UPDATE_NAME',
        (value: string) => ({
            payload: value,
            type: 'UPDATE_NAME',
        }),
    ),
};

const returnOfNavigationActions =
    Object.values({...HomeActions}).map(getReturnOfExpression);
export type HomeActions = typeof returnOfNavigationActions[number];

export function HomeReducer(state: HomeState = initState, action: RootAction): HomeState {
    switch (action.type) {
        case getType(HomeActions.updateName): {
            return {
                ...state,
                name: action.payload,
            };
        }

        default:
            return state;
    }
}
