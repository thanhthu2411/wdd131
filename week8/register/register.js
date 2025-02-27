import { participantTemplate, totalFees, successTemplate } from './Template.js';

let count = 1;

document.querySelector("#add").addEventListener("click", () => {
  count ++;
  participantTemplate(count);
});

// submit form plan

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  document.querySelector("form").style.display = "none";

  let info = {
    adult: document.querySelector("#adult_name").value,
    participantNum: count,
    feeTotal: totalFees(),
  }

  successTemplate(info);
})