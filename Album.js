class Album {

    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)

    }

    static getAlbums = () => {
        api.getAlbums().then(albums => {
            albums.forEach(album => new Album(album))
            this.renderAlbumIndex()
        })
    }

    // static searchAlbums = () => {
    //     api.getAlbums().then(albums => {
    //         albums.forEach(album => new Album(album))
    //         // this.renderAlbumIndex()
    //     })
    // }

    static handleSubmit = (e) => {
        // debugger;
        e.preventDefault()
        console.log("this form has been subbmitteddd")

        const newAlbum = {
          
            name: e.target.name.value,
            artist: e.target.artist.value,
            genre: e.target.genre.value,
            image: e.target.image.value,
            description: e.target.description.value,
            user_id: user.id,
            // user: user
            // username: user.username
        }
        console.log(newAlbum)
         api.createAlbum(newAlbum).then(album => {
            new Album(album)
                Album.renderAlbumIndex()
        })
        e.target.reset()
    }


    static createAlbumForm = () => {
        document.getElementById('main').innerHTML = `
         <div class="form-card">
         <form>
             <label for="name">Album Name:</label><br>
             <input type="text" name="name"><br>
             <label for="artist">Artist:</label><br>
             <input type="text" name="artist">
             <label for="genre">Genre:</label><br>
             <input type="text" name="genre">
             <label for="image">Image:</label><br>
             <input type="text" name="image">
             <label for="description">Description:</label><br>
             <input type="text" name="description">
             <input type="submit" id="create-album-btn" value="submit">
         </form>
         </div>`
         document.querySelector('form').addEventListener("submit", this.handleSubmit)
        
    }
    

    
    renderCard = () => {
        const { name, artist, genre, image, description, id, username } = this.data
        // debugger
        document.getElementById("album-container").innerHTML += `
        <div class="album-card" data-id=${id}>
            <div id="header" class="insta-header">
            <span class="insta-actions">...</span>
            <div class"album-name">
            ${name}
            </div>
            <span class="profile-name">${username}</span>
            </div>
                <div class="image">
                    <img src="${image}"alt="${name}" />
                </div>
            <div class="artist-genre">
            <p class="labels">${artist}</p>
            <p class="labels">${genre}</p>
            </div>
            <div class="description"
            <p>${description}</p>
            </div>
            <button id="edit-btn" style="display: block;">EDIT</button>
            <button id="delete-btn" style="display: block;">DELETE</button>
        </div>` 
    }

    static find = (id) => this.all.find(album => album.data.id == id )

    
    static renderAlbumIndex = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const albumContainer = document.createElement("div")
        albumContainer.id = "album-container"
        
        main.appendChild(albumContainer)
      
        this.all.forEach(album => album.renderCard())
        
        albumContainer.addEventListener("click", this.handleIndexClick)
        //   albumContainer.addEventListener('click', aBtns)
        
        const bttns = document.querySelectorAll('button')

        for (const editOrDbtn of bttns) {
            editOrDbtn.addEventListener('click', buttonType)
        }
    
        function buttonType(event) {

            if (event.target.innerText == "DELETE") {
               
                deleteAlbum(event.target)
            } else if (event.target.innerText == "EDIT") {
                //do something edit
            }
           
        }

        function deleteAlbum(element) {
          
            const div = element.parentElement
            const id =  div.dataset.id
            div.remove()

            // this.find(id).remove()
            fetch(`http://localhost:3000/albums/${id}`, {
                method: 'DELETE'
            })
                .then(resp => resp.json())
                .then(data => alert(data.message))
        }
    }
    

    static handleIndexClick = (e) => {

        if (e.target.tagName == "IMG" || e.target.classList.contains("labels")) {
            const id = e.target.closest(".album-card").dataset.id
        
            this.find(id).renderShow()
        }
    }

    renderShow = () => {
        const { name, artist, genre, image, description, username} = this.data
        document.getElementById("main").innerHTML = `
        <div class="album-card"> 
        <div class="show">
        <h1>${name}</h1>
        <p class="labels"> posted by ${username}</p>
        <img class="image" src=${image} alt=${name}/>
        <p class="labels">${artist}</p>
        <p class="labels">${genre}</p>
        <p>${description}</p>
        <button id="goBack"> Back </button>
        </div>
        </div>`
        document.getElementById("goBack").addEventListener("click", Album.renderAlbumIndex)
    }

    static renderLoginPage = () => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        document.getElementById("main").innerHTML = `
        <form class="form-card">
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username">
            <input type="submit" value="Submit">
        </form> `
    }




//     static aBtns = () => {
    
//     let actionsBtn = document.querySelectorAll('span')
    
//     actionsBtn.addEventListener('click', e => {
//         if (e.target.classList == "insta-actions")
//         showEandDbtn()
//     })
// }
        
//     static showEandDbtn() {
//         const editBtn = document.getElementById('edit-btn')
//         const deleteBtn = document.getElementById('delete-btn')
    
//         editBtn.style.display = 'block'
//         deleteBtn.style.display = 'block'
    
//     }



}