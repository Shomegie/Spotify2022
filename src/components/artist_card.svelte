<script>
    import { goto } from "$app/navigation";

    export let image_src = "mySpotifyBGLogo.svg"
    export let artist_name = "Default"
    export let artist_id


    let artist_page = (artist) => {
        goto(`/artist/${artist}`)
    }
</script>

<div on:click={()=>artist_page(artist_id)}  class="bg-[#111] p-2 text-white rounded-xl hover:bg-white hover:text-black transition duration-150">
    <img class="h-auto aspect-square" src={image_src} alt={artist_name}>
    <div class="text-xs font-extralight font-sans pt-2">{artist_name}</div>
</div>
