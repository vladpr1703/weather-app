import { getWallaper } from './modules/wallaperModule.js'
import { getCityWeather } from './modules/getCityWeather.js';
import { changeTemp } from './modules/changeTempModule.js';
import { changeLang } from './modules/changeLangModule.js';
import clockStart from './modules/time.js';

const inputCity = document.querySelector('.input_city');
const wallaperButton = document.querySelector('.change_wallaper');
const tempButton = document.querySelector('.change_temp');
const langButton = document.querySelector('.change_lang');
let city;

getWallaper();
setStartCity();
clockStart();

async function setStartCity(){
    let response = await fetch('https://ipinfo.io/json?token=c8cda7f4b9faf8');
    let data = await response.json();
    city = `${data.city},${data.country}`
    getCityWeather(city);
    function checkStorage() {
        if(localStorage.getItem('key_temp') === 'F'){
            changeTemp();
        }
        if(localStorage.getItem('key_lang') === 'ru'){ 
            changeLang(city);
        }
    }
    checkStorage()
}

inputCity.addEventListener('change', (e) => {
    let regex = /\w/g;
    const lang = localStorage.getItem('key_lang')
    if(regex.test(e.target.value)) {
    const city = e.target.value;
    getCityWeather(city, lang);
    }
    e.target.value = '';
})

wallaperButton.addEventListener('click', getWallaper);

tempButton.addEventListener('click', () => {
    localStorage.removeItem('key_temp');
    changeTemp();
})

langButton.addEventListener('click', () => {
    localStorage.removeItem('key_lang');
    changeLang(city); 
})