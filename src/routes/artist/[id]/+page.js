import { error } from '@sveltejs/kit';

let spotify_parameters = {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': "application/json"
    }
}
 
export function load({ params }) {
    let slug = params.id
    let url = `https://api.spotify.com/v1/artists/${params.id}/top-tracks?market=NG`

    return {
      title: `slug: ${slug}`,
    };
 
  //throw error(404, 'Not found');
}