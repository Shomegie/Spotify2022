<script>
    import ArtistCard from "../../../components/artist_card.svelte";
    import { goto } from "$app/navigation";
    export let data;
    console.log(data)

    let query = data.query

    let artists = []
    if (data.status_code == 200)
        artists = data.res_data.artists.items

    let HANDLE_ENTER = (e) =>{
        if (e.key == "Enter")
            SEARCH_ARTIST() 
    }

    let SEARCH_ARTIST = async () =>{
        if (query === "")
            return
        goto(`/search/${query}`)

        const response = await fetch('/api/spotify_access_token');
        let access_token = await response.json();
        
        let url = `https://api.spotify.com/v1/search?q=artist%3A${query}&type=artist`
        let spotify_parameters = {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${access_token.access_token}`,
            'Content-Type': "application/json"
        }
    }
    let res = await fetch(url,spotify_parameters)
    let res_data = await res.json()
    let status_code = res.status
    if (status_code == 200)
        artists = res_data.artists.items
    }
    
</script>

<div class="h-full w-full flex flex-col">
    <div class="w-full h-1/6">
        <div class="h-1/2 lg:w-5/6 mx-auto flex flex-col-reverse">

            <div class="search flex w-5/6 border-2 rounded-xl border-white border-opacity-50 mx-auto bg-white bg-opacity-10 -mb-10 z-10">
                <div class="w-5/6 ">
                    <input on:keyup={HANDLE_ENTER} class="w-full bg-transparent py-3 pl-6 placeholder-white text-white  font-thin outline-none" type="text" bind:value={query} placeholder="Search for an artist ...">
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
    <div class="h-5/6 w-full text-white">
        <div class="h-full bg-black bg-opacity-5 lg:w-5/6 mx-auto flex flex-col relative">
            <div class="absolute -z-10 top-0 left-0 h-full w-full flex items-center justify-center">
                <svg width="400px" height="276px" viewBox="0 0 892 831" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.158718723">
                        <g id="Desktop-Copy-4" transform="translate(-113.000000, -180.000000)" fill="#175C2C" fill-rule="nonzero">
                            <g id="Group" transform="translate(546.500000, 491.000000) rotate(124.000000) translate(-546.500000, -491.000000) translate(-718.000000, -530.000000)">
                                <path d="M1542.41356,1218.49305 C1394.28161,1122.48494 1208.32875,1102.62119 987.706703,1155.59119 C965.644498,1162.21244 946.734037,1145.65931 940.43055,1125.79556 C934.127063,1102.62119 949.885781,1082.75744 968.796242,1076.1362 C1208.32875,1019.85558 1416.34382,1043.02995 1580.23448,1148.96994 C1602.29668,1158.90181 1605.44843,1185.38681 1595.9932,1205.25056 C1583.38622,1225.1143 1561.32402,1231.73555 1542.41356,1218.49305 Z M1604.7492,1039.28532 C1434.51697,930.316188 1176.01616,897.295237 977.411882,963.337138 C952.192291,969.941328 923.820251,956.732948 917.515354,930.316188 C911.210456,903.899427 923.820251,874.180572 949.039842,867.576382 C1179.16861,794.93029 1462.889,831.253336 1658.34083,956.732948 C1677.25553,966.639233 1686.71287,999.660184 1670.95063,1022.77485 C1655.18838,1045.88951 1626.81635,1055.7958 1604.7492,1039.28532 Z M945.468021,762.789241 C913.939713,772.72459 882.411406,752.853892 872.952914,723.047844 C863.494421,689.930013 882.411406,656.812182 910.786883,646.876833 C1134.63787,577.329388 1503.51906,590.57652 1736.82854,736.294976 C1765.20402,752.853892 1774.66251,792.595289 1758.89835,822.401337 C1743.1342,845.583819 1705.30023,855.519168 1676.92475,838.960252 C1475.14359,713.112495 1137.7907,699.865362 945.468021,762.789241 Z" id="Shape" transform="translate(1318.492480, 915.782787) rotate(194.000000) translate(-1318.492480, -915.782787) "></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="mt-4 w-5/6 mx-auto text-sm text-white italic">You searched for "{query}"</div>
            <div class="artists_pane w-5/6 mx-auto mt-4 ">
                {#if data.status_code == 200}
                    <div class="grid grid-cols-5 gap-5 md:grid-cols-5 xl:grid-cols-7 xl:gap-6 cursor-pointer">
                        {#each artists as artist }
                            {#if artist.images < 2}
                                <ArtistCard artist_name={artist.name} image_src="/images/logo.svg" artist_id={artist.id} />
                            {:else}
                                <ArtistCard image_src={artist.images[1].url} artist_name={artist.name} artist_id={artist.id}/>
                            {/if}
                        {/each}
                    </div>
                {:else}
                    <p>Todo: Error Messages</p>
                 {/if}
            </div>
        </div>
    </div>
</div>