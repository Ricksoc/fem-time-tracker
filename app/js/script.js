console.log("Javascript is running");

const buttons = document.querySelectorAll(".profile-card-bottom__btn");
const data = fetch("/data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

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
