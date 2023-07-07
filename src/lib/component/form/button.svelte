<script>
	export let label = '';
	export let route = '#';
	export let htmlType = 'button';
	export let className = 'w-[50%] bg-primary text-primary-dark';
</script>

<div class="mt-5">
	{#if htmlType === 'submit'}
		<button
			type="submit"
			class={`text-md whitespace-nowrap rounded px-14 py-3 text-center font-semibold hover:bg-white ${className}`}
			on:click
			{...$$restProps}
		>
			{label}
		</button>
	{:else}
		<a
			type="button"
			href={route}
			class={`text-md whitespace-nowrap rounded px-14 py-3 text-center font-semibold hover:bg-white ${className}`}
			on:click
			{...$$restProps}
		>
			{label}
		</a>
	{/if}
</div>
