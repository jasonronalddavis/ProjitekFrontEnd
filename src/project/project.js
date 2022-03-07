


class Project 
{

    


static projectContainer = document.getElementById("projects-container")
static projectForm = document.getElementById('form-container')
static editProjectForm = document.getElementById('edit-project-form')
static projectBox = document.querySelector(`#p-box`);
static all = []
static background = document.querySelector(`#back-ground`);
static ingredientBox = document.querySelector(`#i-box`);
static ingredient_ids = []
static category_ids =  []
static showProject = document.getElementById("show-project")
static logo = document.getElementById("ptek")

static testForm = document.querySelector("#user-comments-form")




constructor({id, name, description, total_price, category_ids, ingredient_ids}){
this.id = id
this.name = name
this.description = description
this.total_price = total_price
this .category_ids = category_ids
this.ingredient_ids = ingredient_ids
this.element = document.createElement('li')
this.element.dataset.id = this.id
this.element.id = `project-${this.id}`
this.element.addEventListener('click', this.appendDelete)
this.element.addEventListener('click', this.appendEdit)
this.element.addEventListener('click', this.appendShow)
Project.all.push(this)


}



hideI(){
    const IselectA = document.querySelector('#ingredient-selectA');
    const IselectB = document.querySelector('#ingredient-selectB');
    const IselectC = document.querySelector('#ingredient-selectC');
    Project.IselectA.style.display = 'none';
    Project.IselectB.style.display = 'none';
    Project.IselectC.style.display = 'none';
}




showI(){
    const IselectA = document.querySelector('#ingredient-selectA');
    const IselectB = document.querySelector('#ingredient-selectB');
    const IselectC = document.querySelector('#ingredient-selectC');
    Project.IselectA.style.display = 'block';
    Project.IselectB.style.display = 'block';
    Project.IselectC.style.display = 'block';
}

//HTML RENDER

projectHTML(){
    
    this.element.innerHTML += `
    
    <div>
    <h1>${this.name}</h1>
    <button id=${this.id}class= btn-primary> Show</button>
    <button id=${this.id}>Delete</button>
    <button id=${this.id} class= btn-primary>Edit</button>
    </div>
    `
    return this.element

}






   slapOnDom(){
    console.log()
    Project.projectContainer.append(this.projectHTML())
    }
    









 static scrollAble(){
const scrollAmount = 0;

const {top} =   Project.projectBox.getBoundingClientRect();

const {backTop} =  Project.background.getBoundingClientRect();


if (top  > 100 ) {  
    Project.projectBox.src = "assets/images/pbox1.png";  
    Project.ingredientBox.src = "assets/images/ingredientBox1.png";
     Project.background.src = "assets/images/background3.png";
  } 
  if (top  > 200 ) {
    Project.projectBox.src = "assets/images/pbox2.png";
   Project.ingredientBox.src = "assets/images/ingredientBox2.png";
    }
    
     if (top  > 300  ) {
    Project.projectBox.src = "assets/images/pbox3.png"; 
 Project.ingredientBox.src = "assets/images/ingredientBox3.png";
  }
  
 if (top  > 400  ) {
    Project.projectBox.src = "assets/images/pbox4.png";
    Project.ingredientBox.src = "assets/images/ingredientBox4.png";
     Project.background.src = "assets/images/background1.png";
  }
 if (top  > 500 ){
    Project.projectBox.src = "assets/images/pbox5.png"; 
    Project.ingredientBox.src = "assets/images/ingredientBox4.png";
}
document.addEventListener ("scroll", Project.scrollAble);
document.addEventListener ("scroll", Project.scrollAble);
}




   static renderIngredients() {   
       const ingredients = Ingredient.all  
       Project.projectForm.innerHTML += `<h4> Select an Ingredient:  </h4>`
        Project.projectForm.innerHTML += `<select id="ingredient-selectA">`
        Project.projectForm.innerHTML += `<select id="ingredient-selectB">`
        Project.projectForm.innerHTML += `<select id="ingredient-selectC">`
        ingredients.forEach(function(i){   
        document.querySelector("#ingredient-selectA").innerHTML += `<option ${i.name} id=${i.name} value=${i.id}>
            ${i.name}
            </option>`
            document.querySelector("#ingredient-selectB").innerHTML += `<option ${i.name} id=${i.name} value=${i.id}>
            ${i.name}
            </option>`
            document.querySelector("#ingredient-selectC").innerHTML += `<option ${i.name} id=${i.name} value=${i.id}>
            ${i.name}
            </option>`        
        })
        }
    



