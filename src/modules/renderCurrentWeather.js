import { daysEn, monthEn, daysRu, monthRu } from './constants.js'


export function getCurrentWeatherData(weather){
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
    const paramsC = [tempC, tempF, wind, icon, city, country, feelsTempC, feelsTempF, humidity, textCondit];
    renderCurrentWeather(...paramsC);
}

function renderCurrentWeather(t_c, t_f, wind, icon, city, country, feels_c, feels_f, hudimity, condition){
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    const main = document.querySelector('.current');
    const weather = document.querySelector('.current_weather')
    const currentDate = document.querySelector('.current_date');
    const tempC = document.querySelector('.current_temp_c')
    const tempF = document.querySelector('.current_temp_f')
    const windText = document.querySelector('.current_wind')
    const hudimityText = document.querySelector('.current_humidity')
    const cityText = document.querySelector('.current_city')
    const textCondit = document.querySelector('.current_condit');
    const iconSpan = document.querySelector('.icon');
    currentDate.innerHTML = `${daysEn[day]}, ${date.getDate()} ${monthEn[month]}`
    iconSpan.innerHTML = `<img src="${icon}" alt='${condition}' /> `
    tempC.innerHTML = `${t_c}°C | FEELS LIKE: ${feels_c}°C`;
    tempF.innerHTML = `${t_f}°F | FEELS LIKE: ${feels_f}°F`;
    windText.innerHTML = `WIND: ${wind} KM/HR`;
    hudimityText.innerHTML = `HUDIMITY: ${hudimity}`;
    cityText.innerText = `${city}, ${country}`;
    textCondit.innerText = `${condition}`;
    weather.append(textCondit, tempC, tempF, windText, hudimityText, cityText);
}