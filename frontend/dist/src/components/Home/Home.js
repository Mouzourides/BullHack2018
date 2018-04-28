import * as React from 'react';
import { connect } from 'react-redux';
import { HomeActions } from './HomeActionReducer';
var Questionnaire = function (props) {
    var homeData = props.homeData;
    return React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("p", null,
                "My name is: ",
                homeData.name)));
};
function mapStateToProps(state) {
    return {
        homeData: state.homeData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addAnswer: function (value) { return dispatch(HomeActions.updateName(value)); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
//# sourceMappingURL=Home.js.map