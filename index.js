console.log("hello insa album")

const api = new ApiService("http://localhost:3000")

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

