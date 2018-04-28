import * as React from 'react';
import {default as RentSwiper} from '../../RentSwiper/RentSwiper';
import Layout from '../Layout/Layout';

export const HomeScreen: React.SFC<{}> = () => {

    return (
        <Layout component={RentSwiper}/>
    );
};

export default HomeScreen;
