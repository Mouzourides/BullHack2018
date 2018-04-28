"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const CreateQuestionnaire_1 = require("../CreateQuestionnaire/CreateQuestionnaire");
const Selectors_1 = require("../../services/Selectors");
const QuestionnaireActions_1 = require("./QuestionnaireActions");
const Questionnaire = (props) => {
    const { quizData, answerSelected, nextQuestion, updateCurrentQuestion, } = props;
    return React.createElement(React.Fragment, null,
        React.createElement("h1", null, "uquiz"),
        quizData.currentQuestion.map((q) => React.createElement(React.Fragment, null,
            React.createElement("h2", null, q.question),
            React.createElement("div", null, quizData.currentQuestion.map((a, idx) => a.answers.map((answer) => React.createElement("div", null,
                React.createElement("input", { type: 'radio', key: 'answer' + idx, id: 'answer' + idx, name: 'answer', onClick: () => answerSelected(answer) }),
                React.createElement("label", null, answer.answer))))))),
        React.createElement("button", { type: 'submit', onClick: () => {
                nextQuestion();
                updateCurrentQuestion();
            } }, "Submit"),
        React.createElement(CreateQuestionnaire_1.default, null));
};
function mapStateToProps(state) {
    return {
        questionnaire: Selectors_1.getQuestionnaire(state),
        quizData: state.quizData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        answerSelected: (value) => dispatch(QuestionnaireActions_1.QuestionnaireActions.answerSelected(value)),
        nextQuestion: () => dispatch(QuestionnaireActions_1.QuestionnaireActions.nextQuestion()),
        updateCurrentQuestion: () => dispatch(QuestionnaireActions_1.QuestionnaireActions.updateCurrentQuestion()),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
//# sourceMappingURL=Questionnaire.js.map