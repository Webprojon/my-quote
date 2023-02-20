// Selectors
const savedQuotes = document.querySelector("#saved-quotes");
const savedBtn = document.querySelector("#saved-icon");
const closeBtn = document.querySelector("#close-icon");
const panel = document.querySelector(".panel");
// Selectors

// Open Panel Funtion
export const openClosePanel = () => {
  savedBtn.addEventListener("click", () => {
    let check = savedQuotes.classList.contains("hasChild");
    if (check === true) {
      panel.classList.toggle("active");
      savedBtn.style.display = "none";
      closeBtn.style.display = "block";
    } else {
      panel.classList.remove("active");
    }
  });

  closeBtn.addEventListener("click", () => {
    panel.classList.toggle("active");
    savedBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
};
// Open Panel Funtion
