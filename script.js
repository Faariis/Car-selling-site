// GET METODA

const baseUrl = 'https://ptf-web-dizajn-2022.azurewebsites.net'

let data = [];

fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
.then(res => {
    if(!res.ok){
        throw 'Ovo je error';
   }
   else (console.log("GET request uspješan!"));
    return res.json();
})
.then(data => {
    usluga = data;
    getCars(data);
    console.log(data);
  })
.catch(err => console.log(err))

 
const getCars = (usluga) => {
const result = document.getElementById('auto1');
let work = '';

usluga.forEach(element => {
    console.log(element.name)
   
    work += 
    `<div class="card" style="width: 18rem;margin:10px;" >
    <img src=${element.imageUrl}
    class="card-img-top" alt="..." style="height:150px">
    <div class="card-body">
      <p class="card-text">${element.name} </p>
      <p class="card-text">${element.manufacturer} </p>
      <p class="card-text">${element.price} </p>
      <p class="card-text">${element.year} </p>  
      <button type="button" onclick="fillEditData(${element.id})" class="btn btn-third" data-bs-toggle="modal" data-bs-target="#Modal2" data-bs-whatever="@getbootstrap">Promjeni</button>  
      <button type="button" class="btn btn-danger" onclick="izbrisiAuto(${element.id})">Izbriši</button>
    </div>
  </div>`
});
  result.innerHTML = work;
}


// PUT METODA

const fillEditData = (AutoId) => {
    const element = usluga.find(element => element.id === AutoId);

    const ChangeId = document.getElementById('change-id');
    const ChangeName = document.getElementById('change-name');
    const ChangeManufacturer = document.getElementById('change-manufacturer');
    const ChangeImageUrl= document.getElementById('change-imageUrl');
    const ChangePrice = document.getElementById('change-price');
    const ChangeYear = document.getElementById('change-year');

    ChangeId.value = element.id;
    ChangeName.value = element.name;
    ChangeManufacturer.value = element.manufacturer;
    ChangeImageUrl.value = element.imageUrl;
    ChangePrice.value = element.price;
    ChangeYear.value = element.year;
    
}

const PromjeniAuto = () => { 
    const ChangeId = document.getElementById('change-id').value;
    const ChangeName = document.getElementById('change-name').value;
    const ChangeManufacturer = document.getElementById('change-manufacturer').value;
    const ChangeImageUrl= document.getElementById('change-imageUrl').value;
    const ChangePrice = document.getElementById('change-price').value;
    const ChangeYear = document.getElementById('change-year').value;

    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars`, {
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
        if (res.ok) { console.log("PUT request uspješan! ")}
        else (console.log("PUT request neuspješan!"));
        return res;
        })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))
}


// POST METODA

const DodajAuto = () => {
    /*const myform = document.getElementById("btn");
    myform.addEventListener("click",(e)=>{
    e.preventDefault();*/
    
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

    

    /*$('#Modal1').on('hidden.bs.modal', function () {
    $('.modal-body').find('textarea, input').val('');
      });
      
    $('#Modal1').modal('toggle');

    })*/
}
// DELETE METODA

const izbrisiAuto = (id) => {
    fetch(`https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars/${id}`, {
        method: 'DELETE',
    })
    .then(res => {
        if (res.ok) { console.log("DELETE request uspješan! ")}
        else (console.log("DELETE request neuspješan!"));
        return res;
        })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err))
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
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


// POČETNA STRANICA


// PROMJENA POLOŽAJA SLIKE 
document.querySelector('.pocetna').onmousemove = (e) => {
    document.querySelectorAll('.pocetna-parallax').forEach(ele =>{
        let brzina = ele.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * brzina) / 90;
        let y = (window.innerHeight - e.pageY * brzina) / 90;

        ele.style.transform = `translateX(${y}px) translateY(${x}px)`;
    });
}

// VRAĆANJE SLIKE 
document.querySelector('.pocetna').onmouseleave = () => {
    document.querySelectorAll('.pocetna-parallax').forEach(ele =>{

        ele.style.transform = `translateX(0px) translateY(0px)`;
    });
}