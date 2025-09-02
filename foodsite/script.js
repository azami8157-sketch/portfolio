// Dropdown menu
document.getElementById("menu-btn").addEventListener("click", function(){
  document.getElementById("dropdown").classList.toggle("show");
});

// Search function
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

// Recipes data
const recipes = [
  {name:"Grilled Fish with Lemon Rice", country:"Korea", ingredients:["fish","rice","lemon"], protein:25, carbs:40, fat:8, calories:350},
  {name:"Chicken Fried Rice", country:"China", ingredients:["chicken","rice","egg","onion"], protein:20, carbs:45, fat:10, calories:400},
  {name:"Creamy Chicken Pasta", country:"Italy", ingredients:["chicken","pasta","cream","cheese"], protein:22, carbs:50, fat:15, calories:500},
  {name:"Lemon Butter Pasta", country:"Italy", ingredients:["pasta","lemon","butter"], protein:10, carbs:55, fat:12, calories:380},
  {name:"Veggie Stir Fry", country:"China", ingredients:["broccoli","carrot","bellpepper","soy sauce"], protein:
