class ApiService {


    constructor(api) {
        this.api = api
    }
    getAlbums = () => fetch(this.api + "/albums").then(res => res.json())
}

// ダンジェロ (danjero)