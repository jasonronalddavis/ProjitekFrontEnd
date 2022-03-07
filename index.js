const express = require('express');
const app = express();
const port = 3001;
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  

//USING NODEMON.JS
  
  const base_url = "http://localhost:3000/api/v1"
  //NEED TO ACQUIRE CLASS MODULE INSIDE SRC DIR
  const ingredientService = new IngredientService(base_url)
  const categoryService = new CategoryService(base_url)
  const projectService = new ProjectService(base_url)
  const deleteBttn = document.querySelector("deleteProject")
  
  
  Ingredient.ingredientForm.addEventListener('submit', submitIngredient)
  Project.projectForm.addEventListener('submit', submitProject)
  Project.editProjectForm.addEventListener('submit', updateProject)
  Project.testForm.addEventListener('submit', submitTest)
  
  
  
  categoryService.getCategories()
  ingredientService.getIngredients()
  projectService.getProjects()
  
  
  
  
  
  function showProject(){
      event.preventDefault()
      projectService.showProject()
  }
  
  
  
  function submitIngredient(){
      ingredientService.createIngredient()
  }
  
  function submitProject(event){
      projectService.createProject()
  }
  
  function updateProject(event){
  projectService.backEndedit()
  }
  
  
  
  function submitTest(event){
  event.preventDefault()
  Project.submitTest()
  
  }
  
  
  
  
  
  function updateIngredient(event){
      ingredientService.backEndedit()
      }
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
       Project.scrollAble()
  })
  