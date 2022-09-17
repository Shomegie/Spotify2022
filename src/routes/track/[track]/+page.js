import { error } from '@sveltejs/kit';

let spotify_parameters = {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': "application/json"
    }
}
 
export async function load({ params,fetch }) {

    let url_track = `https://api.spotify.com/v1/tracks/${params.track}`

    try {

        let res_track = await fetch(url_track,spotify_parameters)
        let track = await res_track.json()

        return {
            track,

        }
        
    } catch (err) {
        throw error(404, 'Not found');
    }


 
}