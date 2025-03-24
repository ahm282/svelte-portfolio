<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Badge from '$lib/components/projects/Badge.svelte';
	import ProjectDetails from '$lib/components/projects/ProjectDetails.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
	let detailsOpen: boolean = $state(false);
</script>

{#snippet techBadges(stack: string[])}
	{#each stack as tech}
		<Badge>{tech}</Badge>
	{/each}
{/snippet}

<Card.Root
	class="cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-900"
	onclick={() => (detailsOpen = true)}
>
	<Card.CardHeader class="font-primary md:min-h-24">
		<Card.CardTitle class="font-bold">{project.projectName}</Card.CardTitle>
		<Card.CardDescription class="pt-1">{project.description}</Card.CardDescription>
	</Card.CardHeader>
	<Card.CardContent class="">
		<div class="mb-4 flex flex-wrap gap-1">
			{@render techBadges(project.techStack)}
		</div>
		<div class="relative">
			<img
				src={project.images[0]}
				alt={`Screenshot of ${project.projectName} project`}
				class="h-56 w-full rounded-lg object-cover"
			/>
			<div
				class="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent opacity-40 dark:opacity-50"
			></div>
		</div>
	</Card.CardContent>
</Card.Root>

<ProjectDetails {project} bind:open={detailsOpen} />
