<script lang="ts">
	import { enhance } from "$app/forms";
	import { Button } from "$lib/components/ui/button"
	import { Label } from "$lib/components/ui/label"
	import { Input } from "$lib/components/ui/input"
</script>

<h1 class="bold text-lg text-center">Sign in</h1>
<form method="post" use:enhance>
	<Label for="username">Username</Label>
	<Input name="username" id="username" /><br />
	<Label for="password">Password</Label>
	<Input type="password" name="password" id="password" /><br />
	<Button>
		<button>
			Continue
		</button>
	</Button>
</form>
