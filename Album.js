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

    static handleSubmit = (e) => {
        e.preventDefault()

        const newAlbum = {
            name: e.target.name.value,
            artist: e.target.artist.value,
            genre: e.target.genre.value,
            imgae: e.target.image.value,
            description: e.target.description.value
        }
        api.createAlbum(newAlbum).then(console.log)
    }


    renderCard = () => {
        const { name, artist, genre, image, description, id} = this.data
        document.getElementById("album-container").innerHTML += `
        <div class="album-card" data-id=${id}>
            <div id="header" class="insta-header">
            <span class="insta-actions">...</span>
            <div class"album-name">
            ${name}
            </div>
            <span class="profile-name">username</span>
            </div>
                <div class="image">
                    <img src="${image}"alt="${name}"/>
                </div>
            <div id="artist-genre">
            <p class="labels">${artist}</p>
            <p class="labels">${genre}</p>
            </div>
            <div id="description"
            <p>${description}</p>
            </div>
        </div>`
    }

    static find = (id) => this.all.find(album => album.data.id == id )

    
    static renderAlbumIndex = ()  => {
        const main = document.getElementById("main")
        main.innerHTML = ""
        const albumContainer = document.createElement("div")
        albumContainer.id = "album-container"
        main.appendChild(albumContainer)
        this.all.forEach(album => album.renderCard())

        albumContainer.addEventListener("click", this.handleIndexClick)
    }

    static handleIndexClick = (e) => {

        if (e.target.tagName == "IMG" || e.target.classList.contains("labels")) {
            const id = e.target.closest(".album-card").dataset.id
            this.find(id).renderShow()
        }
    }

    renderShow = () => {
        const { name, artist, genre, image, description, id} = this.data
        document.getElementById("main").innerHTML = `
        <div class="album-card"> 
        <div class="show">
        <h1>${name}</h1>
        <img src="${image}"alt="${name}"/>
        <p class="labels">${artist}</p>
        <p class="labels">${genre}</p>
        <p>${description}</p>
        <button id="goBack"> Go Back </button>
        </div>
        </div>`
        document.getElementById("goBack").addEventListener("click", Album.renderAlbumIndex)
    }

  

}