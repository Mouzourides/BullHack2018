import * as React from 'react';
import {SubmitHouse} from '../../SubmitHouse/SubmitHouse';
import Layout from '../Layout/Layout';

export const SubmitHouseScreen: React.SFC<{}> = () => {

    return (
        <Layout component={SubmitHouse}/>
    );
};

export default SubmitHouseScreen;
