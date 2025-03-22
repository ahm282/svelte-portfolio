<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import Icon from '@iconify/svelte';
	import type { Activity } from '$lib/types/activity';

	const {
		activity,
		showImage = false,
		summary = true
	}: { activity: Activity; showImage?: boolean; summary?: boolean } = $props();
</script>

<Card.Root class="flex h-full flex-col">
	<Card.CardHeader>
		<Card.CardTitle class="flex items-center font-primary text-lg font-semibold">
			<Avatar.Root
				class="text-primary-500 mr-2 flex size-8 items-center justify-center bg-slate-700 dark:bg-zinc-800"
			>
				<Icon icon={activity.icon} class="size-5 text-white" />
			</Avatar.Root>
			{activity.name}
		</Card.CardTitle>
	</Card.CardHeader>

	{#if !summary}
		<Card.CardContent class="flex flex-1 flex-col justify-between">
			<div>
				{#if activity.image && showImage}
					<img
						src={activity.image}
						alt={`Screenshot of ${activity.name} project`}
						class="mb-4 h-44 w-full rounded-lg object-cover"
					/>
				{/if}
				<div class="flex flex-col items-center gap-y-3">
					{#each activity.content as line}
						<p class="text-sm leading-snug">{line}</p>
					{/each}
				</div>
			</div>
			<p class="w-full pt-8 text-left text-sm font-light leading-normal dark:text-zinc-300">
				{activity.subtext}
			</p>
		</Card.CardContent>
	{:else}
		<Card.CardContent class="flex flex-col justify-center pt-2">
			<p class="text-sm font-light leading-normal dark:text-zinc-400">{activity.description}</p>
		</Card.CardContent>
	{/if}
</Card.Root>
