const months = document.querySelector('.months');
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function countdown() {
    const year = new Date().getFullYear();
    //*console.log(year);
    const sellout = new Date(`10 jun, ${year} 00:00:01`);
    //*console.log(birthday);
    const today = new Date();
    console.log(today);
    let selloutCountdown = '';
    if (today > sellout) {
        selloutCountdown = today - sellout;
    } else {
        selloutCountdown = sellout - today;
    }

    let countdownDay = Math.floor(selloutCountdown / 1000 / 60 / 60 / 24);
    console.log(countdownDay);
    let countdownHour = Math.floor(selloutCountdown / 1000 / 60 / 60) % 24;
    console.log(countdownHour);
    let countdownMinutes = Math.floor(selloutCountdown / 1000 / 60) % 60;
    console.log(countdownMinutes);
    let countdownSeconds = Math.floor(selloutCountdown / 1000) % 60;
    console.log(countdownSeconds);
    day.textContent = formatTime(countdownDay);
    hour.textContent = formatTime(countdownHour);
    minute.textContent = formatTime(countdownMinutes);
    second.textContent = formatTime(countdownSeconds);

    function formatTime(time) {
        if (time < 10) {
            return `0${time}`;
        } else return time;
    }
    /* 
    hour.textContent = birthdayCountdown - countdownDay * 24; */
}
setInterval(countdown, 1000);