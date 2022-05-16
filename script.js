// GET METODA

const baseUrl = 'https://ptf-web-dizajn-2022.azurewebsites.net'
 
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
.then(res => {
    if(!res.ok){
        throw 'Ovo je error';
   }
   else (console.log("GET request uspješan!"));
    return res.json();
})
.then(data => getCars(data))
.catch(err => console.log(err))

 
const getCars = (data) => {
const result = document.getElementById('auto1');
let work = '';
data.forEach(element => {
    console.log(element.name)
   
    work += 
    `<div class="card" style="width: 18rem;margin:10px;" >
    <img src=${element.imageUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${element.name} </p>
      <p class="card-text">${element.manufacturer} </p>
      <button type="button" onclick="fillEditData(${element.id})" class="btn btn-third" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Promjeni</button>  
      <button type="button" class="btn btn-danger" onclick="izbrisiAuto(${element.id})">Izbriši</button>
    </div>
  </div>`
});
  result.innerHTML = work;
}


// PUT METODA

const fillEditData = (AutoId) => {
    const element = data.find(element => element.id === AutoId);
    //const foodFormId = document.getElementById('food-id');
    //const foodFormName = document.getElementById('food-name');
    //const foodFormImage = document.getElementById('food-image');
    //const foodFormPrice = document.getElementById('food-price');
    const ChangeId = document.getElementById('change-id').value;
    const ChangeName = document.getElementById('change-name').value;
    const ChangeManufacturer = document.getElementById('change-manufacturer').value;
    const ChangeImageUrl= document.getElementById('change-imageUrl').value;
    const ChangePrice = document.getElementById('change-price').value;
    const ChangeYear = document.getElementById('change-year').value;

    ChangeId = element.id;
    ChangeName = element.name;
    ChangeManufacturer = element.manufacturer;
    ChangeImageUrl = element.ImageUrl;
    ChangePrice = element.price;
    ChangeYear = element.year;
    //foodFormId.value = food.id;
    //foodFormName.value = food.name;
    //foodFormImage.value = food.imageUrl;
    //foodFormPrice.value = food.price;
}

const PromjeniAuto = () => { 
    const ChangeId = document.getElementById('change-id').value;
    const ChangeName = document.getElementById('change-name').value;
    const ChangeManufacturer = document.getElementById('change-manufacturer').value;
    const ChangeImageUrl= document.getElementById('change-imageUrl').value;
    const ChangePrice = document.getElementById('change-price').value;
    const ChangeYear = document.getElementById('change-year').value;
    //const foodFormId = document.getElementById('food-id').value;
    //const foodFormName = document.getElementById('food-name').value;
    //const foodFormImage = document.getElementById('food-image').value;
    //const foodFormPrice = document.getElementById('food-price').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/swagger/index.html/api/Cars`, {
        method: 'PUT', 
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "id": ChangeId,
            "name": ChangeName,
            "manufacturer": ChangeManufacturer,
            "imageUrl": ChangeImageUrl,
            "price": ChangePrice,
            "year": ChangeYear
        })
    })
    .then(res => {
        if(!res.ok)
        {
            alert('Error');
        }
    })
}

// POST METODA

const DodajAuto = () => {
    const AddId = document.getElementById('add-id').value;
    const AddName = document.getElementById('add-name').value;
    const AddManufacturer = document.getElementById('add-manufacturer').value;
    const AddImageUrl= document.getElementById('add-imageUrl').value;
    const AddPrice = document.getElementById('add-price').value;
    const AddYear = document.getElementById('add-year').value;

    
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
        method: 'POST',
        headers: 'accept: */*',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            "id": AddId,
            "name": AddName,
            "manufacturer": AddManufacturer,
            "imageUrl": AddImageUrl,
            "price": AddPrice,
            "year": AddYear
        })
    })
    .then(res => {
        if (res.ok) { console.log("POST request uspješan! ")}
        else (console.log("POST request neuspješan!"));
        return res;
        })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))
}



// DELETE METODA
const izbrisiAuto = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/{id}`, {
        method: 'DELETE',
    })
    .then(res => {
        console.log(res);
    })
}


/* POST */

/*fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
    method: "POST",
    headers: {
        "Content-type": "application/json" //Govori severu koji format podataka šaljemo
    },
    body: JSON.stringify(
        {
            "id": 7,
            "name": "Audi",
            "manufacturer": "Q7",
            "imageUrl": "8990",
            "price": 100000,
            "year": 2020
          }
    )      
})*/
    
/* 
const postData = {
    "id": 7,
    "name": "Audi",
    "manufacturer": "Q7",
    "imageUrl": "8990",
    "price": 100000,
    "year": 2020
};
try {
    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)        
    });
    if (!response.ok) {
        const message = "Error with Status Code: " + response.status;
        throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log("Error: " + err);
}*/

/*

const mojaForma=document.getElementById("myform");
mojaForma.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Unos je submitovan!");
    const prvo = document.getElementById("id").value;
    const drugo = document.getElementById("name").value;
    const trece = document.getElementById("manufacturer").value;
    const cetvrto = document.getElementById("imageUrl").value;
    const peto = document.getElementById("price").value;
    const sesto = document.getElementById("year").value;

console.log(prvo, drugo, trece, cetvrto, peto, sesto);
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
    method:'POST',
    headers: {
    'Content-Type': 'application/json'
        },
    body: JSON.stringify({
     id: prvo,
     name: drugo, 
     manufacturer: trece,
     imageUrl: cetvrto,
     price: peto,
     year: sesto
         })
         })
         .then(res => {
             if(!res.ok){
                 throw 'ovo je error';
            }
             return res.json();
     })
         .then(data => console.log(data))
         .catch(err => console.log(err))
})

*/

//PUT
