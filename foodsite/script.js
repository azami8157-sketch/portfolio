// 1. Dropdown menu
const menuBtn = document.getElementById("menu-btn");
const dropdown = document.getElementById("dropdown");

menuBtn.addEventListener("click", function(){
  dropdown.classList.toggle("show");
});

window.addEventListener("click", function(e){
  if(!menuBtn.contains(e.target) && !dropdown.contains(e.target)){
    dropdown.classList.remove("show");
  }
});

// 2. Search Box
const searchInput = document.getElementById('search');
const tableBody = document.querySelector('tbody');

searchInput.addEventListener('keyup', function(){
    const filter = searchInput.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');
    rows.forEach(row => {
        const text = row.cells[0].textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
});

// 3. Recipes data
const recipes = [
  {name:"Grilled Fish with Lemon Rice", country:"Korea", ingredients:["fish","rice","lemon"], protein:25, carbs:40, fat:8, calories:350},
  {name:"Chicken Fried Rice", country:"China", ingredients:["chicken","rice","egg","onion"], protein:20, carbs:45, fat:10, calories:400},
  {name:"Creamy Chicken Pasta", country:"Italy", ingredients:["chicken","pasta","cream","cheese"], protein:22, carbs:50, fat:15, calories:500},
  {name:"Veggie Stir Fry", country:"China", ingredients:["broccoli","carrot","bellpepper","soy sauce"], protein:8, carbs:20, fat:5, calories:180},
  {name:"Lemon Butter Pasta", country:"Italy", ingredients:["pasta","lemon","butter"], protein:10, carbs:55, fat:12, calories:380},
  {name:"Oatmeal with Banana", country:"USA", ingredients:["oat","banana","milk"], protein:6, carbs:35, fat:3, calories:200},
  {name:"Tofu Salad", country:"Japan", ingredients:["tofu","lettuce","carrot","cucumber"], protein:15, carbs:10, fat:5, calories:180},
  {name:"Chocolate Almond Dessert", country:"France", ingredients:["chocolate","almond","milk","honey"], protein:8, carbs:40, fat:18, calories:320},
  {name:"Egg Fried Rice", country:"China", ingredients:["egg","rice","onion","soy sauce"], protein:12, carbs:45, fat:8, calories:370},
  {name:"Avocado Toast", country:"USA", ingredients:["avocado","bread","oliveoil"], protein:6, carbs:30, fat:12, calories:250}
];

// 4. Submit form
const form = document.getElementById('food-form');
const resultDiv = document.getElementById('result');
const nutritionDiv = document.getElementById('nutrition');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
                          .map(chk => chk.value);
    let matched = recipes.filter(r => r.ingredients.every(i => selected.includes(i)));
    if(matched.length === 0){
        resultDiv.innerHTML = "No matching recipe found.";
        nutritionDiv.innerHTML = "";
    } else {
        let recipe = matched[0];
        resultDiv.innerHTML = `<strong>Recipe:</strong> ${recipe.name} (<em>${recipe.country}</em>)`;
        nutritionDiv.innerHTML = `
          <table>
            <tr><th>Protein (g)</th><th>Carbs (g)</th><th>Fat (g)</th><th>Calories</th></tr>
            <tr>
              <td>${recipe.protein}</td>
              <td>${recipe.carbs}</td>
              <td>${recipe.fat}</td>
              <td>${recipe.calories}</td>
            </tr>
          </table>
        `;
    }
});
