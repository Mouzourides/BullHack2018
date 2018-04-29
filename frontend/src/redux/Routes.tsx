import * as React from 'react';

import {ConnectedRouter} from 'react-router-redux';

import {Route} from 'react-router';

import * as Loader from 'react-loader';
import {connect} from 'react-redux';
import HomeScreen from '../components/Screens/RentSwiperScreen/RentSwiperScreen';
import SubmitHouseScreen from '../components/Screens/SubmitHouseScreen/SubmitHouseScreen';
import {AppState} from './AppState';
import {history} from './Store';

interface Props {
    loading: boolean;
}

const Routes: React.SFC<Props> = (props) => {
    const {loading} = props;

    return (
        <Loader loaded={!loading}>
            <ConnectedRouter history={history}>
                <>
                    <Route path='/view-houses' component={HomeScreen}/>
                    <Route path='/add-house' component={SubmitHouseScreen}/>
                </>
            </ConnectedRouter>
        </Loader>
    );
};

function mapStateToProps(state: AppState) {
    return {
        loading: state.rentData._loading,
    };
}

export default connect(mapStateToProps)(Routes);
