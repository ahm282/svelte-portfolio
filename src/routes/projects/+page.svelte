<script lang="ts">
	import Icon from '@iconify/svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import type { PageData } from '../$types';
	import type { Project, ProjectsData } from '$lib/types/project';

	let { data }: { data: PageData & ProjectsData } = $props();
	const projectsArray: Project[] = Object.values(data.projects);
</script>

<svelte:head>
	<meta name="description" content="Projects page" />
	<title>Portfolio Ahmed Mahgoub | Projects</title>
</svelte:head>

{#snippet projectCardSnippet(project: Project)}
	<ProjectCard {project} />
{/snippet}

<div class="mt-10">
	<div class="flex items-center gap-x-5">
		<a href="/" class="inline-flex items-center justify-center">
			<Icon icon="fluent-arrow-left-28-filled" class="size-6" />
		</a>
		<h1 class="font-primary text-2xl font-extrabold">Projects</h1>
	</div>
	<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each projectsArray as project}
			{@render projectCardSnippet(project)}
		{/each}
	</div>
</div>
