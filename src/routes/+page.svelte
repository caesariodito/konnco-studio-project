<script lang="ts">
	import MainNav from '$lib/components/main-nav.svelte';
	import ProductCard from '$lib/components/product-card.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="mx-6 flex h-16 items-center px-4">
			<MainNav class="mx-2" />
		</div>
	</div>
	<div class="space-y-4 p-8 pt-6">
		<div class="mx-4 grid grid-cols-4 items-center justify-items-center gap-6">
			{#each { length: 20 } as _, i}
				<ProductCard />
			{/each}
		</div>
	</div>
	<Footer />
</div>
