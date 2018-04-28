"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
const QuizApi_1 = require("../../services/QuizApi");
// action that other reducers can handle to react to reference data being available in the state
exports.referenceDataActions = {
    refDataAvailable: typesafe_actions_1.createAction('REFERENCE_DATA_AVAILABLE'),
};
// // internal actions to track the loading of reference data
exports.QuestionnaireActions = {
    answerSelected: typesafe_actions_1.createAction('ANSWER_SELECTED', (value) => ({
        payload: value,
        type: 'ANSWER_SELECTED',
    })),
    nextQuestion: typesafe_actions_1.createAction('NEXT_QUESTION'),
    previousQuestion: typesafe_actions_1.createAction('PREVIOUS_QUESTION'),
    refDataLoaded: typesafe_actions_1.createAction('REFERENCE_DATA_LOADED', (refData) => ({
        payload: refData,
        type: 'REFERENCE_DATA_LOADED',
    })),
    refDataLoading: typesafe_actions_1.createAction('REFERENCE_DATA_LOADING'),
    updateCurrentQuestion: typesafe_actions_1.createAction('UPDATE_QUESTION'),
};
//
// // helper function to initiate the reference data load
exports.loadReferenceData = (st) => {
    st.dispatch(exports.QuestionnaireActions.refDataLoading());
    QuizApi_1.getQuizData().then((refData) => st.dispatch(exports.QuestionnaireActions.refDataLoaded(refData)));
};
// //
// // // Guff to make the typed actions work
const returnOfPreloadActions = Object.values(Object.assign({}, exports.referenceDataActions, exports.QuestionnaireActions)).map(typesafe_actions_1.getReturnOfExpression);
//# sourceMappingURL=QuestionnaireActions.js.map