import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'
import { s_access_token } from '../../../appstore';
 
// export async function GET() {
//   const product = {
//         name: 'BCD',
//         price: '$10'
//     };
//   if (!product) {
//     throw error(400, 'No product exists.');
//   }
//   return new Response(JSON.stringify(product));
// }


// async function getProduct() {
//   const response = await fetch('/api/test');
//   product = await response.json();
//   console.log(product)
//   s_access_token.set(product.name)
// }

export async function GET(){
  const client_id = env.SPOTIFY_CLIENT_ID
  const client_secret = env.SPOTIFY_CLIENT_SECRET
  const refresh_token = env.REFRESH_TOKEN
  const redirect_uri = "http://localhost:5175"
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
  console.log(access_token)
  return new Response(JSON.stringify(access_token))

}