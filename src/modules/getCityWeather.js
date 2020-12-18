import renderMap from './mapboxModule.js'
import { getCurrentWeatherData } from './renderCurrentWeather.js'
import { getTomorrowWeatherData } from './renderTomorrowWeather.js'
import { getAfterTomorrowWeatherData } from './renderAfterTomorrowWeather.js'


export async function getCityWeather(city, lang = 'en'){
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=0214c08aa62441c8be983128201512&q=';
    const endUrl = '&days=4&lang=';
    const language = lang;
    const fullUrl = `${url}${city}${endUrl}${language}`;
    let response = await fetch(fullUrl);
    let weather = await response.json();
    let lng = weather.location.lon;
    let lat = weather.location.lat;
    console.log(weather)
    renderMap(lng, lat);
    getCurrentWeatherData(weather)
    getTomorrowWeatherData(weather);
    getAfterTomorrowWeatherData(weather);
}
