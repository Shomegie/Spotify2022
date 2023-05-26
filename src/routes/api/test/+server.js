import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'
 
export async function GET() {
  const product = {
        name: 'BCD',
        price: '$10'
    };
  if (!product) {
    throw error(400, 'No product exists.');
  }
  return new Response(JSON.stringify(product));
}