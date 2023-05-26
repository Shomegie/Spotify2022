import { error } from '@sveltejs/kit';
 
export async function load({ params, fetch }) {
    const response = await fetch('/api/spotify_access_token');
    let access_token = await response.json();

    let spotify_parameters = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${access_token.access_token}`,
            'Content-Type': "application/json"
        }
    }

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