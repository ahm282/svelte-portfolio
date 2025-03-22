<script lang="ts">
	let { children } = $props();
</script>

<span
	class="inline-flex items-center rounded-md bg-slate-700 px-2 py-0.5 text-xs font-light text-white dark:bg-zinc-800 md:px-2 md:font-normal"
>
	{@render children?.()}
</span>
