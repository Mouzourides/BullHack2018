import * as React from 'react';

import {Route} from 'react-router';

import * as Loader from 'react-loader';
import {connect} from 'react-redux';
import {history} from './Store';
import {ConnectedRouter} from "react-router-redux";
import App from "../component/App";
import {GlobalState} from "./AppState";

interface Props {
    loading: boolean;
}

const Routes: React.SFC<Props> = (props) => {
    const {loading} = props;

    return (
        <Loader loaded={!loading}>
            <ConnectedRouter history={history}>
                <>
                    <Route path='/login' component={App}/>
                </>
            </ConnectedRouter>
        </Loader>
    );
};

function mapStateToProps(state: GlobalState) {
    return {
        loading: state._loading,
    };
}

export default connect(mapStateToProps)(Routes);
