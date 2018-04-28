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
var CreateQuestionnaireActions_1 = require("./RentActions");
var typesafe_actions_1 = require("typesafe-actions");
var QuizApi_1 = require("../../services/QuizApi");
var initState = {
    maxQuestion: 0,
    questions: [{
            answers: [{
                    answer: '',
                    correctAnswer: false,
                }, {
                    answer: '',
                    correctAnswer: false,
                },
            ],
            question: '',
        },
        {
            answers: [{
                    answer: '',
                    correctAnswer: false,
                }, {
                    answer: '',
                    correctAnswer: false,
                },
            ],
            question: '',
        }],
    title: '',
};
function CreateQuestionnaireReducer(state, action) {
    if (state === void 0) { state = initState; }
    function updateQuestions(questions, updatedQuestion, index) {
        questions.splice(index, 1, updatedQuestion);
        return questions;
    }
    switch (action.type) {
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addAnswer): {
            var updatedQuestion = state.questions[action.payload];
            updatedQuestion.answers = updatedQuestion.answers.concat([{
                    answer: '',
                    correctAnswer: false,
                }]);
            return __assign({}, state, { questions: updateQuestions(state.questions, updatedQuestion, action.payload) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateAnswer): {
            var updatedQuestion = state.questions[action.payload.quesIndex];
            updatedQuestion.answers[action.payload.ansIndex].answer = action.payload.value;
            return __assign({}, state, { questions: updateQuestions(state.questions, updatedQuestion, action.payload.quesIndex) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateQuest): {
            var updatedQuestion = state.questions[action.payload.index];
            updatedQuestion.question = action.payload.value;
            return __assign({}, state, { questions: updateQuestions(state.questions, updatedQuestion, action.payload.index) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateCorrectAns): {
            var updatedQuestion = state.questions[action.payload.quesIndex];
            updatedQuestion.answers.forEach(function (ans) { return ans.correctAnswer = false; });
            updatedQuestion.answers[action.payload.ansIndex].correctAnswer =
                !updatedQuestion.answers[action.payload.ansIndex].correctAnswer;
            return __assign({}, state, { questions: updateQuestions(state.questions, updatedQuestion, action.payload.quesIndex) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateTitle): {
            return __assign({}, state, { title: action.payload });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addQuestion): {
            var newQuestion = {
                answers: [{
                        answer: '',
                        correctAnswer: false,
                    }, {
                        answer: '',
                        correctAnswer: false,
                    }],
                question: '',
            };
            return __assign({}, state, { questions: state.questions.concat(newQuestion) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.removeQuestion): {
            var newQuestions = state.questions;
            if (newQuestions.length !== 1) {
                newQuestions.splice(action.payload, 1);
            }
            return __assign({}, state, { questions: newQuestions });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.removeAnswer): {
            var updatedQuestion = state.questions[action.payload.quesIndex];
            if (updatedQuestion.answers.length !== 1) {
                updatedQuestion.answers.splice(action.payload.ansIndex, 1);
            }
            return __assign({}, state, { questions: updateQuestions(state.questions, updatedQuestion, action.payload.quesIndex) });
        }
        case typesafe_actions_1.getType(CreateQuestionnaireActions_1.CreateQuestionnaireActions.submitQuiz): {
            QuizApi_1.submitQuiz(action.payload);
            return __assign({}, state);
        }
        default:
            return state;
    }
}
exports.CreateQuestionnaireReducer = CreateQuestionnaireReducer;
