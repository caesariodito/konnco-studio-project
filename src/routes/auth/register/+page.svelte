<script lang="ts">
	import { enhance } from '$app/forms';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
</script>

<div
	class="container relative hidden h-[620px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
		<div
			class="absolute inset-0 bg-cover"
			style="
				background-image:
					url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80);"
		/>
		<div class="relative z-20 flex items-center text-lg font-medium">
			<!-- <Command class="mr-2 h-6 w-6" /> -->
			Something™
		</div>
		<div class="relative z-20 mt-auto">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores dignissimos
					doloremque et? Tenetur aliquid doloribus consequuntur repellendus&rdquo;
				</p>
				<footer class="text-sm">I just want to turu</footer>
			</blockquote>
		</div>
	</div>
	<div class="lg:p-8">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Create an account</h1>
				<p class="text-sm text-muted-foreground">Enter your data below to create your account</p>
			</div>
			<form method="post" use:enhance>
				<Label for="username">Username</Label>
				<Input name="username" id="username" /><br />
				<Label for="password">Password</Label>
				<Input type="password" name="password" id="password" /><br />
				<div class="flex justify-between">
					<button class={buttonVariants({ variant: 'default' })}> Continue </button>
					<a href="/auth/login" class={buttonVariants({ variant: 'outline' })}> Login </a>
				</div>
			</form>
			<p class="px-8 text-center text-sm text-muted-foreground">
				By clicking continue, you agree to our{' '}
				<a href="/" class="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>{' '}
				and{' '}
				<a href="/" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
				.
			</p>
		</div>
	</div>
</div>
