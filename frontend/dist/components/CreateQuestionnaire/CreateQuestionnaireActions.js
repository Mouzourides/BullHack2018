"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typesafe_actions_1 = require("typesafe-actions");
// // internal actions to track the loading of reference data
exports.CreateQuestionnaireActions = {
    addAnswer: typesafe_actions_1.createAction('ADD_ANSWER', (value) => ({
        payload: value,
        type: 'ADD_ANSWER',
    })),
    addQuestion: typesafe_actions_1.createAction('ADD_QUESTION'),
    submitQuiz: typesafe_actions_1.createAction('SUBMIT_QUIZ'),
    updateAnswer: typesafe_actions_1.createAction('UPDATE_ANSWER', (value, quesIndex, ansIndex) => ({
        payload: {
            ansIndex,
            quesIndex,
            value,
        },
        type: 'UPDATE_ANSWER',
    })),
    updateCorrectAns: typesafe_actions_1.createAction('UPDATE_CORRECT_ANSWER', (quesIndex, ansIndex) => ({
        payload: {
            ansIndex,
            quesIndex,
        },
        type: 'UPDATE_CORRECT_ANSWER',
    })),
    updateQuest: typesafe_actions_1.createAction('UPDATE_QUEST', (value, index) => ({
        payload: {
            index,
            value,
        },
        type: 'UPDATE_QUEST',
    })),
};
// // // Guff to make the typed actions work
const returnOfCreateQuizActions = Object.values(Object.assign({}, exports.CreateQuestionnaireActions)).map(typesafe_actions_1.getReturnOfExpression);
//# sourceMappingURL=RentActions.js.map