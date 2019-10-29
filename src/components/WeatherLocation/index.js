import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import transformWeather from '../../services/transformWeather';
import getUrlByCity from '../../services/getUrlByCity';
import CircularProgress from '@material-ui/core/CircularProgress'

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
    }
    

    handleUpdateClick = () => {
        const api_weather = getUrlByCity(this.state.city);
        fetch(api_weather).then(res => {
            return res.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            });
        });
    }

    render(){
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData>
                    : <CircularProgress size={70} />
                }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}
            </div>
        );
    }

}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;