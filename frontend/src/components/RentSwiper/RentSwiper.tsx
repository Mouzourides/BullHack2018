import Card from 'antd/es/card';
import * as React from 'react';
import {connect, Dispatch} from 'react-redux';
import Button from 'reactstrap/lib/Button';
import {AppState} from '../../redux/AppState';
import {RentActions, RentData} from './RentSwiperActionReducer';

export interface Props {
    rentData: RentData;
    updateCurrentHouse: () => any;
}

const Questionnaire: React.SFC<Props> = (props) => {
    const {
        rentData,
        updateCurrentHouse,
    } = props;

    return <>
        <div>
            <Card>
                <p>{rentData.currentHouse.address}</p>
                <p>{rentData.currentHouse.description}</p>
                <p>{rentData.currentHouse.photo}</p>
                <p>£{rentData.currentHouse.price}</p>
            </Card>
            <Button onClick={() => updateCurrentHouse()}>
                Next
            </Button>
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
        updateCurrentHouse: () => {
            dispatch(RentActions.updateCurrentIndex());
            dispatch(RentActions.updateCurrentHouse());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
