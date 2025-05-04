<script lang="ts">
	import type { PageData } from './$types';
	import type { Project } from '$lib/types/project';

	// Import project-specific components
	import WalletProject from '$lib/components/projects/project-components/WalletProject.svelte';
	import TravelBuddyProject from '$lib/components/projects/project-components/TravelBuddyProject.svelte';
	import WTCProject from '$lib/components/projects/project-components/WTCProject.svelte';
	import CTKProject from '$lib/components/projects/project-components/CTKProject.svelte';
	import DefaultProject from '$lib/components/projects/project-components/DefaultProject.svelte';

	// Get the project data from the page
	let { data }: { data: PageData } = $props();
	const project: Project = data.project;
	const slug = data.slug;

	// Map project names to their corresponding components
	const projectComponents = {
		wallet: WalletProject,
		'travel-buddy': TravelBuddyProject,
		'wtc-roland-club-website': WTCProject,
		'comedy-tegen-kanker': CTKProject
	};
</script>

<svelte:head>
	<meta name="description" content={project.description} />
	<title>Ahmed Mahgoub | {project.projectName}</title>
</svelte:head>

{#if slug in projectComponents}
	<svelte:component this={projectComponents[slug]} {project} />
{:else}
	<DefaultProject {project} />
{/if}
