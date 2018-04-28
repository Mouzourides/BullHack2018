"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var typesafe_actions_1 = require("typesafe-actions");
var initState = {
    collapsed: false,
    currentPageIndex: '1',
};
// // internal actions to track the loading of reference data
exports.NavigationActions = {
    updateCollapsed: typesafe_actions_1.createAction('UPDATE_COLLAPSED'),
    updateCurrentPageIndex: typesafe_actions_1.createAction('UPDATE_NAV_INDEX', function (value) { return ({
        payload: value,
        type: 'UPDATE_NAV_INDEX',
    }); }),
};
var returnOfNavigationActions = Object.values(__assign({}, exports.NavigationActions)).map(typesafe_actions_1.getReturnOfExpression);
function NavigationReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case typesafe_actions_1.getType(exports.NavigationActions.updateCurrentPageIndex): {
            return __assign({}, state, { currentPageIndex: action.payload });
        }
        case typesafe_actions_1.getType(exports.NavigationActions.updateCollapsed): {
            return __assign({}, state, { collapsed: !state.collapsed });
        }
        default:
            return state;
    }
}
exports.NavigationReducer = NavigationReducer;
