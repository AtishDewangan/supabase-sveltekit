<script>
	import '../app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	onMount(async () => {
		if ($page.url.pathname == '/') {
			goto('/authentication/signin');
		}
	});
</script>

<slot />
