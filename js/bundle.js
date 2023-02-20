// Imported Files
import { saveButtonAnim } from "./saveButtonAnim.js";
import { openClosePanel } from "./openPanel.js";
import { loaded } from "./loader.js";

import { funcContinueBtn } from "./functions.js";
import { funcSaveRandomBtn } from "./functions.js";
import { funcSaveBtn } from "./functions.js";
import { funcRandomBtn } from "./functions.js";

saveButtonAnim();
openClosePanel();
// Imported Files

// Selectors**************************************
// Slider Quote Buttons & Save Buttons
const continueBtn = document.querySelector(".continue-btn");
const randomBtn = document.querySelector(".random-btn");
const saveContinueBtn = document.querySelector("#save-continue-icon");
const saveRandomBtn = document.querySelector("#save-random-icon");
// Slider Quote Buttons & Save Buttons

// Events **********************************************
window.addEventListener("DOMContentLoaded", () => {
  loaded();
  funcContinueBtn();
});

// Slider Quotes Button
randomBtn.addEventListener("click", () => {
  funcRandomBtn();
});

continueBtn.addEventListener("click", () => {
  funcContinueBtn();
});
// Slider Quotes Button

// Save Quote Button
saveContinueBtn.addEventListener("click", () => {
  funcSaveBtn();
});

saveRandomBtn.addEventListener("click", () => {
  funcSaveRandomBtn();
});
// Save Quote Button
// Events **********************************************
