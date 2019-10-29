import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, SUN, RAIN, SNOW, DRIZZLE, THUNDER} from '../../../const/weather';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [RAIN]: "rain",
    [SUN]: "day-sunny",
    [SNOW]: "snow",
    [DRIZZLE]: "day-showers",
    [THUNDER]: "day-thunderstorm"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]

    const sizeIcon = "4x";

    return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` °C`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;