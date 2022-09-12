<script>
	import '../app.postcss';
	import Header from '../components/header.svelte';

</script>

<div class="h-screen max-h-screen overflow-y-hidden w-full main ">
	<div class="h-full w-full flex flex-col">
		<Header />
		<slot />
	</div>
</div>



<style>
	/* .main{
		background-image: linear-gradient(to right bottom, #008e4a, #009846, #00a241, #06ab3a, #13b530);
	} */
</style>

