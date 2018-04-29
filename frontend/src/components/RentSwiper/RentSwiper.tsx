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
            <h1>View houses</h1>
            <Card>
                <h2 className='center'>{rentData.currentHouse.address}</h2>
                <h5 className='center'>{rentData.currentHouse.description}</h5>
                <img className='img'
                     src={rentData.currentHouse.photo}
                height='500' width='500' alt='there should be a house here'/>
                <h2 className='center'>£{rentData.currentHouse.price}</h2>
            </Card>
            <Button
                className='button submit-button long-button'
                onClick={() => updateCurrentHouse()}>
                Like
            </Button>
            <Button
                className='button remove-button long-button'
                onClick={() => updateCurrentHouse()}>
                Dislike
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
