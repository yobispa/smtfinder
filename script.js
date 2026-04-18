const toggle = document.getElementById("themeToggle");
const body = document.body;
const saved = localStorage.getItem("smtfinder-theme");

if (saved === "light" || saved === "dark") {
  body.setAttribute("data-theme", saved);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  body.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

toggle?.addEventListener("click", () => {
  const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", next);
  localStorage.setItem("smtfinder-theme", next);
});