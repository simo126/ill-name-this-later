const updateClock = () => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  document.getElementById("hour").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minute").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;
  document.getElementById("ampm").innerText = ampm;
};
setInterval(updateClock, 1000);
