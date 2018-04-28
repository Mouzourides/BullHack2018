"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReferenceDataModel_1 = require("./ReferenceDataModel");
const typesafe_actions_1 = require("typesafe-actions");
const Store_1 = require("../redux/Store");
const initState = {
    _loading: false,
    maxQuestion: 0,
    participants: [],
    questions: [],
};
// reducer for reference data
function refDataReducer(state = initState, action) {
    switch (action.type) {
        case typesafe_actions_1.getType(ReferenceDataModel_1.internalActions.refDataLoaded): {
            Store_1.dispatchAsync(action, ReferenceDataModel_1.referenceDataActions.refDataAvailable());
            return Object.assign({}, action.payload, { _loading: false });
        }
        case typesafe_actions_1.getType(ReferenceDataModel_1.internalActions.refDataLoading): {
            return Object.assign({}, state, { _loading: true });
        }
        default:
            return state;
    }
}
exports.refDataReducer = refDataReducer;
//# sourceMappingURL=Reducer.js.map