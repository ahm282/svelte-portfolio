<script lang="ts">
	import Icon from '@iconify/svelte';

	export let items: { href: string; label: string }[] = [];
	export let currentPage: string;
</script>

<div class="mb-10 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
	{#each items as item, index}
		<a href={item.href} class="hover:text-foreground">{item.label}</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
	{/each}
	<span class="text-foreground">{currentPage}</span>
</div>
