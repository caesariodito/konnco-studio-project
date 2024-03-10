<script lang="ts">
	import { cn } from '$lib/utils.js';
	import UserNav from '$lib/components/user-nav.svelte';
	import Input from './ui/input/input.svelte';
	import { ShoppingCart } from 'lucide-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('flex w-full items-center justify-between lg:space-x-6', className)}>
	<a href="/" class="text-lg font-black transition-colors hover:text-gray-500">Something™</a>
	<Input type="search" placeholder="Search..." class="h-9 w-full md:w-[100px] lg:w-[300px]" />
	<div class="flex items-center space-x-6">
		<a href="/cart">
			<ShoppingCart class="hover:text-gray-500" />
		</a>
		<UserNav />
	</div>
</nav>
