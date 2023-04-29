import {useSelector} from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state)
    return (
        <div>{weather}</div>

        // <div>
        //     <h1>Weather in: + ${weather.data.name}</h1>
        //         <h3>Temp: + ${weather.main['temp']}</h3>
        //         <h3>Cloudness: + ${weather.clouds['all']}</h3>
        //         <h3>Humidity: + ${weather.main['humidity']}</h3>
        //         <h3>Pressure: + ${weather.main['pressure']}</h3>
        //         <h3>Wind speed: + ${weather.wind['speed']} </h3>
        //     </div>
    )

}
export default Weather;