console.log("Javascript is running");

const buttons = document.querySelectorAll(".profile-card-bottom__btn");
const titles = document.querySelectorAll(".activity-card__title");
const currentTimes = document.querySelectorAll(".current-time");
const cardPeriods = document.querySelectorAll(".activity-card__period");
const prevActivity = document.querySelectorAll(".activity-card__previous");

let JSONdata = {};
let response;
let loc;
let jsonPath;
const host = window.location.host;

loc = host === "127.0.0.1:5500" ? "local" : "remote";
jsonPath =
  host === "127.0.0.1:5500"
    ? "./data.json"
    : "../data.json";
console.log(loc);

getData(jsonPath).then((data) => (JSONdata = data));

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    changeClass(event);
    let period = btn.innerHTML;
    setPeriod(period);
  });
});

async function getData(jsonPath) {
  response = await fetch(jsonPath);
  if (loc === "local") {
    const data = await response.json();
    return data;
  } else {
    const data = await response;
    console.log(data);
    return data;
  }
}
function changeClass(event) {
  for (let i = 0; i < buttons.length; i++) {
    if (parseInt(event.target.value) === i) {
      buttons[i].classList.add("active");
    } else {
      buttons[i].classList.remove("active");
    }
  }
}

function setPeriod(period) {
  JSONdata.forEach((obj, idx) => {
    currentTime = obj["timeframes"][period.toLowerCase()]["current"];
    currentExt = currentTime === 1 ? "hr" : "hrs";

    prevTime = obj["timeframes"][period.toLowerCase()]["previous"];
    prevExt = prevTime === 1 ? "hr" : "hrs";

    currentTimes[idx].innerHTML = currentTime + currentExt;
    prevActivity[idx].innerHTML = prevTime + prevExt;

    if (period === "Daily") {
      cardPeriods[idx].innerHTML = "Yesterday";
    } else if (period === "Weekly") {
      cardPeriods[idx].innerHTML = "Last Week";
    } else {
      cardPeriods[idx].innerHTML = "Last Month";
    }
  });
}
