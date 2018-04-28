"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const QuizApi_1 = require("./QuizApi");
// action that other reducers can handle to react to reference data being available in the state
exports.referenceDataActions = {
    refDataAvailable: typesafe_actions_1.createAction('REFERENCE_DATA_AVAILABLE'),
};
// // internal actions to track the loading of reference data
exports.internalActions = {
    refDataLoaded: typesafe_actions_1.createAction('REFERENCE_DATA_LOADED', (refData) => ({
        payload: refData,
        type: 'REFERENCE_DATA_LOADED',
    })),
    refDataLoading: typesafe_actions_1.createAction('REFERENCE_DATA_LOADING'),
};
//
// // helper function to initiate the reference data load
exports.loadReferenceData = (st) => {
    st.dispatch(exports.internalActions.refDataLoading());
    QuizApi_1.getQuizData().then((refData) => st.dispatch(exports.internalActions.refDataLoaded(refData)));
};
// //
// // // Guff to make the typed actions work
const returnOfPreloadActions = Object.values(Object.assign({}, exports.referenceDataActions, exports.internalActions)).map(typesafe_actions_1.getReturnOfExpression);
//# sourceMappingURL=ReferenceDataModel.js.map