import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from '../actions';
import LocationList from '../components/LocationList';
import { getWeatherCities } from '../reducers'

class LocationListContainer extends Component {

    componentDidMount() {
        this.props.setWeather(this.props.cities);
    }


    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return <LocationList cities = { this.props.cities }
        onSelectedLocation = { this.handleSelectionLocation } > < /LocationList>;
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
};

const mapDispatchPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
})

export default connect(mapStateToProps, mapDispatchPropsActions)(LocationListContainer);