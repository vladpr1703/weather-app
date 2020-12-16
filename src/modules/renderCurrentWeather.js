import renderMap from './mapboxModule.js'
import { daysEn, monthEn, daysRu, monthRu } from './constants.js'

export async function getCityWeather(city, lang = 'en'){
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=0214c08aa62441c8be983128201512&q=';
    const endUrl = '&days=4&lang=';
    const language = lang;
    const fullUrl = `${url}${city}${endUrl}${language}`;
    let response = await fetch(fullUrl);
    let weather = await response.json();
    let lng = weather.location.lon;
    let lat = weather.location.lat;
    renderMap(lng, lat);
    console.log(weather)
    getCurrentWeatherData(weather)
}

function getCurrentWeatherData(weather){
    const feelsTempC = weather.current.feelslike_c;
    const feelsTempF = weather.current.feelslike_f;
    const tempC = weather.current.temp_c;
    const tempF = weather.current.temp_f;
    const wind = weather.current.wind_kph;
    const humidity = weather.current.humidity;    
    const icon = weather.current.condition.icon;
    const textCondit = weather.current.condition.text;
    const city = weather.location.name;
    const country = weather.location.country;
    const paramsC = [tempC, wind, icon, city, country, feelsTempC, humidity, textCondit];
    renderWeather(...paramsC);
}

function renderWeather(temperature, wind, icon, city, country, feels, hudimity, condition){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    const main = document.querySelector('.current');
    const weather = document.querySelector('.current_weather')
    const currentDate = document.querySelector('.current_date');
    const temp = document.querySelectorAll('p')[1]
    const windText = document.querySelectorAll('p')[2]
    const hudimityText = document.querySelectorAll('p')[3]
    const cityText = document.querySelectorAll('p')[4]
    const textCondit = document.querySelectorAll('p')[0];
    const iconSpan = document.querySelector('.icon');
    currentDate.innerHTML = `${daysEn[day]}, ${date.getDate()} ${monthEn[month]}`
    main.children[0].currentDate;
    main.children[1].iconSpan;
    iconSpan.innerHTML = `<img src="${icon}" alt='${condition}' /> `
    temp.innerHTML = `${temperature}°C | FEELS LIKE: ${feels}°C`;
    windText.innerHTML = `WIND: ${wind} KM/HR`;
    hudimityText.innerHTML = `HUDIMITY: ${hudimity}`;
    cityText.innerText = `${city}, ${country}`;
    textCondit.innerText = `${condition}`;
    weather.append(textCondit, temp, windText, hudimityText, cityText);
}