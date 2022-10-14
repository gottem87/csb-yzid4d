const clock = document.getElementById("clock");

update();
setInterval(update, 1);

function update() {
  let date = new Date();
  clock.innerHTML = formatTime(date);

  function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ms = date.getMilliseconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    hours = formatzeros(hours);
    minutes = formatzeros(minutes);
    seconds = formatzeros(seconds);
    ms = formatzeros(ms);

    return `${hours}:${minutes}:${seconds}:${ms}:${amOrPm}`;
  }
  function formatzeros(time) {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }
}
