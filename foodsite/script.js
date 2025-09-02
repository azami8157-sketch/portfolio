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

// لیست کامل 50+ غذا بدون عکس
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
  {name:"Tomato Soup", origin:"France", ingredients:["tomato","onion","garlic","cream"], protein:5, carbs:15, fat:8, calories:120, cookTime:"30 min", description:"Classic creamy tomato soup."},
  {name:"Falafel Wrap", origin:"Middle East", ingredients:["chickpeas","lettuce","tomato","tahini"], protein:12, carbs:35, fat:10, calories:300, cookTime:"25 min", description:"Delicious chickpea falafel wrapped in flatbread."},
  {name:"Greek Salad", origin:"Greece", ingredients:["tomato","cucumber","cheese","olive oil","olive"], protein:8, carbs:5, fat:14, calories:200, cookTime:"10 min", description:"Fresh Greek salad with feta cheese and olives."},
  {name:"Shakshuka", origin:"Middle East", ingredients:["egg","tomato","onion","bell pepper"], protein:13, carbs:10, fat:9, calories:220, cookTime:"25 min", description:"Eggs poached in spicy tomato sauce."},
  {name:"Beef Burger", origin:"USA", ingredients:["beef","bun","lettuce","tomato","cheese"], protein:30, carbs:40, fat:20, calories:600, cookTime:"20 min", description:"Classic American beef burger with cheese."},
  {name:"Chicken Tikka", origin:"India", ingredients:["chicken","yogurt","spices"], protein:28, carbs:5, fat:12, calories:300, cookTime:"40 min", description:"Spicy grilled chicken marinated in yogurt and spices."},
  {name:"Pad Thai", origin:"Thailand", ingredients:["rice noodles","shrimp","egg","peanuts","bean sprouts"], protein:20, carbs:55, fat:15, calories:500, cookTime:"30 min", description:"Stir-fried rice noodles with shrimp and peanuts."},
  {name:"Tom Yum Soup", origin:"Thailand", ingredients:["shrimp","mushroom","lemongrass","lime"], protein:15, carbs:8, fat:7, calories:180, cookTime:"25 min", description:"Hot and sour Thai soup with shrimp."},
  {name:"Vegetable Curry", origin:"India", ingredients:["potato","carrot","peas","coconut milk","spices"], protein:8, carbs:20, fat:12, calories:220, cookTime:"35 min", description:"Creamy Indian vegetable curry."},
  {name:"Miso Soup", origin:"Japan", ingredients:["tofu","seaweed","miso paste","green onion"], protein:6, carbs:4, fat:2, calories:50, cookTime:"15 min", description:"Traditional Japanese miso soup with tofu and seaweed."},
  {name:"Ratatouille", origin:"France", ingredients:["eggplant","zucchini","tomato","bell pepper"], protein:4, carbs:10, fat:5, calories:120, cookTime:"40 min", description:"French vegetable stew from Provence."},
  {name:"Caesar Salad", origin:"USA", ingredients:["lettuce","croutons","parmesan","chicken"], protein:20, carbs:10, fat:15, calories:250, cookTime:"15 min", description:"Classic Caesar salad with chicken and croutons."},
  {name:"Tacos", origin:"Mexico", ingredients:["beef","tortilla","lettuce","cheese","tomato"], protein:25, carbs:30, fat:18, calories:450, cookTime:"20 min", description:"Mexican tacos with beef and fresh vegetables."},
  {name:"Guacamole", origin:"Mexico", ingredients:["avocado","onion","tomato","lime"], protein:3, carbs:8, fat:15, calories:180, cookTime:"10 min", description:"Classic Mexican avocado dip."},
  {name:"Spaghetti Bolognese", origin:"Italy", ingredients:["pasta","beef","tomato","onion","carrot"], protein:25, carbs:55, fat:15, calories:500, cookTime:"35 min", description:"Italian pasta with rich meat sauce."},
  {name:"Gazpacho", origin:"Spain", ingredients:["tomato","cucumber","bell pepper","bread"], protein:4, carbs:10, fat:5, calories:150, cookTime:"15 min", description:"Cold Spanish tomato soup."},
  {name:"Paella", origin:"Spain", ingredients:["rice","shrimp","chicken","peas","saffron"], protein:28, carbs:60, fat:12, calories:600, cookTime:"50 min", description:"Spanish rice dish with seafood and chicken."},
  {name:"Pancakes", origin:"USA", ingredients:["flour","milk","egg","butter"], protein:8, carbs:40, fat:10, calories:250, cookTime:"20 min", description:"Fluffy American pancakes."},
  {name:"Crepes", origin:"France", ingredients:["flour","milk","egg","butter"], protein:6, carbs:30, fat:8, calories:180, cookTime:"15 min", description:"Thin French pancakes with sweet or savory filling."},
  {name:"Chocolate Mousse", origin:"France", ingredients:["chocolate","egg","cream","sugar"], protein:5, carbs:20, fat:15, calories:250, cookTime:"25 min", description:"Rich and creamy French chocolate dessert."},
  {name:"Falafel", origin:"Middle East", ingredients:["chickpeas","onion","garlic","spices"], protein:12, carbs:20, fat:10, calories:250, cookTime:"30 min", description:"Crispy fried chickpea balls, popular in the Middle East."},
  {name:"Hummus", origin:"Middle East", ingredients:["chickpeas","tahini","lemon","garlic"], protein:8, carbs:12, fat:10, calories:180, cookTime:"10 min", description:"Smooth chickpea dip with tahini and lemon."},
  {name:"Bulgur Pilaf", origin:"Turkey", ingredients:["bulgur","tomato","onion","butter"], protein:6, carbs:35, fat:8, calories:200, cookTime:"25 min", description:"Traditional Turkish bulgur rice pilaf."},
  {name:"Kebab", origin:"Turkey", ingredients:["beef","onion","spices"], protein:25, carbs:5, fat:15, calories:300, cookTime:"30 min", description:"Grilled meat skewers, popular in Turkey."},
  {name:"Shawarma", origin:"Middle East", ingredients:["chicken","tortilla","lettuce","tomato"], protein:20, carbs:25, fat:15, calories:350, cookTime:"25 min", description:"Middle Eastern wrap with spiced meat."},
  {name:"Fried Eggplant", origin:"Mediterranean", ingredients:["eggplant","olive oil","salt"], protein:2, carbs:10, fat:12, calories:150, cookTime:"20 min", description:"Crispy fried eggplant slices."},
  {name:"Tabbouleh", origin:"Middle East", ingredients:["parsley","tomato","bulgur","lemon"], protein:5, carbs:10, fat:8, calories:120, cookTime:"15 min", description:"Fresh Middle Eastern parsley salad with bulgur."},
  {name:"Ramen", origin:"Japan", ingredients:["noodles","egg","pork","broth"], protein:20, carbs:50, fat:15, calories:550, cookTime:"40 min", description:"Japanese noodle soup with rich broth."},
  {name:"Tempura", origin:"Japan", ingredients:["shrimp","vegetables","flour","egg"], protein:15, carbs:30, fat:12, calories:350, cookTime:"25 min", description:"Crispy Japanese fried shrimp and vegetables."},
  {name:"Couscous", origin:"Morocco", ingredients:["semolina","vegetables","chicken"], protein:20, carbs:50, fat:12, calories:450, cookTime:"40 min", description:"Traditional Moroccan dish with steamed semolina and vegetables."},
  {name:"Moroccan Tagine", origin:"Morocco", ingredients:["chicken","apricot","spices","onion"], protein:25, carbs:20, fat:15, calories:400, cookTime:"60 min", description:"Slow-cooked Moroccan stew with spices and fruit."},
  {name:"Goulash", origin:"Hungary", ingredients:["beef","onion","paprika","tomato"], protein:28, carbs:15, fat:12, calories:350, cookTime:"60 min", description:"Hungarian beef stew with paprika."},
  {name:"Pierogi", origin:"Poland", ingredients:["flour","potato","cheese","onion"], protein:12, carbs:40, fat:10, calories:300, cookTime:"35 min", description:"Polish dumplings filled with potato and cheese."},
  {name:"Borscht", origin:"Ukraine", ingredients:["beetroot","cabbage","potato","carrot"], protein:5, carbs:20, fat:5, calories:150, cookTime:"40 min", description:"Traditional Ukrainian beetroot soup."},
  {name:"Ceviche", origin:"Peru", ingredients:["fish","lime","onion","chili"], protein:20, carbs:2, fat:5, calories:120, cookTime:"20 min", description:"Fresh Peruvian fish dish marinated in lime."},
  {name:"Feijoada", origin:"Brazil", ingredients:["black beans","pork","rice"], protein:25, carbs:40, fat:20, calories:550, cookTime:"90 min", description:"Brazilian black bean stew with pork."},
  {name:"Moqueca", origin:"Brazil", ingredients:["fish","coconut milk","onion","pepper"], protein:22, carbs:8, fat:15, calories:300, cookTime:"45 min", description:"Brazilian fish stew with coconut milk."},
  {name:"Kimchi", origin:"Korea", ingredients:["cabbage","chili","garlic","salt"], protein:3, carbs:5, fat:2, calories:50, cookTime:"20 min", description:"Spicy fermented Korean cabbage."},
  {name:"Bibimbap", origin:"Korea", ingredients:["rice","beef","egg","vegetables"], protein:20, carbs:55, fat:15, calories:500, cookTime:"30 min", description:"Korean mixed rice with vegetables and beef."},
  {name:"Tteokbokki", origin:"Korea", ingredients:["rice cake","fish cake","chili paste"], protein:8, carbs:45, fat:8, calories:300, cookTime:"25 min", description:"Spicy Korean rice cake dish."},
  {name:"Pho", origin:"Vietnam", ingredients:["rice noodles","beef","onion","herbs"], protein:18, carbs:50, fat:10, calories:400, cookTime:"45 min", description:"Vietnamese noodle soup with beef."},
  {name:"Banh Mi", origin:"Vietnam", ingredients:["bread","pork","vegetables","herbs"], protein:18, carbs:35, fat:12, calories:400, cookTime:"20 min", description:"Vietnamese sandwich with pork and pickled vegetables."},
  {name:"Pad Krapow", origin:"Thailand", ingredients:["chicken","basil","chili","rice"], protein:20, carbs:45, fat:12, calories:450, cookTime:"25 min", description:"Thai stir-fry with chicken and basil."},
  {name:"Green Curry", origin:"Thailand", ingredients:["chicken","coconut milk","bamboo shoots","basil"], protein:22, carbs:10, fat:18, calories:350, cookTime:"30 min", description:"Spicy Thai green curry with chicken."},
  {name:"Butter Chicken", origin:"India", ingredients:["chicken","tomato","cream","spices"], protein:25, carbs:10, fat:20, calories:400, cookTime:"40 min", description:"Creamy Indian chicken curry."},
  {name:"Samosa", origin:"India", ingredients:["potato","peas","flour","spices"], protein:5, carbs:30, fat:12, calories:200, cookTime:"25 min", description:"Fried Indian pastry filled with spiced potato and peas."},
  {name:"Dumplings", origin:"China", ingredients:["flour","pork","cabbage","ginger"], protein:12, carbs:25, fat:10, calories:250, cookTime:"30 min", description:"Chinese dumplings with pork and cabbage."},
  {name:"Mapo Tofu", origin:"China", ingredients:["tofu","pork","chili","garlic"], protein:15, carbs:10, fat:12, calories:200, cookTime:"20 min", description:"Spicy Sichuan tofu with minced pork."},
  {name:"Congee", origin:"China", ingredients:["rice","chicken","ginger","spring onion"], protein:10, carbs:30, fat:5, calories:200, cookTime:"45 min", description:"Chinese rice porridge often eaten for breakfast."},
  {name:"Egg Fried Noodles", origin:"China", ingredients:["noodles","egg","onion","carrot"], protein:12, carbs:40, fat:10, calories:350, cookTime:"20 min", description:"Quick stir-fried noodles with eggs and vegetables."},
  {name:"Shawarma Plate", origin:"Middle East", ingredients:["chicken","rice","salad","tahini"], protein:25, carbs:40, fat:15, calories:500, cookTime:"30 min", description:"Middle Eastern spiced meat with rice and salad."},
  {name:"Chicken Korma", origin:"India", ingredients:["chicken","yogurt","cream","spices"], protein:28, carbs:8, fat:18, calories:400, cookTime:"45 min", description:"Mild Indian chicken curry with cream and yogurt."},
  {name:"Vegetable Stir Fry", origin:"China", ingredients:["broccoli","carrot","bell pepper","soy sauce"], protein:8, carbs:12, fat:8, calories:180, cookTime:"15 min", description:"Quick Chinese stir fry with mixed vegetables."},
  {name:"Chicken Biryani", origin:"India", ingredients:["chicken","rice","spices","yogurt"], protein:28, carbs:55, fat:15, calories:550, cookTime:"60 min", description:"Spiced Indian rice dish with chicken."},
  {name:"Lasagna", origin:"Italy", ingredients:["pasta","beef","cheese","tomato"], protein:25, carbs:50, fat:20, calories:550, cookTime:"60 min", description:"Classic Italian baked pasta with meat and cheese."},
  {name:"Minestrone", origin:"Italy", ingredients:["beans","pasta","tomato","carrot","celery"], protein:10, carbs:25, fat:5, calories:200, cookTime:"40 min", description:"Classic Italian vegetable soup with pasta and beans."},
{name:"Rogan Josh", origin:"India", ingredients:["lamb","yogurt","spices","onion"], protein:28, carbs:5, fat:20, calories:400, cookTime:"60 min", description:"Indian lamb curry with aromatic spices."},
{name:"Shepherd's Pie", origin:"UK", ingredients:["beef","potato","carrot","peas"], protein:25, carbs:40, fat:15, calories:500, cookTime:"50 min", description:"Baked meat pie with mashed potato topping."},
{name:"Fish and Chips", origin:"UK", ingredients:["fish","potato","oil"], protein:20, carbs:50, fat:20, calories:550, cookTime:"30 min", description:"Classic British battered fish with fried potatoes."},
{name:"Cottage Pie", origin:"UK", ingredients:["beef","potato","onion","carrot"], protein:25, carbs:40, fat:15, calories:500, cookTime:"50 min", description:"Ground beef baked with mashed potatoes."},
{name:"Okonomiyaki", origin:"Japan", ingredients:["cabbage","egg","flour","pork"], protein:15, carbs:30, fat:10, calories:350, cookTime:"30 min", description:"Japanese savory pancake with cabbage and pork."},
{name:"Tempura Udon", origin:"Japan", ingredients:["udon noodles","shrimp","vegetables","broth"], protein:18, carbs:50, fat:12, calories:450, cookTime:"30 min", description:"Japanese noodle soup with tempura."},
{name:"Tom Kha Gai", origin:"Thailand", ingredients:["chicken","coconut milk","galangal","lemongrass"], protein:20, carbs:10, fat:15, calories:300, cookTime:"25 min", description:"Thai coconut chicken soup."},
{name:"Green Papaya Salad", origin:"Thailand", ingredients:["papaya","chili","lime","peanuts"], protein:5, carbs:15, fat:8, calories:120, cookTime:"15 min", description:"Spicy Thai salad with shredded green papaya."},
{name:"Pad See Ew", origin:"Thailand", ingredients:["rice noodles","chicken","broccoli","soy sauce"], protein:20, carbs:45, fat:12, calories:450, cookTime:"25 min", description:"Thai stir-fried wide noodles with chicken and soy sauce."},
{name:"Tandoori Chicken", origin:"India", ingredients:["chicken","yogurt","spices"], protein:28, carbs:5, fat:12, calories:300, cookTime:"45 min", description:"Indian grilled chicken marinated in yogurt and spices."},
{name:"Masala Dosa", origin:"India", ingredients:["rice","lentils","potato","spices"], protein:10, carbs:50, fat:10, calories:300, cookTime:"40 min", description:"Crispy South Indian crepe filled with spiced potato."},
{name:"Vindaloo", origin:"India", ingredients:["pork","potato","spices","vinegar"], protein:25, carbs:15, fat:18, calories:400, cookTime:"50 min", description:"Spicy Indian pork curry with potatoes."},
{name:"Chili Con Carne", origin:"USA", ingredients:["beef","beans","tomato","onion","chili"], protein:28, carbs:35, fat:15, calories:450, cookTime:"40 min", description:"Spicy beef chili with beans."},
{name:"Jambalaya", origin:"USA", ingredients:["rice","chicken","sausage","shrimp","pepper"], protein:25, carbs:50, fat:18, calories:550, cookTime:"50 min", description:"Cajun rice dish with meat and seafood."},
{name:"Clam Chowder", origin:"USA", ingredients:["clams","potato","onion","cream"], protein:15, carbs:20, fat:12, calories:300, cookTime:"35 min", description:"Creamy American clam soup."},
{name:"Paella Valenciana", origin:"Spain", ingredients:["rice","chicken","rabbit","beans","saffron"], protein:28, carbs:60, fat:12, calories:600, cookTime:"60 min", description:"Traditional Spanish rice dish with meat and beans."},
{name:"Gazpacho Andaluz", origin:"Spain", ingredients:["tomato","cucumber","pepper","olive oil"], protein:4, carbs:10, fat:5, calories:120, cookTime:"15 min", description:"Cold tomato soup from Andalusia, Spain."},
{name:"Churros", origin:"Spain", ingredients:["flour","sugar","oil"], protein:5, carbs:35, fat:12, calories:200, cookTime:"20 min", description:"Spanish fried dough pastry coated with sugar."},
{name:"Couscous Royale", origin:"Morocco", ingredients:["couscous","chicken","lamb","vegetables"], protein:30, carbs:60, fat:15, calories:600, cookTime:"60 min", description:"Moroccan couscous with meats and vegetables."},
{name:"Harira", origin:"Morocco", ingredients:["lentils","chickpeas","tomato","spices"], protein:15, carbs:30, fat:10, calories:250, cookTime:"45 min", description:"Moroccan hearty soup with lentils and chickpeas."},
{name:"Tagine Lamb", origin:"Morocco", ingredients:["lamb","apricot","onion","spices"], protein:28, carbs:20, fat:18, calories:400, cookTime:"60 min", description:"Slow-cooked Moroccan lamb stew with spices and fruit."},
{name:"Baklava", origin:"Turkey", ingredients:["phyllo","nuts","sugar","butter"], protein:6, carbs:40, fat:20, calories:300, cookTime:"50 min", description:"Sweet layered pastry with nuts and syrup."},
{name:"Menemen", origin:"Turkey", ingredients:["egg","tomato","pepper","onion"], protein:12, carbs:5, fat:10, calories:180, cookTime:"15 min", description:"Turkish scrambled eggs with tomato and peppers."},
{name:"Kofta", origin:"Middle East", ingredients:["beef","onion","spices"], protein:25, carbs:5, fat:15, calories:300, cookTime:"30 min", description:"Grilled spiced meatballs popular in the Middle East."},
{name:"Dolma", origin:"Middle East", ingredients:["vine leaves","rice","onion","spices"], protein:8, carbs:25, fat:10, calories:200, cookTime:"45 min", description:"Stuffed grape leaves with rice and spices."},
{name:"Fattoush", origin:"Middle East", ingredients:["lettuce","tomato","cucumber","bread","lemon"], protein:5, carbs:15, fat:8, calories:150, cookTime:"10 min", description:"Fresh salad with toasted bread and lemon dressing."},
{name:"Moussaka", origin:"Greece", ingredients:["eggplant","beef","potato","cheese"], protein:20, carbs:35, fat:20, calories:450, cookTime:"50 min", description:"Greek baked dish with layers of eggplant, beef, and potato."}
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
