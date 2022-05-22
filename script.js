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
    `<div class="card">
    <img src=${element.imageUrl}
    class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-model">Model: ${element.name} </p>
      <p class="card-manufacturer">Proizvođač: ${element.manufacturer} </p>
      <p class="card-price">Cijena: ${element.price} KM</p>
      <p class="card-year">Godište: ${element.year} </p>  
      <button type="button" onclick="fillEditData(${element.id})" class="btn btn-put" data-bs-toggle="modal" data-bs-target="#Modal2" data-bs-whatever="@getbootstrap">Promijeni</button>  
      <button type="button" class="btn btn-delete" onclick="izbrisiAuto(${element.id})">Izbriši</button>
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

