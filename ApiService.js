class ApiService {


    constructor(api) {
        this.api = api
    }
    getAlbums = () => fetch(this.api + "/albums").then(res => res.json())


    createAlbum = (newAlbum) =>
        // fetch(this.api + "/albums", {
        //     method: 'POST',
        //     header: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newAlbum)
        // })
        // .then(response => response.json())
    
        fetch(this.api + "/albums", {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAlbum),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    
}

