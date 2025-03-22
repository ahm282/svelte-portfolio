<script lang="ts">
	import ActivityCard from '$lib/components/hobbies/ActivityCard.svelte';
	import ActivitiesData from '$lib/data/activities.json';
	import Icon from '@iconify/svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import type { Activity } from '$lib/types/activity';

	const activitiesArray = Object.values(ActivitiesData) as Activity[];
	const isDesktop = new MediaQuery('(min-width: 768px)');
</script>

{#snippet activityCard(activity: Activity, showImage: boolean, summary: boolean)}
	<ActivityCard {activity} {showImage} {summary} />
{/snippet}

<div class="mt-14">
	<div class="flex flex-row items-stretch justify-between">
		{#if isDesktop.current}
			<p class="font-primary text-2xl font-extrabold">Hobbies and Activities</p>
		{:else}
			<p class="font-primary text-2xl font-extrabold">Hobbies</p>
		{/if}
		<a
			data-sveltekit-preload-data="hover"
			href="/hobbies"
			class="flex items-center gap-x-2 text-sm text-primary hover:underline md:ps-4 md:text-lg"
			><Icon icon="akar-icons:arrow-right" class="inline text-primary" /> View all activities
		</a>
	</div>
	<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each activitiesArray.slice(0, 4) as activity}
			{@render activityCard(activity, false, true)}
		{/each}
	</div>
</div>
