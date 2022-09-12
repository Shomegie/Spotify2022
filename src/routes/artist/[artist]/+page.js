import { error } from '@sveltejs/kit';

let spotify_parameters = {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': "application/json"
    }
}

let get_tracks = async (url) =>{
    let res = await fetch (url,spotify_parameters)
    let tracks = await res.json()
    return tracks 
}
 
export async function load({ params, fetch }) {
    try {
        let url = `https://api.spotify.com/v1/artists/${params.artist}/top-tracks?market=NG`
        const res = await fetch(url,spotify_parameters)
        const tracks = await res.json()    
        const status_code = await res.status
        return {
          tracks,
          status_code
        };
        
    } catch (err) {
        throw error(404, 'Not found');

    }

}