"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QuestionnaireActions_1 = require("./QuestionnaireActions");
const typesafe_actions_1 = require("typesafe-actions");
const Store_1 = require("../../redux/Store");
const initState = {
    _loading: false,
    currentQuestion: [],
    currentQuestionIndex: 0,
    maxQuestion: 0,
    participants: [],
    questions: [],
};
function mapQuestionsToQuizQuestions(questions) {
    return questions.map((q, idx) => createQuizQuestion(q, idx));
}
function createQuizQuestion(q, idx) {
    return {
        answers: q.answers,
        index: idx,
        question: q.question,
        selectedAnswer: {
            answer: 'Not specified',
            correctAnswer: false,
        },
    };
}
function getCurrentQuestion(questions, idx) {
    return questions.filter((q) => q.index === idx);
}
function updateQuestions(questions, newQuestion, index) {
    questions.splice(index, 1, newQuestion);
    return questions;
}
function QuestionnaireReducer(state = initState, action) {
    switch (action.type) {
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.refDataLoaded): {
            Store_1.dispatchAsync(action, QuestionnaireActions_1.referenceDataActions.refDataAvailable());
            return Object.assign({}, state, { _loading: false, currentQuestion: getCurrentQuestion(mapQuestionsToQuizQuestions(action.payload.questions), state.currentQuestionIndex), maxQuestion: action.payload.questions.length, questions: mapQuestionsToQuizQuestions(action.payload.questions) });
        }
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.refDataLoading): {
            return Object.assign({}, state, { _loading: true });
        }
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.nextQuestion): {
            let idx = state.currentQuestionIndex;
            return Object.assign({}, state, { currentQuestionIndex: ++idx <= state.maxQuestion - 1 ? idx : state.maxQuestion - 1 });
        }
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.previousQuestion): {
            let idx = state.currentQuestionIndex;
            return Object.assign({}, state, { currentQuestionIndex: --idx > 0 ? idx : 0 });
        }
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.updateCurrentQuestion): {
            return Object.assign({}, state, { currentQuestion: getCurrentQuestion(state.questions, state.currentQuestionIndex) });
        }
        case typesafe_actions_1.getType(QuestionnaireActions_1.QuestionnaireActions.answerSelected): {
            const currentQ = state.currentQuestion[0];
            currentQ.selectedAnswer = action.payload;
            const updatedQ = state.questions[state.currentQuestionIndex];
            updatedQ.selectedAnswer = action.payload;
            return Object.assign({}, state, { currentQuestion: state.currentQuestion.splice(0, 1, currentQ), questions: updateQuestions(state.questions, updatedQ, state.currentQuestionIndex) });
        }
        default:
            return state;
    }
}
exports.QuestionnaireReducer = QuestionnaireReducer;
//# sourceMappingURL=QuestionnaireReducer.js.map