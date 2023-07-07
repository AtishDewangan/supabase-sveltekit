<script lang="ts">
	export let heading = '';
	export let route = '';
	export let title = '';
</script>

<div class="mt-2 text-start text-white">
	<span class="text-base font-medium text-indigo-900">{heading}</span>
	<a href={route} type="button" class="underline hover:text-indigo-900">{title}</a>
</div>
