import {api_key, url_base} from '../const/api_url';

const getWeatherByCity = city => {
    
    return `${url_base}?q=${city}&appid=${api_key}&units=metric`;
}

export default getWeatherByCity;