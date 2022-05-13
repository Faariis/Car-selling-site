const bazeUrl='https://ptf-web-dizajn-2022.azurewebsites.net '
 
fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
.then(res=>{if(!res.ok)throw 'greska';return res.json()})
.then(data=>getCars(data))
.catch(err=>console.log(err))
 
const getCars=(data)=>{
const rezult =document.getElementById('auto1');
let work='';
data.forEach(element => {
    console.log(element.name)
   
    work+=`<div class="card" style="width: 18rem;margin:10px;" >
    <img src=${element.imageUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${element.name} </p>
      <p class="card-text">${element.manufacturer} </p>
    </div>
  </div>`
});
  rezult.innerHTML=work;
}


const DodajAuto = () => {
    const AddId = document.getElementById('add-id').value;
    const AddName = document.getElementById('add-name').value;
    const AddManufacturer = document.getElementById('add-manufacturer').value;
    const AddImageUrl= document.getElementById('add-imageUrl').value;
    const AddPrice = document.getElementById('add-price').value;
    const AddYear = document.getElementById('add-year').value;

    
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars', {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            id: AddId,
            name: AddName,
            manufacturer: AddManufacturer,
            imageUrl: AddImageUrl,
            price: AddPrice,
            year: AddYear
        })
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
