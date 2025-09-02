// منوی کشویی
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

// جستجو در مواد غذایی
const searchInput = document.getElementById('ingredient-search');
const ingredientsList = document.getElementById('ingredients-list');
const ingredientItems = Array.from(ingredientsList.getElementsByTagName('label'));

searchInput.addEventListener('input', function(){
    const query = this.value.toLowerCase();
    ingredientItems.forEach(label => {
        const text = label.textContent.toLowerCase();
        label.style.display = text.includes(query) ? 'block' : 'none';
    });
});

// لیست 50+ غذا بدون عکس
const recipes = [
  {name:"Grilled Chicken Salad", origin:"USA", ingredients:["chicken","lettuce","tomato","cucumber","olive oil"], protein:30, carbs:10, fat:12, calories:250, cookTime:"20 min", description:"A healthy salad with grilled chicken and fresh vegetables."},
  {name:"Chicken Fried Rice", origin:"China", ingredients:["chicken","rice","egg","onion"], protein:20, carbs:45, fat:10, calories:400, cookTime:"30 min", description:"Classic Chinese fried rice with chicken and vegetables."},
  {name:"Sushi Rolls", origin:"Japan", ingredients:["rice","fish","cucumber"], protein:15, carbs:50, fat:5, calories:300, cookTime:"45 min", description:"Delicious sushi rolls with fresh fish and rice."},
  {name:"Pasta Carbonara", origin:"Italy", ingredients:["pasta","egg","cheese","bacon"], protein:25, carbs:55, fat:20, calories:550, cookTime:"25 min", description:"Creamy Italian pasta with eggs, cheese, and bacon."},
  {name:"Beef Stir Fry", origin:"China", ingredients:["beef","broccoli","carrot","onion"], protein:28, carbs:15, fat:12, calories:350, cookTime:"20 min", description:"Quick beef stir fry with fresh vegetables."},
  {name:"Caprese Salad", origin:"Italy", ingredients:["tomato","cheese","basil","olive oil"], protein:10, carbs:5, fat:12, calories:180, cookTime:"10 min", description:"Fresh Italian salad with tomato, mozzarella, and basil."},
  {name:"Veggie Omelette", origin:"France", ingredients:["egg","onion","bell pepper","cheese"], protein:15, carbs:5, fat:10, calories:200, cookTime:"15 min", description:"Classic French omelette with vegetables and cheese."},
  {name:"Lemon Fish", origin:"Mediterranean", ingredients:["fish","lemon","olive oil"], protein:20, carbs:0, fat:8, calories:180, cookTime:"25 min", description:"Light Mediterranean fish with lemon and olive oil."},
  {name:"Beef Pasta", origin:"Italy", ingredients:["beef","pasta","tomato","cheese"], protein:25, carbs:50, fat:15, calories:450, cookTime:"30 min", description:"Italian-style pasta with beef and tomato sauce."},
  {name:"Cheese Omelette", origin:"France", ingredients:["egg","cheese","onion"], protein:12, carbs:2, fat:10, calories:150, cookTime:"10 min", description:"Simple and delicious cheese omelette."},
  // ادامه دهید تا 50+ غذا با همین ساختار
];

// دکمه Get Recipe
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
                          .map(chk => chk.value.toLowerCase().replace(/\s/g,''));

    let matched = recipes.filter(r => {
        const common = r.ingredients.filter(i => selected.includes(i.toLowerCase().replace(/\s/g,'')));
        return common.length >= Math.ceil(r.ingredients.length / 2);
    });

    if(matched.length === 0){
        alert("No matching recipe found.");
    } else {
        const recipe = matched[0];
        localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
        window.location.href = 'recipe.html';
    }
});
