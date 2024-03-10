<script lang="ts">
	import ProductCard from '$lib/components/product-card.svelte';
</script>

<!-- might need to add carousels to be more appealing -->

<div class="mx-4 grid grid-cols-4 items-center justify-items-center gap-6">
	{#each { length: 20 } as _}
		<ProductCard />
	{/each}
</div>
