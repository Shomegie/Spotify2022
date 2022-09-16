import { error } from '@sveltejs/kit';

let spotify_parameters = {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': "application/json"
    }
}
 
export async function load({ params, fetch }) {
    try {
        let url = `https://api.spotify.com/v1/artists/${params.artist}/top-tracks?market=NG`
        let artist_details_url = `https://api.spotify.com/v1/artists/${params.artist}`
        const res_artist = await fetch(artist_details_url,spotify_parameters)
        const res = await fetch(url,spotify_parameters)
        const tracks = await res.json()    
        const artist = await res_artist.json()
        const status_code = await res.status
        return {
          tracks,
          status_code,
          artist
        };
        
    } catch (err) {
        throw error(404, 'Not found');

    }
}