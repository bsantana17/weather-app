import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from '../actions';
import { createSelector } from 'reselect';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            {
                const { city, forecastData } = action.payload;
                return {...state, [city]: { forecastData, weather: null } };
            }
        case GET_WEATHER_CITY:
            {
                const city = action.payload;
                return {...state, [city]: { weather: null } };
            }

        case SET_FORECAST_DATA:
            {
                const { city, weather } = action.payload;
                return {...state, [city]: { weather } };
            }
        default:
            return state;
    }
}

export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;

export const getWeatherCities = createSelector(state => [], cities => cities);