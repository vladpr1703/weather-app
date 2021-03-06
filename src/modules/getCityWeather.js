import renderMap from './mapboxModule.js'
import { getCurrentWeatherData } from './renderCurrentWeather.js'
import { getTomorrowWeatherData } from './renderTomorrowWeather.js'
import { getAfterTomorrowWeatherData } from './renderAfterTomorrowWeather.js'

export async function getCityWeather(city, lang = 'en'){
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=0214c08aa62441c8be983128201512&q=';
    const endUrl = '&days=4&lang=';
    const language = lang;
    const fullUrl = `${url}${city}${endUrl}${language}`;
    const response = await fetch(fullUrl);
    const weather = await response.json();
    const lng = weather.location.lon;
    const lat = weather.location.lat;
    renderMap(lng, lat);
    getCurrentWeatherData(weather)
    getTomorrowWeatherData(weather);
    getAfterTomorrowWeatherData(weather);
}
