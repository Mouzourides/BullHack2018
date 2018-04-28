"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const CreateQuestionnaireActions_1 = require("./CreateQuestionnaireActions");
const Questionnaire = (props) => {
    const { addAnswer, addQuestion, createQuizData, submitQuiz, updateAnswer, updateCorrectAns, updateQuest, } = props;
    return React.createElement(React.Fragment, null,
        React.createElement("h2", null, "Create a quiz"),
        React.createElement("div", null,
            createQuizData.questions.map((q, index) => React.createElement(React.Fragment, null,
                React.createElement("h2", null,
                    "Question ",
                    index + 1),
                React.createElement("input", { type: 'text', onChange: (e) => updateQuest(e.currentTarget.value, index) }),
                React.createElement("h2", null, "Answers"),
                q.answers.map((a, idx) => React.createElement("div", { key: 'input-' + idx },
                    React.createElement("input", { type: 'text', onChange: (e) => updateAnswer(e.currentTarget.value, index, idx), key: 'input-answers-' + idx }),
                    React.createElement("input", { type: 'radio', name: 'input-answer-' + index, onChange: (e) => updateCorrectAns(index, idx) }),
                    React.createElement("label", null, "Correct?"))),
                React.createElement("button", { onClick: () => addAnswer(index) }, "Add another answer"))),
            React.createElement("button", { onClick: () => addQuestion() }, "Add another question"),
            React.createElement("button", { onClick: () => submitQuiz() }, "Submit Quiz")));
};
function mapStateToProps(state) {
    return {
        createQuizData: state.createQuizData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addAnswer: (value) => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addAnswer(value)),
        addQuestion: () => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addQuestion()),
        submitQuiz: () => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.submitQuiz()),
        updateAnswer: (value, quesIndex, ansIndex) => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateAnswer(value, quesIndex, ansIndex)),
        updateCorrectAns: (quesIndex, ansIndex) => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateCorrectAns(quesIndex, ansIndex)),
        updateQuest: (value, index) => dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateQuest(value, index)),
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
//# sourceMappingURL=CreateQuestionnaire.js.map