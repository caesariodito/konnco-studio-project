<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import Input from '$lib/components/ui/input/input.svelte';
	// import type { PageData } from './$types.js';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator/index.js';
</script>

<div class="mx-24 my-12 grid grid-cols-1 space-y-6">
	<div>
		<h3 class="font-lg text-center text-lg font-bold">Profile</h3>
	</div>
	<Separator />
	<form method="POST" class="mx-36 grid grid-cols-2" id="profile-form">
		<div class="flex justify-center">
			<img
				class="h-256 w-256 rounded"
				src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
				alt="Extra large avatar"
			/>
		</div>
		<div class="">
			<div class="my-4 space-y-2">
				<Label for="username" class="text-md">Username:</Label>
				<Input type="text" id="username" name="username" placeholder="something" class="text-sm" />
			</div>
			<div class="my-4 space-y-2">
				<Label for="password" class="text-md">Password:</Label>
				<Input
					type="password"
					id="password"
					name="password"
					placeholder="something"
					class="text-sm"
				/>
			</div>
			<div class="my-4 space-y-2">
				<Label for="retype-password" class="text-md">Retype Password:</Label>
				<Input
					type="password"
					id="retype-password"
					name="retype-password"
					placeholder="something"
					class="text-sm"
				/>
			</div>
		</div>
		<div class="col-span-2 my-12 text-center">
			<button class={buttonVariants({ variant: 'default' })}> Save </button>
		</div>
	</form>
</div>
