<script lang="ts">
	import Input from '$lib/component/form/input.svelte';
	import Button from '$lib/component/form/button.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import toast, { Toaster } from 'svelte-french-toast';
	import Nav from '$lib/component/authentication/nav.svelte';

	export let form;
	$: if (!form?.success && form?.message) {
		toast.error(form?.message);
	}
	$: if (form?.success) {
		toast.success(form?.message);
		setTimeout(alertFunc, 1000);
	}
	const alertFunc = () => {
		goto('/authentication/signin');
	};
</script>

<Toaster />
<form
	class="h-screen md:w-1/2"
	method="POST"
	action="?/resetPassword"
	use:enhance={() => {
		return async ({ result }) => {
			invalidateAll();
			await applyAction(result);
		};
	}}
>
	<div class="h-screen w-full bg-indigo-300 p-28 md:py-5">
		<div class="mx-1 my-8 text-left text-white">
			<h1 class="text-3xl">Set new password to get started!</h1>
		</div>
		<div class="mt-5 flex flex-col rounded-lg text-left">
			<Input label="Password" name="password" htmlType="password" errors={form?.errors?.password} />
		</div>
		<div class="mt-5 flex flex-col rounded-lg text-left">
			<Input
				label="Confirm Password"
				name="cpassword"
				htmlType="password"
				errors={form?.errors?.cpassword}
			/>
		</div>
		<Nav heading="Have an account?" route="/authentication/signin" title="Sign In" />
		<Nav heading="Don't have an account?" route="/authentication/signup" title="Sign Up" />

		<div class="">
			<Button label="Submit" htmlType="submit" className="bg-indigo-500 text-green-400 w-full" />
		</div>
	</div>
</form>
