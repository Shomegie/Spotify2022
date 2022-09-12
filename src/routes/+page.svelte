<script>
    import { goto } from "$app/navigation";

    let query = "";

    let SEARCH_ARTIST = () =>{
        goto(`/search/${query}`)
    }
</script>

<div class="h-full w-full flex flex-col">
    <div class="w-full h-1/6">
        <div class="h-1/2 lg:w-5/6 mx-auto flex flex-col-reverse">

            <div class="search flex w-5/6 border-2 rounded-xl border-white border-opacity-50 mx-auto bg-white bg-opacity-10 -mb-10 z-10">
                <div class="w-5/6 ">
                    <input class="w-full bg-transparent py-3 pl-6 placeholder-white text-white  font-thin outline-none" type="text" bind:value={query} placeholder="Search for an artist ...">
                </div>
                <div class="w-1/6 flex items-center justify-end pr-4">
                    <button on:click={SEARCH_ARTIST} class="bg-white py-2 text-sm text-slate-700 transition duration-150 hover:text-black cursor-pointer px-4 flex items-center rounded-lg ">Search<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                      </button>
                    
                </div>
            </div>
        </div>
    </div>
</div>