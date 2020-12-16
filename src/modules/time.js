let timerId;

function time(){
    let time = document.querySelector('.time');
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    time.children[0].innerHTML = hours;
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    time.children[1].innerHTML = minutes;
    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    time.children[2].innerHTML = seconds;
}

function clockStart() { 
    timerId = setInterval(time, 1000);
    time(); 
}

export default clockStart;