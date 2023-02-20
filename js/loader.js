// Selectors
const loader = document.querySelector(".loader");
// Selectors

// Loader Function
export const loaded = () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 1550);
};
// Loader Function
