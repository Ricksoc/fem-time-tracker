console.log("Javascript is running");

const buttons = document.querySelectorAll(".profile-card-bottom__btn");

const getData = async function () {
  let url = "/data.json",
    data = {};

  data = await fetch(url).then((res) => res.json());

  return data;
};

fitData = getData();

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
