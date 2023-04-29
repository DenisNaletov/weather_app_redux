import {applyMiddleware, createStore} from "redux";
import weatherReducer from "../reducers/weatherReducer";
import thunk from "redux-thunk";
import {logger} from "redux-logger/src";

const initialState = {
    city: '',
    weather: {}
}

const store = createStore(weatherReducer, initialState, applyMiddleware(logger, thunk));
export default store;