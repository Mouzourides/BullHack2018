"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const Questionnaire_1 = require("./components/Questionnaire/Questionnaire");
const Store_1 = require("./redux/Store");
const react_redux_1 = require("react-redux");
const QuestionnaireActions_1 = require("./components/Questionnaire/QuestionnaireActions");
QuestionnaireActions_1.loadReferenceData(Store_1.store);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: Store_1.store },
    React.createElement(Questionnaire_1.default, null)), document.getElementById('quiz'));
//# sourceMappingURL=index.js.map