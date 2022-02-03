import { createStore, combineReducers } from "redux";
import authReducer, { AuthState } from "./reducers/authReducer";

const RootReducer = combineReducers({
    auth: authReducer
});

export interface RootState {
    auth: AuthState
}

export default createStore(RootReducer);