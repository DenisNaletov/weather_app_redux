import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weather)
    return (
        <div>
            City: {weather.name}, {weather.sys['country']}<br/>
            Temp: {weather.main['temp']} degrees<br/>
            Cloudness: {weather.clouds['all']} %<br/>
            Humidity: {weather.main['humidity']} %<br/>
            Wind speed: {weather.wind['speed']} m/s
        </div>
    )
}
export default Weather;
