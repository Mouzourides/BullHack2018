import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {AppState} from '../../redux/AppState';
import {HomeActions, HomeData} from './HomeActionReducer';

export interface Props {
    homeData: HomeData;
}

const Questionnaire: React.SFC<Props> = (props) => {
    const {
        homeData,
    } = props;

    return <>
        <div>
            <p>My name is: {homeData.name}</p>
        </div>
    </>;
};

function mapStateToProps(state: AppState) {
    return {
        homeData: state.homeData,
    };
}

function mapDispatchToProps(dispatch: Dispatch<AppState>) {
    return {
        addAnswer: (value: number) => dispatch(HomeActions.updateName(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
