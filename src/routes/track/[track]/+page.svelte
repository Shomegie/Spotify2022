<script>
    export let data
    console.log(data.track)

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

<div class=" flex flex-col space-y-3 w-80 h-fit my-auto mx-auto">
    <img class=" aspect-square w-full" src={data.track.album.images[0].url} alt={data.track.name}>
    <div class="flex flex-col ">
        <span>{data.track.name}</span>
        <span class="text-xs text-white text-opacity-75">
            {#each data.track.artists as artist, i}
                {#if i !=0}
                    {`, ${artist.name}`}
                {:else}
                    {artist.name}
                {/if}
            {/each}
        </span>
    </div>
    <div class="w-full">
        <audio class="w-full" controls>
            <source src={data.track.preview_url} type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>

</div>




  