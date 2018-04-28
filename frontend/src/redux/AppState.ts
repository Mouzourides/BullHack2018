import {AppState} from "../component/AppActionReducer";

export interface GlobalState {
    readonly AppState: AppState;
    readonly _loading: boolean;
}
