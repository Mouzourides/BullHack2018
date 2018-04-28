import * as React from 'react';
import '../../App.css';

import logo from './logo.svg';
import {connect, Dispatch} from "react-redux";
import {HomeActions, HomeState} from "./HomeActionReducer";
import {GlobalState} from "../redux/GlobalState";

export interface Props {
    appData: HomeState;
}

const App: React.SFC<Props> = (props) => {
    const {
        appData,
    } = props;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
                {appData.name}
                To get started, edit <code>src/App.tsx</code> and save to reload.
            </p>
        </div>
    );
};

function mapStateToProps(state: GlobalState) {
    return {
        appData: state.homeState
    };
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
    return {
        updateName: (value: string) => dispatch(HomeActions.updateName(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
