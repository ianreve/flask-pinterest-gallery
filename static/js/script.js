function CopyMe(oFileInput, sTargetID) {
  var arrTemp = oFileInput.value.split("\\");
  document.getElementById(sTargetID).value = arrTemp[arrTemp.length - 1];
}
// ---------------------------------------------------------------------------------------------------------
const dot = document.querySelectorAll(".dot");
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  dot.forEach((Element) => {
    Element.style.background = "#286d5d";
  });
} else {
  document.documentElement.classList.remove("dark");
  dot.forEach((Element) => {
    Element.style.background = "#0A192F";
  });
}

// Whenever the user explicitly chooses light mode
localStorage.theme = "light";

// Whenever the user explicitly chooses dark mode
localStorage.theme = "dark";

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem("theme");

const view = document.getElementById("view");

view.addEventListener("click", () => {
  view.classList.add("hidden");
});
