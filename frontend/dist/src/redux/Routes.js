import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import * as Loader from 'react-loader';
import { connect } from 'react-redux';
import HomeScreen from '../components/Screens/RentSwiperScreen/RentSwiperScreen';
import { history } from './Store';
var Routes = function (props) {
    var loading = props.loading;
    return (React.createElement(Loader, { loaded: !loading },
        React.createElement(ConnectedRouter, { history: history },
            React.createElement(React.Fragment, null,
                React.createElement(Route, { path: '/', component: HomeScreen })))));
};
function mapStateToProps(state) {
    return {
        loading: state.rentData._loading,
    };
}
export default connect(mapStateToProps)(Routes);
//# sourceMappingURL=Routes.js.map