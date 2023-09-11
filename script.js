const RANDOM_USER_API = 'https://randomuser.me/api/';

function getData(){

    fetch(RANDOM_USER_API)
    .then(response => response.json())
    .then(data => displayCard(data.results))
}

function displayCard(data){
    let user = data[0];
    let card = document.getElementById('divCard');

    card.innerHTML = `<div class="card mx-auto" style="width: 18rem;">
                            <img class="card-img-top" src="${user.picture.large}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${user.name.title + " " + user.name.first + " " + user.name.last}</h5>
                                <p class="card-text">${"Age: " + user.dob.age}</p>
                                <p class="card-text">${"Address: " + user.location.street.number + " " + user.location.street.name}</p>
                                <p class="card-text">${"City: " + user.location.city}</p>
                                <p class="card-text">${"Country: " + user.location.country}</p>
                            </div>
                    </div>`;
}

document.addEventListener('DOMContentLoaded',()=>{
    
    let btnGenUser = document.getElementById('btnGenUser');

    btnGenUser.addEventListener('click',()=>{
        getData();
    });
});