class ApiService {


    constructor(api) {
        this.api = api
    }
    getAlbums = () => fetch(this.api + "/albums").then(res => res.json())


    createAlbum = (newAlbum) => {
        return fetch(this.api + "/albums", {
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlbum),
        })
            .then(response => response.json())
    }
}

