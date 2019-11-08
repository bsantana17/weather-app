import getForecastByCity from '../services/getForecastByCity';
import transformForecast from '../services/transformForecast';
import getUrlByCity from '../services/getUrlByCity';
import transformWeather from '../services/transformWeather'
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
    return dispatch => {
        const api_forecast = getForecastByCity(payload);

        dispatch(setCity(payload));

        return fetch(api_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);

                dispatch(setForecastData({ city: payload, forecastData }))
            }
        );
    }
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = getUrlByCity(city);
            fetch(api_weather).then(res => {
                return res.json();
            }).then(data => {
                const newWeather = transformWeather(data);

                dispatch(setWeatherCity({ city, data }));
            });
        });
    }

}