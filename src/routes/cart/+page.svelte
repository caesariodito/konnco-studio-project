<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import Label from '$lib/components/ui/label/label.svelte';

	import ProductCardH from '$lib/components/product-card-h.svelte';

	let checked = false;
</script>

<div class="mx-8">
	<h1 class="mb-8 ml-4 mt-4 text-4xl font-bold">Your Cart</h1>
	<div class="flex">
		<div class="w-2/3">
			<div class="my-4 grow rounded-md border-2 border-muted shadow">
				<div class="m-4">
					<div class="mx-4 flex items-center space-x-2">
						<Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
						<Label
							id="terms-label"
							for="terms"
							class="text-xl font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						>
							Select all
						</Label>
					</div>
				</div>
			</div>
			<div class="rounded-md border-2 border-muted shadow">
				<div class="m-4 flex flex-col space-y-6">
					{#each { length: 5 } as _}
						<ProductCardH />
					{/each}
				</div>
			</div>
		</div>
		<div class="w-1/3">
			<div class="m-4 space-y-2 rounded-md border-2 p-4 shadow">
				<h1 class="text-2xl font-bold">Summary</h1>
				<div class="flex justify-between">
					<p class="text-lg">Total:</p>
					<p class="text-lg">$9999</p>
				</div>
				<div class="pt-4">
					<button class={buttonVariants({ variant: 'default', size: 'full' })}> Checkout </button>
				</div>
			</div>
		</div>
	</div>
</div>