        static renderCategories(){      
            const categories = Category.all
            Project.projectForm.innerHTML += `<h3> Select at Least one Category: </h3>`
            categories.forEach(function(i){   
           Project.projectForm.innerHTML += `<div id=cat-content>
            <input type="checkbox" id=${i.id} value=${i.id}>
              ${i.name}
              </div>
              ` 
            })    
        }
    

  
static renderForm(){
 Project.projectForm.innerHTML += `
<form id="new-project-form"><br>
    Name: <input type="text" id="project-name"><br><br>
    Description: <textarea id="project-description"></textarea><br><br>
    Tolal Estimated Cost: <input type="number" step="any" id="total_price" value=""><br>
    <input type="submit" id="create-project">
<form>
   ` 
}


 static renderEditForm(){

Project.editProjectForm.innerHTML += `
<h2 id="edit-project-title"> Edit Project </h2> 
    `
 Project.editProjectForm.innerHTML += `
<form id="edit-project-form"><br>
    Name: <input type="text" id="edit-project-name" ><br><br>
    Description: <textarea id="edit-project-description"></textarea><br><br>
    Tolal Estimated Cost: <input type="number" step="any" id="edit-total_price"><br>
    <input type="submit" id="create-edit">
<form>
   `
   }




static submitTest = ()=> {
    const body = document.querySelector('#user-comments-div')
    const input = document.querySelector(`#user-comments-input`)
    body.innerHTML += `
  <h1>  ${input.value} </h1>
 
    `
    debugger;
}






   static renderShow(){
     Project.showProject.innerHTML += `
     <img src="assets/images/Project_box.png" id="show-box">
       `
       }








//APPEND




appendEdit = () => { 

    if (event.target.innerText === 'Edit' ){
        
       const element = document.querySelector(`#${this.element.id}`)
       const epf = document.querySelector(`#edit-project-form`);
       document.getElementById('edit-project-name'). placeholder = `${this.name}`
       document.getElementById('edit-project-description'). placeholder = `${this.description}`
        document.getElementById('edit-total_price'). placeholder = `${this.total_price}`
      let input = document.querySelector(`edit-project-form`)
      input += `<label>id=${this.id}</label>`
      Project.editProjectForm.dataset.id = this.id
    }   
    if (Project.editProjectForm.style.display === 'none'){
     
        Project.editProjectForm.style.display = "block";
    }else{
        Project.editProjectForm.style.display = 'none';
    } 
    } 
 



    appendShow = () => { 
        
document.querySelector('#show-project').innerHTML = `<div id="sho-cont"></div>`
const shoCont = document.querySelector('#sho-cont')
        if (event.target.innerText === 'Show' ){ 
            projectService.renderShow(this.id);  
            Project.logo.style.display = "block";
            shoCont.innerHTML = `
            <h1 id='p-name-label'> Project Name: </h1>
            <h1 id='p-total-label'> Total Estimated Cost: </h1>
           <h1 id='show-total-price'> ${this.total_price} </h1>
            <h1 id='show-project-name'> ${this.name} </h1>
            <h1 id='p-des-label'> Project Description: </h1>
            <p id='show-project-description'> ${this.description} </p>
            <img src="assets/images/Project_box.png" id="show-box">
            <h3 id='p-cat-label'> Project Categories: </h3>
            <h3 id='p-ing-label'> Project Ingredients: </h3>
            `
       
            Project.showProject.dataset.id = this.id
            if (Project.showProject.style.display === 'none'){
                Project.showProject.style.display = "block";
                projectService.renderShow(this.id); 
                Project.editProjectForm.style.display = 'none';
                Ingredient.showIngredient.style.display = "none";

            }else{
                Project.showProject.style.display = 'none';
            } 
          
       }
       shoCont.innerHTML += `<div id="sho-proj-cat"></div>`
       shoCont.innerHTML += `<div id="sho-proj-ing"></div>`
       }

appendDelete = () => { 
    if (event.target.innerText === 'Delete'){
       const element = document.querySelector(`#${this.element.id}`)
        element.remove()
        projectService.backEndDelete(this.id)
    }
}



}





