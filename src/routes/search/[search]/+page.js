 export async function load({ params,fetch }) {

    let query = params.search
    let spotify_parameters = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            'Content-Type': "application/json"
        }
    }
    let url = `https://api.spotify.com/v1/search?q=artist%3A${query}&type=artist`

    if (query != ""){
        let res = await fetch(url,spotify_parameters)
        let res_data = await res.json()
        let status_code = res.status

        return {
            res_data,
            status_code,
            query
        }
    } else {
        return {
            status_code: 411
        }
    }
}