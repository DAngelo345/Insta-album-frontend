console.log("hello insa album")

const api = new ApiService("http://localhost:3000")

let user


let albumSearch = [];



const searchMain = document.getElementById('main')

const renderSearched = (filteredAlbumsArray) => {

    console.log(filteredAlbumsArray)
    const htmlString = filteredAlbumsArray.map((album) => {

        return `<div class="album-card" data-id=${album.id}>
            <div id="header" class="insta-header">
            <span class="insta-actions">...</span>
            <div class"album-name">
            ${album.name}
            </div>
            <span class="profile-name">${album.username}</span>
            </div>
                <div class="image">
                    <img src="${album.image}"alt="${album.name}" />
                </div>
            <div class="artist-genre">
            <p class="labels">${album.artist}</p>
            <p class="labels">${album.genre}</p>
            </div>
            <div class="description"
            <p>${album.description}</p>
            </div>
            <button id="edit-btn" style="display: block;">EDIT</button>
            <button id="delete-btn" style="display: block;">DELETE</button>
        </div>` 
     
    })
    searchMain.innerHTML = ""
    searchMain.innerHTML = htmlString
}




const loadAlbums = async () => {
    const res = await fetch("http://localhost:3000/albums");
    albumSearch = await res.json()
    console.log(albumSearch)
    
    // albumSearch.then(albums => renderSearched(albums))
    
}

loadAlbums();

const search = document.getElementById("search-bar")

search.addEventListener("keyup", (e) => {
    console.log(e.target.value)
    
    const value = e.target.value.toLowerCase();
    const filteredAlbums = albumSearch.filter((album) => {
        return (album.genre.toLowerCase().includes(value) || album.name.toLowerCase().includes(value));
       
    });

    console.log(filteredAlbums)
    renderSearched(filteredAlbums)
    
    
 })

document.querySelector("form").addEventListener("submit", UsernameSubmit)

function UsernameSubmit(e) {
    e.preventDefault()
    api.findOrCreateUser(e.target.username.value).then(userData => {
        user = userData
     
        Album.getAlbums()
    })
}

function show() {

    document.getElementById('sidebar').classList.toggle('active');
}
    
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


let addAlbum = document.querySelector('.add-album')

    addAlbum.addEventListener('click', e => {
        if (e.target.classList == "add-album")
            Album.createAlbumForm()
    })
    


let homeButton = document.querySelector('.home-button')
    homeButton.addEventListener('click', e => {
    if (e.target.classList == "home-button")
    Album.renderAlbumIndex()
    })


let logOutButton = document.querySelector('.log-out')
let newUser
    logOutButton.addEventListener('click', e => {
        if (e.target.classList == "log-out")
            Album.renderLoginPage()
        
        document.querySelector("form").addEventListener("submit", UsernameSubmit)
        
        function UsernameSubmit(e) {
            e.preventDefault()
            api.findOrCreateUser(e.target.username.value).then(userData => {
                newUser = userData
                const main = document.getElementById("main")
                main.innerHTML = ""
                Album.getAlbums()
            })
        }
        
    })

// function aBtns() {
    
//     let actionsBtn = document.querySelectorAll('span')
    
//     actionsBtn.addEventListener('click', e => {
//         if (e.target.classList == "insta-actions")
//         showEandDbtn()
//     })
// }
        
    // function showEandDbtn() {
    //     const editBtn = document.getElementById('edit-btn')
    //     const deleteBtn = document.getElementById('delete-btn')
    
    //     editBtn.style.display = 'block'
    //     deleteBtn.style.display = 'block'
    
    // }
        
   







