import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'
 
export async function GET(){
  const client_id = env.SPOTIFY_CLIENT_ID
  const client_secret = env.SPOTIFY_CLIENT_SECRET
  const refresh_token = env.REFRESH_TOKEN
  const redirect_uri = "https://spotify2022.vercel.app"
  const token_endpoint = `https://accounts.spotify.com/api/token`

  const res = await fetch(token_endpoint, {
    method:'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
      redirect_uri,
      client_id,
      client_secret,
    })
  })

  const access_token = await res.json()
  return new Response(JSON.stringify(access_token))

}