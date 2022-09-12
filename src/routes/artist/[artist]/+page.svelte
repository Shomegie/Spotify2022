<script>
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    export let data;
    console.log(data.tracks.tracks)

    let default_img = "mySpotifyBGLogo.svg"
    let top_tracks = []
    if (data.status_code == 200)
        top_tracks = data.tracks.tracks

    const goSomeWhereBack = () => {
        window.history.back()
    }
</script>

<section>
    <div on:click={goSomeWhereBack} class="text-white text-opacity-80 w-5/6 mx-auto cursor-pointer hover:text-green-100 transition duration-150">
        <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>              
            Back
        </div>
    </div>

</section>


<section>
    {#if data.status_code == 200 }
    <div class="grid md:grid-cols-2 gap-y-6 gap-x-6 w-5/6 lg:w-4/6 mx-auto lg:mt-96">
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

