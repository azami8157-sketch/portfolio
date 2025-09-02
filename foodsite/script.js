const recipes = [
    {name:"Chicken Fried Rice", origin:"China", ingredients:["chicken","rice","egg","onion","peas"], protein:25, carbs:45, fat:12, calories:450, cookTime:"30 min", description:"Classic Chinese fried rice with chicken and vegetables."},
    {name:"Spaghetti Bolognese", origin:"Italy", ingredients:["beef","tomato","onion","carrot","pasta"], protein:28, carbs:50, fat:15, calories:550, cookTime:"45 min", description:"Traditional Italian pasta with rich meat sauce."},
    {name:"Omelette", origin:"France", ingredients:["egg","cheese","butter"], protein:12, carbs:2, fat:10, calories:180, cookTime:"10 min", description:"Classic French egg omelette."},
    {name:"Caesar Salad", origin:"USA", ingredients:["lettuce","chicken","cheese","bread"], protein:15, carbs:10, fat:12, calories:220, cookTime:"15 min", description:"Fresh salad with chicken, cheese and croutons."},
    // ... بقیه ۵۰+ غذا مثل نسخه قبل اضافه شود
];

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

// Menu dropdown
const menuBtn = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');
menuBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
});

// Search ingredients
const searchInput = document.getElementById('ingredient-search');
const ingredientsList = document.get
