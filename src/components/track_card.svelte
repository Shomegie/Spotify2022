<script>
    const imgUrl = new URL('logo.png', import.meta.url).href
    export let title = "Default"
    //export let image_src = "mySpotifyBGLogo2.svg"
</script>

<div class="text-white flex">
    <img class="h-auto aspect-square" src={imgUrl} alt="june">
    <div class="text-white">{title}</div>
</div>