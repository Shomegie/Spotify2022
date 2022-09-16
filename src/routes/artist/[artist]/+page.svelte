<script>
    export let data;
    console.log(data)

    let top_tracks = []
    if (data.status_code == 200)
        top_tracks = data.tracks.tracks

    const goSomeWhereBack = () => {
        window.history.back()
    }
</script>

<section>
    <div on:click={goSomeWhereBack} class="text-white w-5/6 mx-auto cursor-pointer pt-8 pl-3">
        <div class="flex">         
            <span class="mr-1 text-opacity-40 text-white hover:text-opacity-100 transition duration-100">&larr; Back</span>
        </div>
    </div>

</section>

<section>
    <div class="w-5/6 lg:w-4/6 mx-auto py-7">
        <div class=" flex items-end">
            <!-- <div class="aspect-square h-32 bg-gray-500 mb-2 mr-2"></div> -->
            {#if data.artist.images.length > 0}
                <img class="aspect-square h-32 mb-2 mr-2" src={data.artist.images.slice(-1)[0].url} alt={data.artist.name}>
            {:else}
                <img class="aspect-square h-32 mb-2 mr-2" src="/images/logo.svg" alt={data.artist.name}>
            {/if}
            <div class="pb-2"><span class="italic">Artist: {data.artist.name}</span><br><span class="tracking-wide text-xs text-white text-opacity-60">Top tracks</span></div>
        </div>
    </div>
</section>


<section>
    {#if data.status_code == 200 }
    <div class="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 w-5/6 lg:w-4/6 text-xs mx-auto">
        {#each top_tracks as track, i }
            <div class=" border-white border-opacity-10 border rounded-xl text-white flex flex-col md:flex-col cursor-pointer hover:bg-white hover:text-black">
                {#if track.album.images.length > 0}
                <div class="w-fit mx-auto my-1 md:my-3 "><img class="aspect-square h-16 md:h-24" src={track.album.images[0].url} alt={track.name}></div>
                {:else}
                <div class="w-fit mx-auto md:mx-auto bg-yellow-300 my-1 md:my-3"><img class="aspect-square h-16 md:h-24" src="/images/logo.svg" alt={track.name}></div>
                {/if}
                <div class="track flex mx-auto text-center w-fit items-center md:mx-auto pl-2 mb-1">
                    <!-- <p class="text-xs">Album name</p> -->
                    <p class="italic">{track.name}</p>
                </div>
            </div>
        {/each}        
    </div>
    {/if}

</section>

