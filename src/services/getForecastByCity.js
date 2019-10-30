import {url_base, api_key} from '../const/api_url';

const getForecastByCity = city => {
    return `${url_base}forecast?q=${city}&appid=${api_key}&units=metric`;
}

export default getForecastByCity;