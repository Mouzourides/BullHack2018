"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_redux_1 = require("react-redux");
var CreateQuestionnaireActions_1 = require("./HomeActions");
var button_1 = require("antd/lib/button");
var antd_1 = require("antd");
var group_1 = require("antd/lib/radio/group");
var Questionnaire = function (props) {
    var addAnswer = props.addAnswer, addQuestion = props.addQuestion, createQuizData = props.createQuizData, submitQuiz = props.submitQuiz, updateAnswer = props.updateAnswer, updateCorrectAns = props.updateCorrectAns, updateQuest = props.updateQuest, updateTitle = props.updateTitle, removeAnswer = props.removeAnswer, removeQuestion = props.removeQuestion;
    return <>
        <div>
            <h1>Create a quiz</h1>
            <div className={'box'}>
                <h2>Quiz title:</h2>
                <input type={'text'} onChange={function (e) { return updateTitle(e.currentTarget.value); }} className='question-text-box'/>
            </div>
            {createQuizData.questions.map(function (q, index) { return <>
                <div className={'box'}>
                    <h2 className='question-title'>Question {index + 1}</h2>
                    <input type={'text'} onChange={function (e) { return updateQuest(e.currentTarget.value, index); }} className='question-text-box'/>
                    <h2>Answers</h2>
                    <group_1.default onChange={function (e) { return updateCorrectAns(index, e.target.value); }}>
                        {q.answers.map(function (a, idx) {
        return <div className='answer-container' key={'input-' + idx}>
                                <input type={'text'} onChange={function (e) { return updateAnswer(e.currentTarget.value, index, idx); }} key={'input-answers-' + idx} className='answer-text-box'/>
                                <div className='correct-radio-btn'>
                                    <antd_1.Radio name={'radio-button-' + idx} value={idx}>Correct?</antd_1.Radio>
                                </div>
                                <button_1.default onClick={function () { return removeAnswer(index, idx); }} disabled={q.answers.length <= 2} className='button short-button remove-button'>
                                    Remove answer
                                </button_1.default>
                            </div>;
    })}
                    </group_1.default>
                    <button_1.default className='button long-button add-button' onClick={function () { return addAnswer(index); }}>
                        Add another answer
                    </button_1.default>
                    <button_1.default className='button long-button remove-button last-button' onClick={function () { return removeQuestion(index); }} disabled={createQuizData.questions.length === 1}>
                        Remove question
                    </button_1.default>
                </div>
            </>; })}
            <div>
                <button_1.default className='button long-button add-button' onClick={function () { return addQuestion(); }}>
                    Add another question
                </button_1.default>
                <button_1.default className='button long-button submit-button last-button' onClick={function () { return submitQuiz(createQuizData); }}>
                    Submit Quiz
                </button_1.default>
            </div>
        </div>
    </>;
};
function mapStateToProps(state) {
    return {
        createQuizData: state.createQuizData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addAnswer: function (value) { return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addAnswer(value)); },
        addQuestion: function () { return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.addQuestion()); },
        removeAnswer: function (quesIndex, ansIndex) {
            return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.removeAnswer(quesIndex, ansIndex));
        },
        removeQuestion: function (index) {
            return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.removeQuestion(index));
        },
        submitQuiz: function (data) { return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.submitQuiz(data)); },
        updateAnswer: function (value, quesIndex, ansIndex) {
            return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateAnswer(value, quesIndex, ansIndex));
        },
        updateCorrectAns: function (quesIndex, ansIndex) {
            return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateCorrectAns(quesIndex, ansIndex));
        },
        updateQuest: function (value, index) {
            return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateQuest(value, index));
        },
        updateTitle: function (value) { return dispatch(CreateQuestionnaireActions_1.CreateQuestionnaireActions.updateTitle(value)); },
    };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
