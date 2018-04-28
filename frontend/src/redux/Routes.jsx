"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_redux_1 = require("react-router-redux");
var react_router_1 = require("react-router");
var Loader = require("react-loader");
var react_redux_1 = require("react-redux");
var CreateQuestionnaireScreen_1 = require("../components/Screens/CreateQuestionnaireScreen/CreateQuestionnaireScreen");
var CreateUserScreen_1 = require("../components/Screens/CreateUserScreen/CreateUserScreen");
var QuestionnaireScreen_1 = require("../components/Screens/QuestionnaireScreen/QuestionnaireScreen");
var Store_1 = require("./Store");
var LoginScreen_1 = require("../components/Screens/LoginScreen/LoginScreen");
var Routes = function (props) {
    var loading = props.loading;
    return (<Loader loaded={!loading}>
            <react_router_redux_1.ConnectedRouter history={Store_1.history}>
                <>
                    <react_router_1.Route path='/login' component={LoginScreen_1.default}/>
                    <react_router_1.Route path='/create-quiz' component={CreateQuestionnaireScreen_1.default}/>
                    <react_router_1.Route path='/quiz' component={QuestionnaireScreen_1.default}/>
                    <react_router_1.Route path='/create-account' component={CreateUserScreen_1.default}/>
                </>
            </react_router_redux_1.ConnectedRouter>
        </Loader>);
};
function mapStateToProps(state) {
    return {
        loading: state.quizData._loading,
    };
}
exports.default = react_redux_1.connect(mapStateToProps)(Routes);
