
export const GET_WEATHER = 'GET_WEATHER';
export const PUT_WEATHER = 'PUT_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

export const getRequestWeatherAction = () => ({
    type: GET_WEATHER,
    payload: 'Is loading....'
});

export const weatherErrorAction =() => ({
    type: ERROR_WEATHER,
    payload: 'Error'
});

export const putWeatherAction =(data) => ({
    type: PUT_WEATHER,
    payload: data
});
export const getWeatherAction = (cityName) => {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
    const apiKey = '043e529d6bee20cb875b2b178f23dda8';

    return (dispatch) => {
        dispatch(getRequestWeatherAction());
        fetch(`${baseUrl}q=${cityName}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
                else dispatch(weatherErrorAction());
            })
            .then(data => {
                dispatch(putWeatherAction(data))
                console.log(data)
            })
            .catch(e =>dispatch(weatherErrorAction()));

}

};