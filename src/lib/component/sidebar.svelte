<script>
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';

	let visible = false;
	let drop = false;

	onMount(() => {
		open();
	});
	const open = () => {
		let sidebar = document.getElementById('sidebar');
		sidebar.classList.toggle('w-16');
		let btnmenu = document.getElementById('btnmenu');
		btnmenu.classList.toggle('rotate-180');

		let menuItems = document.querySelectorAll('#hide');
		// console.log(menuItems);

		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].classList.toggle('hidden');
			// console.log(menuItems[i].innerHTML);
		}
	};
</script>

<div class="fixed left-6 top-10 z-50">
	<button
		class={`lg:hidden`}
		on:click={() => {
			visible = true;
		}}
		><Icon
			icon="material-symbols:arrow-forward-ios-rounded"
			color="bg-indigo-900"
			width="28"
			height="28"
		/></button
	>
</div>
{#if visible}
	<div
		class="fixed top-0 z-50 h-screen w-screen border border-r-indigo-900 py-10 md:hidden lg:flex"
		transition:fly={{ x: -200, duration: 500 }}
	>
		<div class={`absolute right-10 top-10 h-7 w-7 rounded-full p-1`}>
			<button
				type="button"
				class=" md:hidden"
				on:click={() => {
					visible = false;
				}}
			>
				<Icon icon="akar-icons:cross" color="" width="20" height="20" />
			</button>
		</div>
		<div class="item-center my-10 flex">
			<ul class="mx-2">
				<li class={`my-6 flex items-center rounded-sm p-1`}>
					<a
						href="/"
						class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900 hover:text-white ${
							$page.url.pathname === `/` ? 'rounded-full bg-indigo-900 p-2 text-white' : ''
						}`}
					>
						<Icon
							icon="ic:outline-home"
							color={`${$page.url.pathname === `/` ? '#fff' : ''}`}
							width="38"
							height="38"
						/>
						<span class="mx-6" id="hide"> Dashboard</span>
					</a>
				</li>
				<li class={`my-6 flex items-center rounded-sm p-1`}>
					<a
						href="/customer"
						class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900 hover:text-white ${
							$page.url.pathname === `/customer` ? 'rounded-full bg-indigo-900 p-2 text-white' : ''
						}`}
					>
						<Icon
							icon="gg:profile"
							color={`${$page.url.pathname === `/customer` ? '#fff' : ''}`}
							width="32"
							height="32"
						/>
						<span class="mx-7" id="hide">Customer</span>
					</a>
				</li>
				<li class={`my-6 flex items-center rounded-sm p-1`}>
					<a
						href="/setting"
						class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900 hover:text-white ${
							$page.url.pathname === `/setting` ? 'rounded-full bg-indigo-900 p-2 text-white' : ``
						}`}
					>
						<Icon
							icon="simple-line-icons:settings"
							color={`${$page.url.pathname === `/setting` ? '#fff' : ''}`}
							width="32"
							height="32"
						/>
						<span class="mx-7" id="hide">Setting</span>
					</a>
				</li>
			</ul>
			<div class="absolute bottom-10 right-4">
				<button
					type="button"
					class="hidden rounded-full border-white bg-blue-900 md:block"
					on:click={open}
					id="btnmenu"
				>
					<Icon icon="ic:round-double-arrow" color="#fff" width="32" height="32" hFlip={true} />
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- large view -->
<div class="flex">
	<div
		class={`fixed top-0 z-50 hidden h-screen border border-b-0  border-l-0 border-t-0 shadow-inner shadow-gray-400 md:block lg:flex`}
		id="sidebar"
		transition:fly={{ x: 250, opacity: 1 }}
	>
		<ul class="my-10">
			<li class={`text-center text-3xl font-extrabold`}>
				<p class="-mb-4">UI</p>
				<span class="text-sm" id="hide">Frames</span>
			</li>
			<li class={`my-6 mt-10 flex items-center rounded-sm p-1`}>
				<a
					href="/"
					class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900  hover:text-white ${
						$page.url.pathname === `/` ? 'rounded-full bg-indigo-900 p-2 text-white' : ``
					}`}
				>
					<Icon
						icon="ic:outline-home"
						color={`${$page.url.pathname === `/` ? '#fff' : ''}`}
						width="38"
						height="38"
					/>
					<span class="mx-6" id="hide"> Dashboard</span>
				</a>
			</li>
			<li class={`my-6 flex items-center rounded-sm p-1`}>
				<a
					href="/customer"
					class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900 hover:text-white ${
						$page.url.pathname === `/customer` ? 'rounded-full bg-indigo-900 p-2 text-white' : ``
					}`}
				>
					<Icon
						icon="gg:profile"
						color={`${$page.url.pathname === `/customer` ? '#fff' : ''}`}
						width="32"
						height="32"
					/>
					<span class=" mx-7" id="hide">Customer</span>
				</a>
			</li>
			<li class={` my-6 flex items-center rounded-sm p-1`}>
				<a
					href="/setting"
					class={`flex items-center p-2 hover:rounded-full hover:bg-indigo-900 hover:text-white ${
						$page.url.pathname === `/setting` ? 'rounded-full bg-indigo-900 p-2 text-white' : ``
					}`}
				>
					<Icon
						icon="simple-line-icons:settings"
						color={`${$page.url.pathname === `/setting` ? '#fff' : ''}`}
						width="32"
						height="32"
					/>
					<span class=" mx-7" id="hide">Setting</span>
				</a>
			</li>
		</ul>
		<div class="absolute bottom-12 right-2">
			<button
				type="button"
				class="hidden rounded-full border-white bg-indigo-900 p-2 md:block"
				on:click={open}
				id="btnmenu"
			>
				<Icon icon="ic:round-double-arrow" color="#fff" width="32" height="32" hFlip={true} />
			</button>
		</div>
	</div>
</div>
