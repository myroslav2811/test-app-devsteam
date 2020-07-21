export class Queries {
    static getImages(page) {
        const url = new URL('https://api.unsplash.com/photos/')
        let params = { client_id: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0', page }
        params = `?${new URLSearchParams(params).toString()}`
        return new Promise((resolve, reject) => {
            fetch(url + params)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    static getImage(id) {
        const url = new URL(`https://api.unsplash.com/photos/${id}`)
        const params = { client_id: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0' }
        url.search = new URLSearchParams(params).toString()
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }
}