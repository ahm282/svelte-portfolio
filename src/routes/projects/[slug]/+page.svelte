<script lang="ts">
	import type { PageData } from './$types';
	import type { Project } from '$lib/types/project';

	// Import project-specific components
	import WalletProject from '$lib/components/projects/project-components/WalletProject.svelte';
	import TravelBuddyProject from '$lib/components/projects/project-components/TravelBuddyProject.svelte';
	import WTCProject from '$lib/components/projects/project-components/WTCProject.svelte';
	import CTKProject from '$lib/components/projects/project-components/CTKProject.svelte';
	import LinuxWebservicesProject from '$lib/components/projects/project-components/LinuxWebservicesProject.svelte';
	import StickyNotesAppProject from '$lib/components/projects/project-components/StickyNotesAppProject.svelte';
	import ProxmoxProject from '$lib/components/projects/project-components/ProxmoxProject.svelte';
	import UCProject from '$lib/components/projects/project-components/UCProject.svelte';
	import DefaultProject from '$lib/components/projects/project-components/DefaultProject.svelte';

	// Get the project data from the page
	let { data }: { data: PageData } = $props();
	const project: Project = data.project;
	const slug = data.slug;

	// Type-safe dynamic component selection
	let ProjectComponent = $state(DefaultProject);

	switch (slug) {
		case 'wallet':
			ProjectComponent = WalletProject;
			break;
		case 'travel-buddy':
			ProjectComponent = TravelBuddyProject;
			break;
		case 'wtc-roland-club-website':
			ProjectComponent = WTCProject;
			break;
		case 'comedy-tegen-kanker':
			ProjectComponent = CTKProject;
			break;
		case 'linux-web-services':
			ProjectComponent = LinuxWebservicesProject;
			break;
		case 'sticky-notes-app':
			ProjectComponent = StickyNotesAppProject;
			break;
		case 'personal-homelab':
			ProjectComponent = ProxmoxProject;
			break;
		case 'requirements-analysis':
			ProjectComponent = UCProject;
			break;
		default:
			ProjectComponent = DefaultProject;
	}
</script>

<svelte:head>
	<meta name="description" content={project.description} />
	<title>Ahmed Mahgoub | {project.projectName}</title>
</svelte:head>

<ProjectComponent {project} />
