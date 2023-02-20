// Imported Files
import { statusQuote } from "./saveButtonAnim.js";
import { quoteCounter } from "./counter.js";

// Imported Files

// Selectors
// Quote Details
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const infoQuote = document.querySelector(".info");
// Quote Details

// Slider Quote Buttons & Save Buttons
const saveContinueBtn = document.querySelector("#save-continue-icon");
const saveRandomBtn = document.querySelector("#save-random-icon");
// Slider Quote Buttons & Save Buttons

// Saved Quote Panel
const savedQuotes = document.querySelector("#saved-quotes");
// Saved Quote Panel
// Selectors

// functions********************************************
// Slider Quotes Algarithm
let randomQuote = 0;
export const funcRandomBtn = () => {
  randomQuote = Math.floor(Math.random() * 1643);
  getRandomQuote(randomQuote);

  saveContinueBtn.style.display = "none";
  saveRandomBtn.style.display = "block";
};

export const funcContinueBtn = () => {
  currentItem++;
  getContinueQuote();

  saveContinueBtn.style.display = "block";
  saveRandomBtn.style.display = "none";
};
// Slider Quotes Algarithm

// Save Quote Algarithm
export const funcSaveBtn = () => {
  saveContinueQuote();
  statusQuote();
  quoteCounter();
};

export const funcSaveRandomBtn = () => {
  saveRandomQuote();
  statusQuote();
  quoteCounter();
};
// Save Quote Algarithm

// Slider Quotes Algarithm
let quoteUrl = "https://type.fit/api/quotes";
function getRandomQuote(randomQuote) {
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data[randomQuote].text;
      author.textContent = data[randomQuote].author;
      let info = `${randomQuote}/ ${data.length}`;
      infoQuote.textContent = info;
    });
}

let currentItem = 1;
function getContinueQuote(data) {
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data[currentItem].text;
      author.textContent = data[currentItem].author;
      let info = `${currentItem}/ ${data.length}`;
      infoQuote.textContent = info;
    });
}
// Slider Quotes Algarithm

// Save Quote Algarithm
function saveContinueQuote() {
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      let continueLi = document.createElement("li");
      continueLi.innerHTML = `${data[currentItem].text} <span>❤</span>`;
      savedQuotes.appendChild(continueLi);
      savedQuotes.classList.add("hasChild");
    });
}

function saveRandomQuote() {
  fetch(quoteUrl)
    .then((response) => response.json())
    .then((data) => {
      let randomLi = document.createElement("li");
      randomLi.innerHTML = `${data[randomQuote].text} <span>❤</span>`;
      savedQuotes.appendChild(randomLi);
      savedQuotes.classList.add("hasChild");
    });
}
// Save Quote Algarithm
