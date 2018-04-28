import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import {AppState} from '../../redux/AppState';
import {RentActions, RentData} from './RentSwiperActionReducer';

export interface Props {
    rentData: RentData;
    updateCurrentIndex: () => any;
}

const Questionnaire: React.SFC<Props> = (props) => {
    const {
        rentData,
    } = props;

    return <>
        <div>
        </div>
    </>;
};

function mapStateToProps(state: AppState) {
    return {
        rentData: state.rentData,
    };
}

function mapDispatchToProps(dispatch: Dispatch<AppState>) {
    return {
        updateCurrentIndex: () => dispatch(RentActions.updateCurrentIndex()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
