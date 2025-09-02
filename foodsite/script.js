document.getElementById("food-form").addEventListener("submit", function(e){
  e.preventDefault();

  const checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
    .map(cb => cb.value);

  let suggestion = "Please select some ingredients!";

  if (checked.includes("fish") && checked.includes("rice") && checked.includes("lemon")) {
    suggestion = "Try: Grilled Fish with Lemon Rice 🍋🐟🍚";
  } else if (checked.includes("chicken") && checked.includes("pasta")) {
    suggestion = "Try: Creamy Chicken Pasta 🍗🍝";
  } else if (checked.includes("rice") && checked.includes("chicken")) {
    suggestion = "Try: Chicken Fried Rice 🍗🍚";
  } else if (checked.includes("pasta") && checked.includes("lemon")) {
    suggestion = "Try: Lemon Butter Pasta 🍋🍝";
  }

  document.getElementById("result").textContent = suggestion;
});
