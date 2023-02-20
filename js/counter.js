// Counter
const counterIcon = document.querySelector("#saved-icon p");
let count = 0;

export const quoteCounter = () => {
  count++;
  counterIcon.textContent = count;
}
// Counter
