import * as React from 'react';
import {replace} from 'react-router-redux';
import {store} from '../../redux/Store';
import {sendHouse} from '../../services/QuizApi';
import {loadReferenceData} from "../RentSwiper/RentSwiperActionReducer";

interface State {
    address: string;
    photo: string;
    description: string;
    latitude: number;
    longitude: number;
    price: number;
}

export class SubmitHouse extends React.Component<{}, State> {

    public state: State = {
        address: '',
        description: '',
        latitude: 0,
        longitude: 0,
        photo: '',
        price: 0,
    };

    public render() {
        const {address} = this.state;
        const {description} = this.state;
        const {latitude} = this.state;
        const {longitude} = this.state;
        const {photo} = this.state;
        const {price} = this.state;

        return (
            <>
                <h1>Sign up your property!</h1>
                <div className='box'>
                    <h3>Address: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({address: e.currentTarget.value})}
                    />
                    <h3>Description: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({description: e.currentTarget.value})}
                    />
                    <h3>Latitude: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({latitude: +e.currentTarget.value})}
                    />
                    <h3>Longitude: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({latitude: +e.currentTarget.value})}
                    />
                    <h3>Photo: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({photo: e.currentTarget.value})}
                    />
                    <h3>Price: </h3>
                    <input type={'text'}
                           className='question-text-box'
                           onChange={(e) => this.setState({price: +e.currentTarget.value})}
                    />
                    <button
                        className='button submit-button long-button'
                        onClick={() => {
                            sendHouse(address, photo, description, latitude, longitude, price);
                            loadReferenceData(store);
                            store.dispatch(replace('/view-houses'));
                        }}>
                        Submit
                    </button>
                </div>
            </>
        );
    }
}
