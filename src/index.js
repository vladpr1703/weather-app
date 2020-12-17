import { getWallaper } from './modules/wallaperModule.js'
import { getCityWeather } from './modules/getCityWeather.js';
import clockStart from './modules/time.js';

const inputCity = document.querySelector('.input_city');
const wallaperButton = document.querySelector('.change_wallaper');
const tempButton = document.querySelector('.change_temp');

getWallaper();
setStartCity();
clockStart();

inputCity.addEventListener('change', (e) => {
    let regex = /\w/g;
    if(regex.test(e.target.value)) {
    const city = e.target.value;
    getCityWeather(city);
    }
    e.target.value = '';
})

wallaperButton.addEventListener('click', getWallaper);

tempButton.addEventListener('click', () => {
    const currTempC = document.querySelector('.current_temp_c');
    const currTempF = document.querySelector('.current_temp_f')
    const tmrwTempC = document.querySelector('.tomorrow_avgtemp_c')
    const tmrwTempF = document.querySelector('.tomorrow_avgtemp_f')
    const aftTmrwTempC = document.querySelector('.aftertomorrow_avgtemp_c')
    const aftTmrwTempF  = document.querySelector('.aftertomorrow_avgtemp_f')
    const tempList = [currTempC, currTempF, tmrwTempC, tmrwTempF, aftTmrwTempF, aftTmrwTempC];
    tempList.forEach(el => el.classList.toggle('hide'));
})

async function setStartCity(){
    let response = await fetch('https://ipinfo.io/json?token=c8cda7f4b9faf8');
    let data = await response.json();
    getCityWeather(`${data.city},${data.country}`);
}

