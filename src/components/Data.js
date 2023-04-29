import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Weather from "./Weather";
import {getWeatherAction} from "../actions/weatherAction";

const Data = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const {weather} = useSelector(state => state.weather);
    useEffect(()=>{}, [weather])

    return (
        <div className='div-data'>
            <input type="text"  placeholder='input city'
                   onChange={(event )=>{
                setCity(event.target.value)}} value={city}/>
            <button onClick={() => {
                dispatch(getWeatherAction(city))
            }}>Get weather</button>
            <div className='weather-report'>
                {
                    (weather) ? <Weather/> : <div>...</div>
                }
            </div>


        </div>
                );

}
export default Data;