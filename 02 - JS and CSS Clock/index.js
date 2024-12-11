const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  const date = new Date();
  const second = date.getSeconds();
  const minute = date.getMinutes();
  const hour = date.getHours();

  const secondsDegree = (second / 60) * 360 + 90;
  const minutesDegree = (minute / 60) * 360 + 90;
  const hoursDegree = (hour / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setTime, 1000);
