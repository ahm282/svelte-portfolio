<script lang="ts">
	import Icon from '@iconify/svelte';
	import ModeToggle from '$lib/components/ui/modeToggle/ModeToggle.svelte';
	import IconButton from '$lib/components/ui/iconButton/IconButton.svelte';

	function getCurrentYear() {
		return new Date().getFullYear();
	}

	const currentYear = getCurrentYear();
</script>

<footer class="my-10">
	<div class="flex justify-center space-x-3">
		<IconButton
			href="https://github.com/ahm282"
			iconName="lucide:github"
			className="!rounded-md !border-input !p-0"
			ariaLabel="GitHub Profile"
		/>
		<IconButton
			href="https://www.linkedin.com/in/ahmed-mahgoub282/"
			iconName="ri:linkedin-fill"
			className="!rounded-md !border-input !p-0"
			ariaLabel="LinkedIn Profile"
		/>
		<!-- <IconButton
			href="https://x.com/ahmedtm282"
			iconName="ri:twitter-x-fill"
			className="!rounded-md !border-input !p-0"
			ariaLabel="Twitter Profile"
		/> -->
		<ModeToggle />
	</div>
	<div>
		<p class="mt-4 text-center text-sm text-muted-foreground">
			&copy; {currentYear} Ahmed Mahgoub - Powered by Svelte
		</p>
	</div>
</footer>
