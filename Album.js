class Album {

    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)

    }

    static addAlbum(album) {
        new Album(album)
    }

    renderCard = () => {
        document.querySelector(".album-container").innerHTML += `
        <div class="album-card">

        
        </div>`
    }

    static renderAlbumIndex() {
        const albumContainer = document.createElement("div")
        albumContainer.classList.add("album-container")
        document.getElementById("main").appendChild(albumContainer)

        this.all.forEach(album => album.renderCard())
    }

    static getAlbums() {
        api.getAlbums().then(albums => {
            albums.forEach(album => Album.addAlbum(album))
            this.renderAlbumIndex()
        })
    }

}