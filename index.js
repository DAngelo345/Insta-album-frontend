console.log("hello insa album")

const api = new ApiService("http://localhost:3000")

// Album.createAlbum()
Album.getAlbums()

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
        
   







