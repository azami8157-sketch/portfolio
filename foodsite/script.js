// Dropdown menu
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

// Ingredients search
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

// Recipes data (نمونه 15 غذا)
const recipes = [
  {name:"Grilled Chicken Salad", country:"USA", ingredients:["chicken","lettuce","tomato","cucumber","oliveoil"], protein:30, carbs:10, fat:12, calories:250},
  {name:"Chicken Fried Rice", country:"China", ingredients:["chicken","rice","egg","onion"], protein:20, carbs:45, fat:10, calories:400},
  {name:"Sushi Rolls", country:"Japan", ingredients:["rice","fish","cucumber"], protein:15, carbs:50, fat:5, calories:300},
  {name:"Pasta Carbonara", country:"Italy", ingredients:["pasta","egg","cheese","bacon"], protein:25, carbs:55, fat:20, calories:550},
  {name:"Beef Stir Fry", country:"China", ingredients:["beef","broccoli","carrot","onion"], protein:28, carbs:15, fat:12, calories:350
