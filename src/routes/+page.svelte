<script lang="ts">
	import Introduction from '$lib/components/home/intro/Introduction.svelte';
	import Experience from '$lib/components/home/experience/Experience.svelte';
	import DigitalToolkit from '$lib/components/home/digitalToolkit/DigitalToolkit.svelte';
	import FeaturedProjects from '$lib/components/home/featuredProjects/FeaturedProjects.svelte';
	import HobbiesAndActivities from '$lib/components/home/hobbies/HobbiesAndActivities.svelte';
	import ContactSection from '$lib/components/home/contact/ContactSection.svelte';
</script>

<svelte:head>
	<meta name="description" content="The personal website of Ahmed Mahgoub." />
	<title>Portfolio Ahmed Mahgoub | Home</title>
</svelte:head>

<Introduction />
<Experience />
<DigitalToolkit />
<FeaturedProjects />
<HobbiesAndActivities />
<ContactSection />
