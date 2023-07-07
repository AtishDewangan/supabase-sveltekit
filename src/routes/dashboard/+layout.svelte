<script lang="ts">
	import Header from '$lib/component/header.svelte';
	import SideBar from '$lib/component/sidebar.svelte';
</script>

<main class="container min-w-full">
	<div class="relative">
		<div class="fixed z-50 w-full">
			<Header />
		</div>
		<div class="absolute left-0">
			<SideBar />
		</div>
		<div class="absolute right-0 top-[110px] -mt-5 min-h-screen w-full pb-28 pl-[15%] pr-3 pt-3">
			<slot />
		</div>
	</div>
</main>
