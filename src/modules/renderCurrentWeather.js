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
    const currentDateEn = document.querySelector('.current_date_en');
    const currentDateRu = document.querySelector('.current_date_ru');
    const divTemp = document.querySelector('.current_t');
    const currTempC = document.querySelector('.current_temp_c')
    const currTempF = document.querySelector('.current_temp_f')
    const feelTempC = document.querySelector('.feels_temp_c')
    const feelTempF = document.querySelector('.feels_temp_f')
    const feelsEn = document.querySelector('.feels_text_en');
    const feelsRu = document.querySelector('.feels_text_ru')
    const windTextEn = document.querySelector('.current_wind_en')
    const windTextRu = document.querySelector('.current_wind_ru')
    const hudimityTextEn = document.querySelector('.current_humidity_en')
    const hudimityTextRu = document.querySelector('.current_humidity_ru')
    const cityText = document.querySelector('.current_city')
    const textCondit = document.querySelector('.current_condit');
    const iconSpan = document.querySelector('.icon');
    currentDateEn.innerHTML = `${daysEn[day]}, ${date.getDate()} ${monthEn[month]}`
    currentDateRu.innerHTML = `${daysRu[day]}, ${date.getDate()} ${monthRu[month]}`
    iconSpan.innerHTML = `<img src="${icon}" alt='${condition}' /> `
    currTempC.innerHTML = `${t_c}°C | `;
    feelTempC.innerHTML = `${feels_c}°C`;
    currTempF.innerHTML = `${t_f}°F | `;
    feelTempF.innerHTML = `${feels_f}°F`;
    divTemp.append(currTempF,currTempF, feelsEn, feelsRu, feelTempC, feelTempF)
    windTextEn.innerHTML = `WIND: ${wind} KM/HR`;
    windTextRu.innerHTML = `ВЕТЕР: ${wind} KМ/Ч`;
    hudimityTextEn.innerHTML = `HUDIMITY: ${hudimity}`;
    hudimityTextRu.innerHTML = `ВЛАЖНОСТЬ: ${hudimity}`;
    cityText.innerText = `${city}, ${country}`;
    textCondit.innerText = `${condition}`;
}