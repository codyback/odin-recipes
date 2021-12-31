const recipes = [];

const populateRecipe = (recipeID) => {
  const recipe = recipes.find(obj => obj.id === recipeID);

  const recipeNameContent = document.getElementById('recipeName');
  const recipeDescriptionContent = document.getElementById('recipeDescription');
  const recipeImgContent = document.getElementById('recipeImg');

  recipeNameContent.innerHTML = recipe.name;
  recipeDescriptionContent.innerHTML = recipe.description;
  recipeImgContent.src = recipe.image.src;
  recipeImgContent.alt = recipe.image.alt;
}

// fetches the recipes json data 
fetch('./recipes.json').then(res => {
  return res.json();
}).then(data => {
  // body > nav > ul#recipesList
  const recipesNavContent = document.getElementById('recipesList');

  // loops through recipes
  for (let i = 0; i < data.recipes.length; i++) {
    const recipe = data.recipes[i];
    recipes.push(recipe);

    recipesNavContent.innerHTML += `<li><a href="#" onclick="populateRecipe('${recipe.id}')" id="recipe${recipe.id}">${recipe.name}</a></li>`;
  }
  
  const randomRecipe = Math.floor(Math.random() * recipes.length);

  populateRecipe(recipes[randomRecipe].id);  
});