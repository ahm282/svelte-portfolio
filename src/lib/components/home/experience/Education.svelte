<script lang="ts">
	import Icon from '@iconify/svelte';
	import educationData from '$lib/data/education.json';
	import type { Institute } from '$lib/types/institute';

	const educationArray = Object.values(educationData);
</script>

{#snippet educationalInstitute(institute: Institute)}
	{#snippet institutionHighlights(content: string[])}
		{#each content as detail}
			<li class="text-sm">
				{detail}
			</li>
		{/each}
	{/snippet}

	<li class="relative py-5">
		<img
			src={institute.image}
			alt={institute.title + ' logo'}
			class="absolute -left-11 mt-2 size-12 rounded-full border-2 border-zinc-300 bg-white object-contain p-[0.05rem] dark:border-slate-800"
		/>
		<div class="ms-5">
			<p class="text-xs">{institute.date}</p>
			<p class="font-primary font-bold">{institute.title}</p>
			<p class="pb-1 text-sm">{institute.degree}</p>
			<p class="flex items-center text-xs">
				<Icon icon="grommet-icons:location-pin" class="me-1" />
				{institute.location}
			</p>
			<ul class="mt-2 list-outside list-disc leading-relaxed">
				{@render institutionHighlights(institute.content)}
			</ul>
		</div>
	</li>
{/snippet}

<!-- Actual component -->
<ul class="ms-10 border-l-2 px-5 py-2">
	{#each educationArray as institute}
		{@render educationalInstitute(institute)}
	{/each}
</ul>
