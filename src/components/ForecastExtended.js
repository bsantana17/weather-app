import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import getForecastByCity from '../services/getForecastByCity';
import transformForecast from '../services/transformForecast';
import CircularProgress from '@material-ui/core/CircularProgress'
import './styles.css';


class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city) {
            this.setState({ forecastData: null })
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const api_forecast = getForecastByCity(city);
        fetch(api_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData});
            }
        );
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => 
            (<ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>) 
        )
    }

    renderProgress() {
        return <CircularProgress size={70} />;
    }

    render () {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronostico Extendido {city}
                </h2>
                { forecastData ?
                    this.renderForecastItemDays(forecastData)
                    : this.renderProgress()
                }
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;