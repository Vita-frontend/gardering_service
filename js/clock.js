const clockContainer = document.querySelector('.header-clock');

function upDateClock(){
clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(upDateClock, 1000);
upDateClock();