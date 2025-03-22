<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import Icon from '@iconify/svelte';
</script>

<Card.Root class="flex h-full w-full flex-col shadow-sm md:w-10/12 lg:w-full">
	<Card.CardContent class="flex flex-1 flex-col justify-between pt-2 lg:flex-row ">
		<!-- TEXT -->
		<div class="pb-4 lg:pb-0">
			<p class="my-4 text-center font-primary text-xl font-bold lg:text-left">
				Interested in my work?
			</p>
			<p
				class="text-center text-sm font-light leading-normal dark:text-zinc-300 lg:w-10/12 lg:text-left"
			>
				Check out my CV to learn more about my education, skills, and experience.
			</p>
		</div>
		<!-- LINKS -->
		<div class="flex flex-col justify-center space-y-4 pt-3 lg:w-10/12 xl:items-end">
			<a href="/assets/docs/cv.pdf" target="_blank" class="xl:w-10/12" download>
				<Button
					class={buttonVariants({
						variant: 'default',
						className: 'w-full font-primary font-medium'
					})}
				>
					<Icon icon="lucide:file-text" class="mr-2 h-5 w-5" />
					View CV</Button
				>
			</a>
			<a
				href="https://github.com/ahm282"
				target="_blank"
				rel="noopener noreferrer"
				class="xl:w-10/12"
			>
				<Button
					class={buttonVariants({
						variant: 'secondary',
						className: 'w-full border font-primary font-medium hover:bg-secondary/50'
					})}
				>
					<Icon icon="lucide:github" class="mr-2 h-5 w-5" />
					Github Profile</Button
				>
			</a>
		</div>
	</Card.CardContent>
</Card.Root>
