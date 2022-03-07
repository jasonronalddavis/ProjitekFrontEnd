class Ingredient  {


static all = []
static ingredientContainer = document.getElementById("ingredients-container")
static ingredientForm = document.getElementById('ingredient-form-container')
static showIngredient = document.getElementById("show-ingredient")
static editIngredientForm = document.getElementById('edit-ingredient-form')






constructor({id, name, description, image_url, price, url, category_ids }){
    this.id = id
    this.name = name
    this.description = description
    this.image_url = image_url
    this.price = price
    this.category_ids = category_ids
    this.url = url
    this.element = document.createElement('li')
    this.element.dataset.id = this.id
    this.element.id = `ingredient-${this.id}`
    this.element.addEventListener('click', this.appendDelete) 
    this.element.addEventListener('click', this.appendShow)
    this.element.addEventListener('click', this.appendEdit)

    Ingredient.all.push(this)
//debugger;


}




ingredientHTML(){
    const img = document.createElement('img')
    this.element.innerHTML += `
    <div>
    <img src=${this.image_url} id=i_image_url>
    <h1>${this.name}</h1>
    <button id=${this.id}class= btn-primary> ShowI</button>
    <button id=${this.id} class= btn-primary>IEdit</button>
    <button id=${this.id} >Delete</button>
    </div>
    `
    return this.element
}




   slapOnDom(){
    console.log()
    Ingredient.ingredientContainer.append(this.ingredientHTML())
    }



    static renderCategories(){    
        const categories = Category.all
        Ingredient.ingredientForm.innerHTML += `<h3> Select at Least one Category: </h3>`
        categories.forEach(function(i){   
       Ingredient.ingredientForm.innerHTML += ` <div id=ing-cat-content>
        <input type="checkbox" id=${i.id}  value=${i.id}>
          ${i.name}
          </div>
          `
        })    
    }



    
static renderForm(){
 Ingredient.ingredientForm.innerHTML += `
<form id="new-ingredient-form">
    Name: <input type="text" id="ingredient-name"><br>
    Url: <input type="text" id="url"><br>
    Description: <textarea id="ingredient-description"></textarea><br><br>
    Image_url: <input type="text" id="image_url"><br><br>
    Price: <input type="number" step="any" id="price"><br>
    <input type="submit" id="create-ingredient">
<form>
   ` 
   }



   static renderShow(){
    Ingredient.showIngredient.innerHTML += `
    <img src="assets/images/ibox.png" id="show-i-box">
      `
      }




      appendShow = () => { 
        document.querySelector('#show-ingredient').innerHTML = `<div id="sho-i-cont"></div>`
        const shoCont = document.querySelector('#sho-i-cont')
                if (event.target.innerText === 'ShowI'){    
                    shoCont.innerHTML = `
                    <h1 id='i-name-label'> Ingredient Name: </h1>
                    <h1 id='i-price-label'> Price: </h1>
                   <h1 id='show-price'> ${this.price} </h1>
                    <h1 id='show-ingredient-name'> ${this.name} </h1>
                    <h1 id='i-des-label'> Ingredient Description: </h1>
                    <p id='show-ingredient-description'> ${this.description} </p>
                    <img src="assets/images/ibox.png" id="show-i-box">
                    <h3 id='i-cat-label'> Ingredient Categories: </h3>
                    <h3 id='i-proj-label'> Ingredient Projects: </h3>
        
                    `
                    Ingredient.showIngredient.dataset.id = this.id
                 if (Ingredient.showIngredient.style.display === 'none'){
                     Ingredient.showIngredient.style.display = "block";
                  Project.showProject.style.display = "none";
                  Project.editProjectForm.style.display = 'none';

                     ingredientService.renderShow(this.id);     
                 }else{
                     Ingredient.showIngredient.style.display = 'none';
                 }    
            }
            shoCont.innerHTML += `<div id="sho-ing-cat"></div>`
            shoCont.innerHTML += `<div id="sho-ing-proj"></div>` 
            }
        



appendDelete = () => { 
    if (event.target.innerText === 'Delete'){
        Ingredient.deleteIngredient(this.id)
        const element = document.querySelector(`#${this.element.id}`)
        element.remove()
        ingredientService.backEndDelete(this .id)
    }
}




static deleteIngredient = (id) => {
    let ingredientId = parseInt(event.target.id);  
   let ingredient = Ingredient.all.find(x => x.id === ingredientId);
Ingredient.all.filter((ingredient) => id !== ingredient.id);


}




}



