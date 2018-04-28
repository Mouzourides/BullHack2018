import * as React from 'react';
import { connect } from 'react-redux';
import { RentActions } from './RentSwiperActionReducer';
var Questionnaire = function (props) {
    var rentData = props.rentData;
    return React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("p", null, rentData._loading)));
};
function mapStateToProps(state) {
    return {
        rentData: state.rentData,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        addAnswer: function (value) { return dispatch(RentActions.updateName(value)); },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
//# sourceMappingURL=RentSwiper.js.map