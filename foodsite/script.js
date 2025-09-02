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

// لیست 50 غذا
const recipes = [
  {name:"Grilled Chicken Salad", country:"USA", ingredients:["chicken","lettuce","tomato","cucumber","oliveoil"], protein:30, carbs:10, fat:12, calories:250, description:"A healthy salad with grilled chicken and fresh vegetables.", image:"https://images.unsplash.com/photo-1604908177528-8d1091d2e8d5"},
  {name:"Chicken Fried Rice", country:"China", ingredients:["chicken","rice","egg","onion"], protein:20, carbs:45, fat:10, calories:400, description:"Classic Chinese fried rice with chicken and vegetables.", image:"https://images.unsplash.com/photo-1603078063228-1f9d8c63c2a2"},
  {name:"Sushi Rolls", country:"Japan", ingredients:["rice","fish","cucumber"], protein:15, carbs:50, fat:5, calories:300, description:"Delicious sushi rolls with fresh fish and rice.", image:"https://images.unsplash.com/photo-1553621042-f6e147245754"},
  {name:"Pasta Carbonara", country:"Italy", ingredients:["pasta","egg","cheese","bacon"], protein:25, carbs:55, fat:20, calories:550, description:"Creamy Italian pasta with eggs, cheese, and bacon.", image:"https://images.unsplash.com/photo-1600718379182-1e49f8170e68"},
  {name:"Beef Stir Fry", country:"China", ingredients:["beef","broccoli","carrot","onion"], protein:28, carbs:15, fat:12, calories:350, description:"Quick beef stir fry with fresh vegetables.", image:"https://images.unsplash.com/photo-1603046891740-d0c5e8497d5f"},
  {name:"Caprese Salad", country:"Italy", ingredients:["tomato","cheese","basil","oliveoil"], protein:10, carbs:5, fat:12, calories:180, description:"Fresh Italian salad with tomato, mozzarella, and basil.", image:"https://images.unsplash.com/photo-1604908177412-2c62a1d7b091"},
  {name:"Veggie Omelette", country:"France", ingredients:["egg","onion","bellpepper","cheese"], protein:15, carbs:5, fat:10, calories:200, description:"Classic French omelette with vegetables and cheese.", image:"https://images.unsplash.com/photo-1617196030768-0b4e2c6d9e4c"},
  {name:"Lemon Fish", country:"Mediterranean", ingredients:["fish","lemon","oliveoil"], protein:20, carbs:0, fat:8, calories:180, description:"Light Mediterranean fish with lemon and olive oil.", image:"https://images.unsplash.com/photo-1600727967508-5ed4b3d4469b"},
  {name:"Beef Pasta", country:"Italy", ingredients:["beef","pasta","tomato","cheese"], protein:25, carbs:50, fat:15, calories:450, description:"Italian-style pasta with beef and tomato sauce.", image:"https://images.unsplash.com/photo-1600628422921-fcc61eb6c8d1"},
  {name:"Cheese Omelette", country:"France", ingredients:["egg","cheese","onion"], protein:12, carbs:2, fat:10, calories:150, description:"Simple and delicious cheese omelette.", image:"https://images.unsplash.com/photo-1603038985265-6c96750478f1"},
  // 40 غذا دیگر به همین شکل اضافه کن با عکس و توضیح و مواد
];

// دکمه Get Recipe
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', function(){
    const selected = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
                          .map(chk => chk.value.toLowerCase().replace(/\s/g,''));

    let matched = recipes.filter(r => {
        const common = r.ingredients.filter(i => selected.includes(i.toLowerCase().replace(/\s/g,'')));
        return common.length >= Math.ceil(r.ingredients.length / 2); // حداقل 50٪ مواد
    });

    if(matched.length === 0){
        alert("No matching recipe found.");
    } else {
        const recipe = matched[0];
        localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
        window.location.href = 'recipe.html';
    }
});
