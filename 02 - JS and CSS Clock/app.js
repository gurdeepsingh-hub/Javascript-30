const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
let setDate = () => {
  const present = new Date();

  const seconds = present.getSeconds();
  const secondDeg = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  const minDeg = secondDeg / 60 + 90;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  const Hours = present.getHours();
  const hourDeg = (Hours / 12) * 360 + minDeg / 12 + 90;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  console.log(present.getHours(), present.getMinutes());
};

setInterval(setDate, 1000);
