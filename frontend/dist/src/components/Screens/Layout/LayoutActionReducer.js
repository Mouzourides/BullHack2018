var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { createAction, getReturnOfExpression, getType } from 'typesafe-actions';
var initState = {
    collapsed: false,
    currentPageIndex: '1',
};
// // internal actions to track the loading of reference data
export var NavigationActions = {
    updateCollapsed: createAction('UPDATE_COLLAPSED'),
    updateCurrentPageIndex: createAction('UPDATE_NAV_INDEX', function (value) { return ({
        payload: value,
        type: 'UPDATE_NAV_INDEX',
    }); }),
};
var returnOfNavigationActions = Object.values(__assign({}, NavigationActions)).map(getReturnOfExpression);
export function NavigationReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case getType(NavigationActions.updateCurrentPageIndex): {
            return __assign({}, state, { currentPageIndex: action.payload });
        }
        case getType(NavigationActions.updateCollapsed): {
            return __assign({}, state, { collapsed: !state.collapsed });
        }
        default:
            return state;
    }
}
//# sourceMappingURL=LayoutActionReducer.js.map