<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
			<Avatar.Root class="h-8 w-8">
				<Avatar.Image
					src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
					alt="@shadcn"
				/>
				<Avatar.Fallback>SC</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">shadcn</p>
				<p class="text-xs leading-none text-muted-foreground">m@example.com</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Group>
			<a href="/settings">
				<DropdownMenu.Item>Settings</DropdownMenu.Item>
			</a>
		</DropdownMenu.Group>
		<DropdownMenu.Separator />
		<a href="/auth/logout">
			<DropdownMenu.Item>Log out</DropdownMenu.Item>
		</a>
	</DropdownMenu.Content>
</DropdownMenu.Root>
