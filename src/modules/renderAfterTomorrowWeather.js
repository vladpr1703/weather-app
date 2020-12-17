import { daysEn, monthEn, daysRu, monthRu } from './constants.js'


export function getAfterTomorrowWeatherData(weather){
    const avgtempC = weather.forecast.forecastday[2].day.avgtemp_c;
    const avgtempF = weather.forecast.forecastday[2].day.avgtemp_f;  
    const icon = weather.forecast.forecastday[2].day.condition.icon;
    const textCondit = weather.forecast.forecastday[2].day.condition.text;
    const paramsC = [avgtempC, avgtempF,  icon, textCondit];
    renderAfterTomorrowWeather(...paramsC);
}

function renderAfterTomorrowWeather(t_c, t_f, icon, condition){
    let date = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
    let day = date.getDay();
    let month = date.getMonth();
    const main = document.querySelector('.aftertomorrow');
    const tomorrowDate = document.querySelector('.aftertomorrow_date');
    const tempC = document.querySelector('.aftertomorrow_avgtemp_c');
    const tempF = document.querySelector('.aftertomorrow_avgtemp_f');
    const iconSpan = document.querySelector('.aftertomorrow_icon');
    const condit = document.querySelector('.aftertomorrow_condit');
    tomorrowDate.innerHTML = `${daysEn[day]}, ${date.getDate()} ${monthEn[month]}`
    condit.textContent = condition;
    iconSpan.innerHTML = `<img src="${icon}" alt='' /> `
    tempC.innerHTML = `${t_c}°C `;
    tempF.innerHTML = `${t_f}°F `;
    main.append(tomorrowDate, iconSpan, condit, tempC, tempF);
}
