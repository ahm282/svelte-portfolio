<script lang="ts">
	import Icon from '@iconify/svelte';
	import ActivityCard from '$lib/components/hobbies/ActivityCard.svelte';
	import type { PageData } from '../$types';
	import type { Activity, ActivitiesData } from '$lib/types/activity';

	let { data }: { data: PageData & ActivitiesData } = $props();
	const activitiesArray: Activity[] = Object.values(data.activities);
</script>

<svelte:head>
	<meta name="description" content="Hobbies and activities" />
	<title>Portfolio Ahmed Mahgoub | Hobbies and Activities</title>
</svelte:head>

{#snippet activityCard(activity: Activity, showImage: boolean, summary: boolean)}
	<ActivityCard {activity} {showImage} {summary} />
{/snippet}

<div class="mt-16 pt-4">
	<div class="flex items-center gap-x-5">
		<a href="/" class="inline-flex items-center justify-center">
			<Icon icon="fluent-arrow-left-28-filled" class="size-6" />
		</a>
		<h1 class="font-primary text-2xl font-extrabold">Hobbies and Activities</h1>
	</div>
	<div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
		{#each activitiesArray.reverse() as activity}
			{@render activityCard(activity, true, false)}
		{/each}
	</div>
</div>
