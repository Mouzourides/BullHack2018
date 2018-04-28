"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const CreateQuestionnaireReducer_1 = require("../components/CreateQuestionnaire/CreateQuestionnaireReducer");
const QuestionnaireReducer_1 = require("../components/Questionnaire/QuestionnaireReducer");
exports.rootReducer = redux_1.combineReducers({
    createQuizData: CreateQuestionnaireReducer_1.CreateQuestionnaireReducer,
    quizData: QuestionnaireReducer_1.QuestionnaireReducer,
});
//# sourceMappingURL=Reducers.js.map