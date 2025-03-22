<script lang="ts">
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import projectData from '$lib/data/projects.json';
	import Icon from '@iconify/svelte';
	import type { Project } from '$lib/types/project';

	const projectsArray = Object.values(projectData);
	const filteredProjects = projectsArray.filter((project) => project.featured === true);
</script>

{#snippet projectCard(project: Project)}
	<ProjectCard {project} />
{/snippet}

<div class="mt-14">
	<div class="flex flex-row items-stretch justify-between">
		<p class="font-primary text-2xl font-extrabold">Featured projects</p>
		<a
			data-sveltekit-preload-data="hover"
			href="/projects"
			class="flex items-center gap-x-2 text-sm text-primary hover:underline md:ps-4 md:text-lg"
			><Icon icon="akar-icons:arrow-right" class="inline text-primary" /> View all projects
		</a>
	</div>
	<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each filteredProjects as project}
			{@render projectCard(project)}
		{/each}
	</div>
</div>
