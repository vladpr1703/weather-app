import { getCityWeather } from './getCityWeather.js'

export function changeLang (city) {
    const currDateEn = document.querySelector('.current_date_en');
    const currDateRu = document.querySelector('.current_date_ru');
    const tmrwDateEn = document.querySelector('.tomorrow_date_en');
    const tmrwDateRu = document.querySelector('.tomorrow_date_ru');
    const aftTmrwDateEn = document.querySelector('.aftertomorrow_date_en');
    const aftTmrwDateRu = document.querySelector('.aftertomorrow_date_ru');
    const feelsEn = document.querySelector('.feels_text_en')
    const feelsRu = document.querySelector('.feels_text_ru')
    const windTextEn = document.querySelector('.current_wind_en')
    const windTextRu = document.querySelector('.current_wind_ru')
    const hudimityTextEn = document.querySelector('.current_humidity_en')
    const hudimityTextRu = document.querySelector('.current_humidity_ru')
    const changeWallpTextEn = document.querySelector('.one_en')
    const changeWallpTextRu = document.querySelector('.one_ru')
    const changeLangTextEn = document.querySelector('.three_en')
    const changeLangTextRu = document.querySelector('.three_ru')
    const list = [currDateEn, currDateRu, tmrwDateEn, tmrwDateRu, aftTmrwDateEn, aftTmrwDateRu, windTextEn,
        feelsRu, feelsEn, windTextRu, hudimityTextEn, hudimityTextRu, changeWallpTextEn, changeWallpTextRu, 
        changeLangTextRu, changeLangTextEn];
    if(tmrwDateRu.classList.contains('hide')){
        getCityWeather(city, 'ru');
        localStorage.setItem('key_lang', 'ru')
    }
    else {
        getCityWeather(city, 'en');
        localStorage.setItem('key_lang', 'en')
    }
    list.forEach(el => el.classList.toggle('hide'))
}