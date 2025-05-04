<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();

	// Generate slug from project name
	const slug = project.projectName.toLowerCase().replace(/\s+/g, '-');
</script>

{#snippet techBadges(stack: string[])}
	{#each stack as tech}
		<Badge>{tech}</Badge>
	{/each}
{/snippet}

<a href={`/projects/${slug}`} class="block no-underline">
	<Card.Root
		class="h-full cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:shadow-md dark:hover:bg-zinc-900"
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
</a>
