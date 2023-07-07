<script>
	export let homepageURL = '/authentication/signin';
</script>

<div class="flex h-full flex-col items-center justify-center">
	<img
		src="https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg"
		class="w-96"
		alt="Under Construction"
	/>
	<div class="my-9 text-center text-2xl text-indigo-900">
		This website is currently under construction. Please check back later for updates.
	</div>

	<div class="flex items-center justify-center">
		<a
			href={homepageURL}
			class="mt-2 w-fit self-center rounded bg-indigo-500 px-6 py-2 text-lg text-white hover:underline"
			>Go To Home</a
		>
	</div>
</div>
