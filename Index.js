const express = require("express");
const app = express();
const port = 5000;
const chefData = require("../italiano_backend/data/chefs.json");
const recipeData = require("../italiano_backend/data/recipes.json");


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
