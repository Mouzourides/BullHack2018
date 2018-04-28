"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CreateQuestionnaire_1 = require("../../CreateQuestionnaire/CreateQuestionnaire");
var QuizLayout_1 = require("../Layout/Layout");
exports.CreateQuestionnaireScreen = function () {
    return (<QuizLayout_1.default quizComponent={CreateQuestionnaire_1.default}/>);
};
exports.default = exports.CreateQuestionnaireScreen;
