<script lang="ts">
	import '../app.pcss';
	import Footer from '$lib/components/footer.svelte';
	import MainNav from '$lib/components/main-nav.svelte';

	export let data;
	let loggedIn: boolean;
	$: loggedIn = data.loggedIn;
</script>

<div class="hidden flex-col md:flex">
	<div class="border-b">
		<div class="mx-6 flex h-16 items-center px-4">
			<MainNav class="mx-2" {loggedIn} />
		</div>
	</div>
	<div class="space-y-4 p-8 pt-6">
		<slot />
	</div>
	<Footer />
</div>
