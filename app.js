const DICE_BTN = document.querySelector(".dice-img");
const ADVICE_ID = document.querySelector("#advice-id");
const ADVICE_TEXT = document.querySelector(".advice-txt");

DICE_BTN.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => {
      return data.json();
    })
    .then((completeData) => {
      let random_advice = completeData.slip.advice;
      let random_id = completeData.slip.id;
      ADVICE_TEXT.innerHTML = random_advice;
      ADVICE_ID.innerHTML = "ADVICE #" + random_id;
    });
});
