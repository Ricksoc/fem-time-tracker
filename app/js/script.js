console.log("Javascript is running");

const buttons = document.querySelectorAll(".profile-card-bottom__btn");

let JSONdata;


getData()
.then((data) => (JSONdata = data))

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    changeClass(event);
  });
});

function changeClass(event) {
  for (let i = 0; i < buttons.length; i++) {
    if (parseInt(event.target.value) === i) {
      buttons[i].classList.add("active");
    } else {
      buttons[i].classList.remove("active");
    }
  }
}

async function getData() {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
}