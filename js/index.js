fetch('js/datas.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
        let usersImg = document.querySelector(".users-img")

        for (let i = 0; i <= data.users.length; i++) {
            console.log(i);
            usersImg.innerHTML += `<img data-index=${i}  src="${data.users[i].image}" title="${data.users[i].name}">`
        }

        let containerUsers = document.querySelector("container-users")
        let img = document.querySelectorAll("img")
        let hidden = document.querySelectorAll(".hidden")

        
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
})

// hidden.style.opacity = 1;

// containerUsers.innerHTML = `
// <img src="${data.users[0].image}" title="${data.users[0].name}">
// <h3>${data.users[0].name}</h3>
// <p class="age"">${data.users[0].age}</p>
// <a href="${data.users[0].email}" title="Envoyez un email à ${data.users[0].name}">
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//         <path fill="#ff74ab" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
//     </svg>
// </a>
// <p>${data.users[0].address.street} ${data.users[0].address.city} ${data.users[0].address.country}</p>
// `