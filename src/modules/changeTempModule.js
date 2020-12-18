export function changeTemp(){
    const currTempC = document.querySelector('.current_temp_c');
    const currTempF = document.querySelector('.current_temp_f')
    const feelTempC = document.querySelector('.feels_temp_c');
    const feelTempF = document.querySelector('.feels_temp_f');
    const tmrwTempC = document.querySelector('.tomorrow_avgtemp_c')
    const tmrwTempF = document.querySelector('.tomorrow_avgtemp_f')
    const aftTmrwTempC = document.querySelector('.aftertomorrow_avgtemp_c')
    const aftTmrwTempF  = document.querySelector('.aftertomorrow_avgtemp_f')
    const tempList = [currTempC, currTempF, feelTempC, feelTempF, tmrwTempC, tmrwTempF, aftTmrwTempF, aftTmrwTempC];
    tempList.forEach(el => el.classList.toggle('hide'));
    if(currTempF.classList.contains('hide')){
        localStorage.setItem('key_temp', 'C')
    }
    else {
        localStorage.setItem('key_temp', 'F')
    }
}