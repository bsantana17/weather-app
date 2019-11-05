import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return (
            city ?
            <
            ForecastExtended city = { city }
            forecastData = { forecastData }
            /> :
            null
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    city: state.city,
    forecastData: state.cities[state.city] && state.cities[state.city].forecastData,
});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);