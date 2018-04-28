import * as React from 'react';
import '../App.css';

import logo from './logo.svg';
import {GlobalState} from "../redux/AppState";
import {connect, Dispatch} from "react-redux";
import {AppActions, AppState} from "./AppActionReducer";

export interface Props {
    appData: AppState;
}

const App: React.SFC<Props> = (props) => {
    const {
        appData,
    } = props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
        appData: state.AppState
    };
}

function mapDispatchToProps(dispatch: Dispatch<GlobalState>) {
    return {
        updateName: (value: string) => dispatch(AppActions.updateName(value)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
