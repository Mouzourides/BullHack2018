import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from "../redux/Actions";

export interface AppState {
    name: string;
}

const initState: AppState = {
    name: 'Sam',
};

// // internal actions to track the loading of reference data
export const AppActions = {
    updateName: createAction('UPDATE_NAME',
        (value: string) => ({
            payload: value,
            type: 'UPDATE_NAME',
        }),
    ),
};

const returnOfNavigationActions =
    Object.values({...AppActions}).map(getReturnOfExpression);
export type navigationAction = typeof returnOfNavigationActions[number];

export function AppReducer(state: AppState = initState, action: RootAction): AppState {

    switch (action.type) {
        case getType(AppActions.updateName): {
            return {
                ...state,
                name: action.payload,
            };
        }

        default:
            return state;
    }
}
