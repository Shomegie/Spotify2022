<script>
    export let data;
    console.log(data.tracks.tracks)

    let default_img = "mySpotifyBGLogo.svg"
    let top_tracks = []
    if (data.status_code == 200)
        top_tracks = data.tracks.tracks
</script>


<section>
    {#if data.status_code == 200 }
    <div class="grid overflow-y-scroll md:grid-cols-2 gap-y-6 gap-x-6 w-5/6 lg:w-4/6 mx-auto lg:mt-96">
        {#each top_tracks as track, i }
            <div class="p-2 border-white border-opacity-10 border rounded-xl text-white flex cursor-pointer hover:bg-white hover:text-black">
                <div class="image"><img class="aspect-square h-24" src={default_img} alt={i+1}></div>
                <div class="track flex flex-col-reverse pb-4 pl-2">
                    <p class="text-xs">Album name</p>
                    <p class="italic">{track.name}</p>
                </div>
            </div>
        {/each}        
    </div>
    {/if}

</section>

