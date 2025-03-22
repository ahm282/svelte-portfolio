<script lang="ts">
	import Icon from '@iconify/svelte';
	import workData from '$lib/data/work.json';
	import type { Job } from '$lib/types/job';

	const workArray = Object.values(workData);
</script>

{#snippet workPost(jobExperience: Job)}
	{#snippet task(content: string[])}
		{#each content as taskDescription}
			<li class="text-sm">
				{taskDescription}
			</li>
		{/each}
	{/snippet}

	<li class="relative py-5">
		<img
			src={jobExperience.image}
			alt={jobExperience.title + ' logo'}
			class="absolute -left-11 mt-2 size-12 rounded-full border-2 border-zinc-300 bg-white object-contain p-[0.05rem] dark:border-slate-800"
		/>
		<div class="ms-5">
			<p class="text-xs">{jobExperience.date}</p>
			<p class="font-primary font-bold">{jobExperience.title}</p>
			<p class="pb-1 text-sm">{jobExperience.role}</p>
			<p class="flex items-center text-xs">
				<Icon icon="grommet-icons:location-pin" class="me-1" />
				{jobExperience.location}
			</p>
			<ul class="mt-2 list-outside list-disc leading-relaxed">
				{@render task(jobExperience.content)}
			</ul>
		</div>
	</li>
{/snippet}

<!-- Actual component -->
<ul class="ms-10 border-l-2 px-5 py-2">
	{#each workArray as experience}
		{@render workPost(experience)}
	{/each}
</ul>
