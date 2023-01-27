const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
let setDate = () => {
  const present = new Date();

  const seconds = present.getSeconds();
  const secondDeg = (seconds / 60) * 360 + 90;

  const minute = present.getMinutes();
  const minDeg = (minute / 60) * 360 + (seconds / 60) * 6 + 90;

  const Hours = present.getHours();
  const hourDeg = (Hours / 12) * 360 + (minute / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
};

setInterval(setDate, 1000);
