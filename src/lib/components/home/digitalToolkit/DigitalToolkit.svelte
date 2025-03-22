<script lang="ts">
	import Icon from '@iconify/svelte';

	const iconsNames = [
		'mdi:dot-net',
		'proicons:python',
		'fa-brands:react',
		'mdi:laravel',
		'ri:svelte-line',
		'iconoir:linux',
		'simple-icons:docker',
		'ant-design:kubernetes-outlined',
		'simple-icons:postgresql',
		'mdi:terraform',
		'devicon-plain:bash',
		'teenyicons:tailwind-outline',
		'devicon-plain:java',
		'lineicons:mongodb',
		'file-icons:typescript'
	];
</script>

{#snippet icon(iconName: any)}
	<Icon icon={iconName} class="size-10" />
{/snippet}

<div class="mt-10">
	<h1 class="font-primary text-2xl font-extrabold">Tech I've worked with</h1>
	<div class="mx-auto mt-5 grid w-11/12 grid-cols-5 grid-rows-3 place-items-center gap-5 grayscale">
		{#each iconsNames as iconName}
			{@render icon(iconName)}
		{/each}
	</div>
</div>
