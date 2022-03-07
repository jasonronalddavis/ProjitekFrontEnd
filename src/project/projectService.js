class ProjectService

                        {



 
constructor(endpoint){
this.endpoint = endpoint
        }
// 1: Read/Index action
getProjects(){

fetch(`${this.endpoint}/projects`)
.then(resp => resp.json() ) 
.then(projects => {
    for (const project of projects ){
        const p = new Project(project)
        p.slapOnDom()
    }
    Project.renderCategories()
Ingredient.renderCategories()
Project.renderShow()
Project.renderForm()
Project.renderEditForm()
Ingredient.renderForm()  
})
}



 createProject(){
    const category_Ids = []
    const values = document.querySelectorAll("input[type=checkbox]");
    values.forEach(chbox => {
        if (chbox.checked) {
          category_Ids.push(chbox.value)
          Project.pushIngredient
        }
      })
    const ingredient_Ids = []
    const ingr = document.querySelectorAll('option:checked');
     const ingredient1 = ingr[0].value
     const ingredient2 = ingr[1].value
     const ingredient3 = ingr[2].value

     ingredient_Ids.push(ingredient1)
     ingredient_Ids.push(ingredient2)
     ingredient_Ids.push(ingredient3)
    

     const project = {
         name: document.getElementById('project-name').value,
         description: document.getElementById('project-description').value,
         total_price: document.getElementById('total_price').value,
         category_ids: category_Ids,
       // category1: document.querySelector('input#cat-1[value]').value,
       // category2: document.querySelector('input#cat-2[value]').value,
       // category3: document.querySelector('input#cat-3[value]').value,
        ingredient_ids: ingredient_Ids
    }

const configObj = {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
    },
body: JSON.stringify(project)

}

fetch(`${this.endpoint}/projects`, configObj)
.then(resp => resp.json())
.then(project => {
console.log(project)
})
    }







    backEndDelete(id){
        fetch(`${this.endpoint}/projects/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(json => alert(json.message))
    }
    









backEndedit(id){
   const project = {
         id: document.getElementById('edit-project-form').dataset.id,
         name: document.getElementById('edit-project-name').value,
         description: document.getElementById('edit-project-description').value,
         total_price: document.getElementById('edit-total_price').value
        //  category_ids: category_Ids,
       // category1: document.querySelector('input#cat-1[value]').value,
       // category2: document.querySelector('input#cat-2[value]').value,
       // category3: document.querySelector('input#cat-3[value]').value,
     }

 const configObj = {
method: 'PATCH',
headers: {
    'Content-Type': 'application/json'
    },
body: JSON.stringify(project)
}

 fetch(`${this.endpoint}/projects/${project.id}`,configObj) 
.then(resp => resp.json())
.then(project => {
console.log(project)
})
    }






renderShow(id){
const project = {
    id: document.getElementById('show-project').dataset.id,
}

const configObj = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
        },
    project: JSON.stringify(project)
    }

        fetch(`${this.endpoint}/projects/${id}`,configObj)     
        .then(resp => resp.json() )   
        .then(project => { 


        project.project_categories.forEach(function(i){ 
            document.querySelector('#sho-proj-cat').innerHTML  +=            
        ` <div id="show-p-cat">${i.name}</div>`
            })  

            project.project_ingredients.forEach(function(i){ 
            document.querySelector('#sho-proj-ing').innerHTML  +=            
        ` <div id="show-p-ing">${i.name}</div>`
            })         
        })
    }




}
