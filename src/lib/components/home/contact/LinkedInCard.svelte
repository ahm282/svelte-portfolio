<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Icon from '@iconify/svelte';
</script>

<Card.Root
	class="flex h-full w-full flex-col transition-shadow hover:shadow-md md:w-10/12 lg:w-6/12"
>
	<Card.CardHeader>
		<Card.CardTitle class="flex flex-col items-center justify-center gap-y-2">
			<Avatar.Root
				class="text-primary-500 mr-2 flex size-10 items-center justify-center bg-slate-700 dark:bg-zinc-800"
			>
				<Icon icon="lucide:linkedin" class="size-6 text-white" />
			</Avatar.Root>
			<p class="font-primary text-lg font-semibold">Connect on LinkedIn</p>
		</Card.CardTitle>
	</Card.CardHeader>
	<Card.CardContent class="flex flex-1 flex-col justify-between pt-2">
		<div class="pb-4">
			<p class="text-center text-sm font-light leading-normal dark:text-zinc-300">
				Let's build our professional network and stay in touch.
			</p>
		</div>
		<a
			href="https://www.linkedin.com/in/ahmed-mahgoub282/"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-center gap-x-2 font-primary text-sm hover:underline"
		>
			View LinkedIn profile
			<Icon icon="akar-icons:arrow-right" class="size-4" />
		</a>
	</Card.CardContent>
</Card.Root>
