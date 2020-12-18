import { daysEn, monthEn, daysRu, monthRu } from './constants.js'



export function getTomorrowWeatherData(weather){
    const avgtempC = weather.forecast.forecastday[1].day.avgtemp_c;
    const avgtempF = weather.forecast.forecastday[1].day.avgtemp_f;  
    const icon = weather.forecast.forecastday[1].day.condition.icon;
    const textCondit = weather.forecast.forecastday[1].day.condition.text;
    const paramsC = [avgtempC, avgtempF, icon, textCondit];
    renderTomorrowWeather(...paramsC);
}

function renderTomorrowWeather(t_c, t_f, icon, condition){
    let date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    let day = date.getDay();
    let month = date.getMonth();
    const tomorrowDateEn = document.querySelector('.tomorrow_date_en')
    const tomorrowDateRu = document.querySelector('.tomorrow_date_ru')
    const temp_c = document.querySelector('.tomorrow_avgtemp_c')
    const temp_f = document.querySelector('.tomorrow_avgtemp_f')
    const iconSpan = document.querySelector('.tomorrow_icon')
    const condit = document.querySelector('.tomorrow_condit')
    tomorrowDateEn.innerHTML = `${daysEn[day]}, ${date.getDate()} ${monthEn[month]}`;
    tomorrowDateRu.innerHTML = `${daysRu[day]}, ${date.getDate()} ${monthRu[month]}`
    condit.textContent = condition;
    iconSpan.innerHTML = `<img src="${icon}" alt='' /> `
    temp_c.innerHTML = `${t_c}°C `;
    temp_f.innerHTML = `${t_f}°F `;
}
