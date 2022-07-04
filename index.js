//You can change this however you want for the Date
const newDate =  '1 May 2023';

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const secs = document.getElementById('seconds');


function countDown() {
    const callDate = new Date(newDate);
    const currentDate = new Date();

    //seconds
    const seconds = (callDate - currentDate) / 1000;
    const daysx = Math.floor(seconds / 3600 / 24);
    const hoursx = Math.floor(seconds / 3600) % 24;
    const minutesx = Math.floor(seconds / 60) %60;
    const secsx = Math.floor(seconds) % 60;

    days.innerHTML = formatTime(daysx);
    hours.innerHTML = formatTime(hoursx);
    minutes.innerHTML = formatTime(minutesx);
    secs.innerHTML = formatTime(secsx);

    console.log(daysx, hoursx, minutesx, secsx);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countDown();
setInterval(countDown, 1000);
