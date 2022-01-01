const recipes = [];

// adds or removes the active class from links on state
const handleNavActiveClass = (recipeID) => {
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    // gets current nav link on loop
    const recipeNavLinks = document.getElementById(`recipe${recipe.id}`);
    if (recipe.id === recipeID) {
      recipeNavLinks.classList.add('active');
    } else {
      recipeNavLinks.classList.remove('active');
    }
  }
}

// populates recipe information based on recipeID
const populateRecipe = (recipeID) => {
  handleNavActiveClass(recipeID);

  // gets recipe object from recipeID
  const recipe = recipes.find(obj => obj.id === recipeID);

  // gets html elements
  const recipeNameContent = document.getElementById('recipeName');
  const recipeDescriptionContent = document.getElementById('recipeDescription');
  const recipeImgContent = document.getElementById('recipeImg');
  const recipeInformationContent = document.getElementById('recipeInformation');
  const recipeInformationCol1 = document.getElementById('infoCol1');
  const recipeInformationCol2 = document.getElementById('infoCol2');
  const recipeMainContent = document.getElementById('recipeMain');

  // updates html elements
  recipeNameContent.innerHTML = recipe.name;
  recipeDescriptionContent.innerHTML = recipe.description;
  recipeImgContent.src = recipe.image.src;
  recipeImgContent.alt = recipe.image.alt;
  recipeInformationCol1.innerHTML = '';
  recipeInformationCol2.innerHTML = '';

  const recipeInfoKeys = ['prep', 'cook', 'additional', 'total', 'servings'];
  for (let i = 0; i < recipeInfoKeys.length; i++) {
    const key = recipeInfoKeys[i];

    recipeInformationCol1.innerHTML += `<li>${key} :</li>`;
    if (key !== 'servings') {
      recipeInformationCol2.innerHTML += `<li>${recipe.information[key]} mins</li>`;
    } else {
      recipeInformationCol2.innerHTML += `<li>${recipe.information[key]}</li>`;
    }
  }

  recipeMainContent.innerHTML = recipe.ingredients[0];
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

    // adds recipes to navigation
    recipesNavContent.innerHTML += `<li><a href="#" onclick="populateRecipe('${recipe.id}')" id="recipe${recipe.id}">${recipe.name}</a></li>`;
  }
  
  // sets a random recipe on load
  const randomRecipe = Math.floor(Math.random() * recipes.length);
  populateRecipe(recipes[randomRecipe].id);  
});