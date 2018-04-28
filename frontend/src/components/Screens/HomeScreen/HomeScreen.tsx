import * as React from 'react';
import {default as Home} from '../../Home/Home';
import QuizLayout from '../Layout/Layout';

export const HomeScreen: React.SFC<{}> = () => {

    return (
        <QuizLayout component={Home}/>
    );
};

export default HomeScreen;
