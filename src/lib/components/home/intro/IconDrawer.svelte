<script lang="ts">
	import IconButton from '$lib/components/ui/iconButton/IconButton.svelte';
</script>

<div class="flex space-x-1">
	<IconButton
		href="https://github.com/ahm282"
		iconName="lucide:github"
		ariaLabel="Github Profile"
	/>
	<IconButton
		href="https://www.linkedin.com/in/ahmed-mahgoub282/"
		iconName="ri:linkedin-fill"
		ariaLabel="LinkedIn Profile"
	/>
	<!-- <IconButton
		href="https://x.com/ahmedtm282"
		iconName="ri:twitter-x-fill"
		ariaLabel="Twitter Profile"
	/> -->
	<IconButton href="mailto:ahmedhosny282@gmail.com" iconName="ic:round-email" ariaLabel="Email" />
	<IconButton href="/assets/docs/cv.pdf" iconName="academicons:cv-square" ariaLabel="CV" />
</div>
