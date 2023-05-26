import { error } from '@sveltejs/kit';


 
export async function load({ params,fetch }) {

    const response = await fetch('/api/spotify_access_token');
    let access_token = await response.json();

    let spotify_parameters = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${access_token.access_token}`,
            'Content-Type': "application/json"
        }
    }


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