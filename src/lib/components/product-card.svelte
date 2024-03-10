<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<a href="/">
	<Card.Root class="hover:bg-muted">
		<Card.Header>
			<Card.Title>Product A</Card.Title>
			<Card.Description>something</Card.Description>
		</Card.Header>
		<Card.Content>
			<img
				class="mb-4 rounded-lg border-2 border-gray-200 object-cover object-center"
				src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4142683a-f13b-4b02-90e9-32d32770eb27/air-force-1-mid-off-white-shoes.png"
				alt="something shoe"
			/>
			<h1 class="mb-2 mt-4 font-semibold">Cool Nikey Shoes</h1>
			<p class="line-clamp-2 overflow-ellipsis font-serif font-light text-gray-500">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel
				sint commodi
			</p>
		</Card.Content>
		<Card.Footer>
			<p class="line-clamp-1 overflow-ellipsis border-t-2 font-thin">something@thing.com</p>
		</Card.Footer>
	</Card.Root>
</a>
