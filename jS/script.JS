const toggleBtn = document.getElementById("darkToggle");
const html = document.documentElement;

toggleBtn.addEventListener("change", function () {
  if (toggleBtn.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");

  toggleBtn.checked = true;
}
