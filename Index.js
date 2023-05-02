const express = require("express");
const app = express();
const port = 5000;
const chefData = require("../italiano_backend/data/chefs.json");
const recipeData = require("../italiano_backend/data/recipes.json");

app.get("/", (req, res) => {
  res.send(chefData);
});

app.get("/:id/recipes", (req, res) => {
  const id = parseInt(req.params.id);
  const allRecipes = recipeData;
  let filteredRecipes = [];
  allRecipes.recipes.map((recipe) => {
    if (recipe.chef_id === id) {
      filteredRecipes.push(recipe);
    }
  });
  if ( filteredRecipes.length > 0 ) {
    res.send(filteredRecipes);
  } else {
    res.send({"data": "no results"});
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
