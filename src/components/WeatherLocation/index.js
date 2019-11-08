import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (

        // handleUpdateClick = () => {
        //     const api_weather = getUrlByCity(this.state.city);
        //     fetch(api_weather).then(res => {
        //         return res.json();
        //     }).then(data => {
        //         const newWeather = transformWeather(data);
        //         this.setState({
        //             data: newWeather
        //         });
        //     });
        // }
        <
        div className = "weatherLocationCont"
        onClick = { onWeatherLocationClick } >
        <
        Location city = { city } > < /Location> {
        data ?
        <
        WeatherData data = { data } > < /WeatherData> : <
        CircularProgress size = { 70 }
        />
    } { /* <button onClick={this.handleUpdateClick}>Actualizar</button> */ } <
    /div>
);


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;