import {ERROR_WEATHER, GET_WEATHER, PUT_WEATHER} from "../actions/weatherAction";

function weatherReducer(state, action) {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weather: action.payload};
        case GET_WEATHER:
            return {...state, weather: action.payload};
        case ERROR_WEATHER:
            return {...state, weather: action.payload};
        default:
            return state;
    }

    
}
export default weatherReducer;