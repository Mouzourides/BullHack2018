"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CreateQuestionnaireActions_1 = require("./CreateQuestionnaireActions");
const typesafe_actions_1 = require("typesafe-actions");
const initState = {
    maxQuestion: 0,
    questions: [{
            answers: [{
                    answer: '',
                    correctAnswer: false,
                }, {
                    answer: '',
                    correctAnswer: false,
                }],
            question: '',
        }],
};
function CreateQuestionnaireReducer(state = initState, action) {
    function updateQuestion(questions, updatedQuestion, index) {
        questions.splice(index, 1, updatedQuestion);
        return questions;
    }
    switch (action.type) {
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addAnswer): {
            const updatedQuestion = state.questions[action.payload];
            updatedQuestion.answers = updatedQuestion.answers.concat([{
                    answer: '',
                    correctAnswer: false,
                }]);
            return Object.assign({}, state, { questions: updateQuestion(state.questions, updatedQuestion, action.payload) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateAnswer): {
            const updatedQuestion = state.questions[action.payload.quesIndex];
            updatedQuestion.answers[action.payload.ansIndex].answer = action.payload.value;
            return Object.assign({}, state, { questions: updateQuestion(state.questions, updatedQuestion, action.payload.quesIndex) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateQuest): {
            const updatedQuestion = state.questions[action.payload.index];
            updatedQuestion.question = action.payload.value;
            return Object.assign({}, state, { questions: updateQuestion(state.questions, updatedQuestion, action.payload.index) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateCorrectAns): {
            const updatedQuestion = state.questions[action.payload.quesIndex];
            updatedQuestion.answers.forEach((ans) => ans.correctAnswer = false);
            updatedQuestion.answers[action.payload.ansIndex].correctAnswer =
                !updatedQuestion.answers[action.payload.ansIndex].correctAnswer;
            return Object.assign({}, state, { questions: updateQuestion(state.questions, updatedQuestion, action.payload.quesIndex) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addQuestion): {
            const newQuestion = {
                answers: [{
                        answer: '',
                        correctAnswer: false,
                    }, {
                        answer: '',
                        correctAnswer: false,
                    }],
                question: '',
            };
            return Object.assign({}, state, { questions: state.questions.concat(newQuestion) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.submitQuiz): {
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}
exports.CreateQuestionnaireReducer = CreateQuestionnaireReducer;
//# sourceMappingURL=RentSwiperActionReducer.js.map