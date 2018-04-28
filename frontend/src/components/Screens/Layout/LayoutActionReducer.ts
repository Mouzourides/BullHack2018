import {createAction, getReturnOfExpression, getType} from 'typesafe-actions';
import {RootAction} from '../../../redux/Actions';

export interface NavigationState {
    currentPageIndex: string;
    collapsed: boolean;
}

const initState: NavigationState = {
    collapsed: false,
    currentPageIndex: '1',
};

// // internal actions to track the loading of reference data
export const NavigationActions = {
    updateCollapsed: createAction('UPDATE_COLLAPSED'),
    updateCurrentPageIndex: createAction('UPDATE_NAV_INDEX',
        (value: string) => ({
            payload: value,
            type: 'UPDATE_NAV_INDEX',
        }),
    ),
};

const returnOfNavigationActions =
    Object.values({...NavigationActions}).map(getReturnOfExpression);
export type navigationAction = typeof returnOfNavigationActions[number];

export function NavigationReducer(state: NavigationState = initState, action: RootAction): NavigationState {

    switch (action.type) {
        case getType(NavigationActions.updateCurrentPageIndex): {
            return {
                ...state,
                currentPageIndex: action.payload,
            };
        }
        case getType(NavigationActions.updateCollapsed): {
            return {
                ...state,
                collapsed: !state.collapsed,
            };
        }

        default:
            return state;
    }
}
