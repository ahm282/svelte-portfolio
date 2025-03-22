<script lang="ts">
	import Icon from '@iconify/svelte';
	import Button from '../button/button.svelte';

	const props = $props();
</script>

<Button variant="outline" size="icon" aria-label={props.ariaLabel}>
	<a href={props.href} target="_blank" aria-label={props.ariaLabel}>
		<Icon icon={props.iconName} class="inline size-[1.2rem]" />
	</a>
</Button>
