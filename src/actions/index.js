import getForecastByCity from '../services/getForecastByCity';
import transformForecast from '../services/transformForecast';
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

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
}