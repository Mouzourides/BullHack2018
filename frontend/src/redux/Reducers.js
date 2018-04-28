"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var CreateQuestionnaireReducer_1 = require("../components/CreateQuestionnaire/CreateQuestionnaireReducer");
var QuestionnaireReducer_1 = require("../components/Questionnaire/QuestionnaireReducer");
var QuizLayoutActionReducer_1 = require("../components/Screens/QuizLayout/QuizLayoutActionReducer");
exports.rootReducer = redux_1.combineReducers({
    createQuizData: CreateQuestionnaireReducer_1.CreateQuestionnaireReducer,
    navData: QuizLayoutActionReducer_1.NavigationReducer,
    quizData: QuestionnaireReducer_1.QuestionnaireReducer,
});
