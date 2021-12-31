const recipes = [
  {id: 'chicken-and-rice-casserole', name: 'Chicken and Rice Casserole'},
  {id: 'quick-chicken-piccata', name: 'Quick Chicken Piccata'},
];
const recipesList = document.getElementById('recipesList');

for (let i = 0; i < recipes.length; i += 1) {
  recipesList.innerHTML += `<li><a href='./recipes/${recipes[i].id}.html'>${recipes[i].name}</a></li>`;
}
console.log(recipes);
