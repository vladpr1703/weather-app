import { getWallaper } from './modules/wallaperModule.js'
import { getCityWeather } from './modules/renderCurrentWeather.js';
import clockStart from './modules/time.js';

const inputCity = document.querySelector('.input_city');

getWallaper();
setStartCity();
clockStart();

inputCity.addEventListener('change', (e) => {
    const city = e.target.value;
    getCityWeather(city);
    e.target.value = '';
})

async function setStartCity(){
    let response = await fetch('https://ipinfo.io/json?token=c8cda7f4b9faf8');
    let data = await response.json();
    getCityWeather(`${data.city},${data.country}`);
}

