// Selectors
const savedBtn = document.querySelector("#saved-icon");
const saveContinueBtn = document.querySelector("#save-continue-icon");
const saveRandomBtn = document.querySelector("#save-random-icon");
const savedStatus = document.querySelector(".saved-status");
// Selectors
// Save Button Algarithm

export const saveButtonAnim = () => {
  setInterval(() => {
    saveContinueBtn.style.transform = `translateY(-3px)`;
    saveRandomBtn.style.transform = `translateY(-3px)`;
  }, 600);

  setInterval(() => {
    saveContinueBtn.style.transform = `translateY(3px)`;
    saveRandomBtn.style.transform = `translateY(3px)`;
  }, 1200);

  setInterval(() => {
    savedBtn.style.transform = `scale(1.1)`;
  }, 500);

  setInterval(() => {
    savedBtn.style.transform = `scale(1)`;
  }, 1000);

  saveContinueBtn.addEventListener("mouseenter", () => {
    savedStatus.style.opacity = 1;
  });

  saveContinueBtn.addEventListener("mouseleave", () => {
    savedStatus.style.opacity = 0;
  });

  saveRandomBtn.addEventListener("mouseenter", () => {
    savedStatus.style.opacity = 1;
  });

  saveRandomBtn.addEventListener("mouseleave", () => {
    savedStatus.style.opacity = 0;
  });
};
// Save Button Algarithm

// Save Quote Status
export const statusQuote = () => {
  savedStatus.textContent = "Your Favorite Quote Saved!";
  savedStatus.style.color = "green";
  setTimeout(() => {
    savedStatus.textContent = "save!";
  }, 1500);
};
// Save Quote Status
