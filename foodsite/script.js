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

// 3. Recipes data (30 نمونه واقعی)
const recipes = [
  {name:"Grilled Chicken Salad", country:"USA", ingredients:["chicken","lettuce","tomato","cucumber","oliveoil"], protein:30, carbs:10, fat:12, calories:250},
  {name:"Chicken Fried Rice", country:"China", ingredients:["chicken","rice","egg","onion","soy sauce"], protein:20, carbs:45, fat:10, calories:400},
  {name:"Sushi Rolls", country:"Japan", ingredients:["rice","seaweed","fish","cucumber"], protein:15, carbs:50, fat:5, calories:300},
  {name:"Pasta Carbonara", country:"Italy", ingredients:["pasta","egg","cheese","bacon","cream"], protein:25, carbs:55, fat:20, calories:550},
  {name:"Beef Stir Fry", country:"China", ingredients:["beef","broccoli","carrot","soy sauce","garlic"], protein:28, carbs:15, fat:12, calories:350},
  {name:"Caprese Salad", country:"Italy", ingredients:["tomato","cheese","basil","oliveoil"], protein:10, carbs:5, fat:12, calories:180},
  {name:"Veggie Omelette", country:"France", ingredients:["egg","onion","bellpepper","mushroom"], protein:15, carbs:5, fat:10, calories:200},
  {name:"Lentil Soup", country:"Middle East", ingredients:["lentils","onion","carrot","celery","tomato"], protein:12, carbs:20, fat:5, calories:180},
  {name:"Falafel Wrap", country:"Middle East", ingredients:["chickpeas","lettuce","tomato","tortilla","yogurt"], protein:14, carbs:40, fat:10, calories:300},
  {name:"Beef Tacos", country:"Mexico", ingredients:["beef","tortilla","tomato","lettuce","cheese"], protein:22, carbs:30, fat:15, calories:400},
  {name:"Paella", country:"Spain", ingredients:["rice","chicken","seafood","pepper","tomato"], protein:25, carbs:60, fat:12, calories:500},
  {name:"Kimchi Fried Rice", country:"Korea", ingredients:["rice","kimchi","egg","onion","carrot"], protein:15, carbs:50, fat:8, calories:350},
  {name:"Bibimbap", country:"Korea", ingredients:["rice","beef","spinach","carrot","egg"], protein:20, carbs:55, fat:10, calories:450},
  {name:"Tom Yum Soup", country:"Thailand", ingredients:["shrimp","mushroom","lemon","chili","lemongrass"], protein:18, carbs:8, fat:5, calories:120},
  {name:"Pad Thai", country:"Thailand", ingredients:["rice","egg","shrimp","peanut","bean sprouts"], protein:20, carbs:55, fat:12, calories:400},
  {name:"Shakshuka", country:"Middle East", ingredients:["egg","tomato","onion","bellpepper","garlic"], protein:12, carbs:10, fat:10, calories:180},
  {name:"Bulgur Pilaf", country:"Turkey", ingredients:["bulgur","tomato","onion","butter"], protein:8, carbs:40, fat:8, calories:220},
  {name:"Moussaka", country:"Greece", ingredients:["eggplant","beef","potato","tomato","cheese"], protein:22, carbs:30, fat:18, calories:450},
  {name:"Ratatouille", country:"France", ingredients:["eggplant","zucchini","tomato","bellpepper","onion"], protein:5, carbs:15, fat:5, calories:150},
  {name:"Couscous with Vegetables", country:"Morocco", ingredients:["couscous","carrot","zucchini","chickpeas","tomato"], protein:10, carbs:50, fat:8, calories:300},
  {name:"Avocado Toast", country:"USA", ingredients:["bread","avocado","oliveoil"], protein:6, carbs:30, fat:12, calories:250},
  {name:"Egg Fried Rice", country:"China", ingredients:["rice","egg","onion","soy sauce"], protein:12, carbs:45, fat:8, calories:370},
  {name:"Tofu Stir Fry", country:"Japan", ingredients:["tofu","broccoli","carrot","soy sauce","garlic"], protein:18, carbs:15, fat:8, calories:220},
  {name:"Chocolate Cake", country:"France", ingredients:["flour","egg","butter","sugar","chocolate"], protein:6, carbs:60, fat:20, calories:400},
  {name:"Banana Oatmeal", country:"USA", ingredients:["banana","oat","milk","honey"], protein:6, carbs:35, fat:3, calories:200},
  {name:"Caesar Salad", country:"USA", ingredients:["lettuce","chicken","cheese","bread","oliveoil"], protein:20, carbs:10, fat:15, calories:250},
  {name:"Pancakes", country:"USA", ingredients:["flour","egg","milk","butter","honey"], protein:8, carbs:50, fat:12, calories:300},
  {name:"Greek Salad", country:"Greece", ingredients:["tomato","cucumber","cheese","oliveoil","onion"], protein:8, carbs:10, fat:12, calories:180},
  {name:"Tomato Soup", country:"France", ingredients:["tomato","onion","garlic","cream","oliveoil"], protein:5, carbs:15, fat:8, calories:150},
  {name:"Spaghetti Bolognese", country:"Italy", ingredients:["pasta","beef","tomato","onion","carrot"], protein:25, carbs:60, fat:12, calories:500},
  {name:"Vegetable Curry", country:"India", ingredients:["potato","carrot","peas","tomato","onion"], protein:8, carbs:35, fat:10, calories:250}
];

// 4. Submit form: حداقل 50% مواد لازم در انتخاب کاربر
const form = document.getElementById('food-form');
const resultDiv = document.getElementById('result');
const nutritionDiv = document.getElementById('nutrition');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
                          .map(chk => chk.value);
    
    let matched = recipes.filter(r => {
        const common = r.ingredients.filter(i => selected.includes(i));
        return common.length >= Math.ceil(r.ingredients.length / 2);
    });
    
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
