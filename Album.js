class Album {

    static all = []
    constructor(data) {
        this.data = data
        this.constructor.all.push(this)
        console.log(this)

    }

    // static addAlbum(album) {
    //     new Album(album)
    // }

    renderCard = () => {
        const { name, artist, genre, image, description, id} = this.data
        document.getElementById("album-container").innerHTML += `
        <div class="album-card" data-id=${id}>
        <img src="${image}"alt="${name}"/>
        <p class="labels">${name}</p>
        <p class="labels">${artist}</p>
        <p class="labels">${genre}</p>
        <p>${description}</p>
        </div>`
    }

    static handleIndexClick = (e) => {

        if (e.target.tagName == "IMG" || e.target.classList.contains("labels")) {
            console.log(e.target)
        }
    }

    static renderAlbumIndex = ()  => {
        const albumContainer = document.createElement("div")
        albumContainer.id = "album-container"
        document.getElementById("main").appendChild(albumContainer)
        this.all.forEach(album => album.renderCard())

        albumContainer.addEventListener("click", this.handleIndexClick)
    }

    static getAlbums = () => {
        api.getAlbums().then(albums => {
            albums.forEach(album => new Album(album))
            this.renderAlbumIndex()
        })
    }

}