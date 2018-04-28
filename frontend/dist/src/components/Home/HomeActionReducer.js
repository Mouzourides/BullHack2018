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
    _loading: false,
    name: 'Sam',
};
// // internal actions to track the loading of reference data
export var HomeActions = {
    updateName: createAction('UPDATE_NAME', function (value) { return ({
        payload: value,
        type: 'UPDATE_NAME',
    }); }),
};
// // // Guff to make the typed actions work
var returnOfCreateQuizActions = Object.values(__assign({}, HomeActions)).map(getReturnOfExpression);
export function HomeReducer(state, action) {
    if (state === void 0) { state = initState; }
    switch (action.type) {
        case getType(HomeActions.updateName): {
            return __assign({}, state);
        }
        default:
            return state;
    }
}
//# sourceMappingURL=RentSwiperActionReducer.js.map