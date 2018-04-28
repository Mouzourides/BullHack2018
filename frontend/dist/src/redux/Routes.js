import * as React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import * as Loader from 'react-loader';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { history } from './Store';
var Routes = function (props) {
    var loading = props.loading;
    return (React.createElement(Loader, { loaded: !loading },
        React.createElement(ConnectedRouter, { history: history },
            React.createElement(React.Fragment, null,
                React.createElement(Route, { path: '/home', component: Home })))));
};
function mapStateToProps(state) {
    return {
        loading: state.homeData._loading,
    };
}
export default connect(mapStateToProps)(Routes);
//# sourceMappingURL=Routes.js.map