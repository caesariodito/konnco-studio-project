<script lang="ts">
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';

	let checked = false;
</script>

<div class="">
	<div
		class="flex min-w-full items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row"
	>
		<div class="mx-4 border-r-2">
			<Checkbox id="terms" bind:checked aria-labelledby="terms-label" />
		</div>
		<div class="flex w-4/5 items-center">
			<a href="/products/123" class="flex items-center">
				<img
					class="h-96 w-96 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
					src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4142683a-f13b-4b02-90e9-32d32770eb27/air-force-1-mid-off-white-shoes.png"
					alt=""
				/>
				<div class="flex flex-col justify-between p-4 leading-normal">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					</h5>
					<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, eligendi nobis. Omnis,
						consequatur magnam eum quidem amet corrupti deserunt minima architecto commodi corporis
						nulla ducimus quam vero facere officiis. Nemo.
					</p>
				</div>
			</a>
		</div>
		<form class="mx-6 my-4 max-w-xs">
			<label
				for="quantity-input"
				class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label
			>
			<div class="relative flex max-w-[8rem] items-center">
				<button
					type="button"
					id="decrement-button"
					data-input-counter-decrement="quantity-input"
					class="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
				>
					<svg
						class="h-3 w-3 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 2"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 1h16"
						/>
					</svg>
				</button>
				<input
					type="text"
					id="quantity-input"
					data-input-counter
					aria-describedby="helper-text-explanation"
					class="block h-11 w-full border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					placeholder="1"
					required
				/>
				<button
					type="button"
					id="increment-button"
					data-input-counter-increment="quantity-input"
					class="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
				>
					<svg
						class="h-3 w-3 text-gray-900 dark:text-white"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 18 18"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 1v16M1 9h16"
						/>
					</svg>
				</button>
			</div>
			<p
				id="helper-text-explanation"
				class="mt-2 text-lg font-bold text-gray-500 dark:text-gray-400"
			>
				Price: $99.99
			</p>
		</form>
	</div>
</div>
