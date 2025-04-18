<script lang="ts">
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import Badge from './Badge.svelte';
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import type { Project } from '$lib/types/project';

	let { project, open = $bindable(false) }: { project: Project; open?: boolean } = $props();

	const isDesktop = new MediaQuery('(min-width: 768px)');

	// User agent detection for drawer and dialog rendering
	let userAgent = '';
	let isMobileUA = $state(false);

	onMount(() => {
		userAgent = navigator.userAgent;
		isMobileUA = /Mobi|Android/i.test(userAgent);
	});
</script>

<!-- Project details dialog - Desktop -->
{#if isDesktop.current && !isMobileUA}
	<Dialog.Root bind:open>
		<Dialog.Content
			class="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1300px]"
		>
			<Dialog.Header>
				<Dialog.Title>{project.projectName}</Dialog.Title>
				<Dialog.Description>{project.description}</Dialog.Description>
			</Dialog.Header>
			<div class="flex items-center gap-x-6">
				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-1 hover:underline"
					>
						<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub Repository</span>
					</a>
				{/if}
				{#if project.liveUrl}
					<Separator orientation="vertical" />
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-1 hover:underline"
					>
						<Icon icon="octicon:link-24" class="size-4" /><span>Live Demo</span></a
					>
				{/if}
			</div>
			<div class="flex flex-wrap gap-x-2">
				<h3>Technologies used:</h3>
				<div class="flex gap-x-1">{@render renderTechStack(project.techStack)}</div>
			</div>
			<div
				id="images"
				class="mx-auto flex w-fit items-center justify-center rounded border border-slate-300 p-1 shadow dark:border-slate-800 md:w-fit md:border-none md:shadow-none lg:border lg:shadow"
			>
				{#each project.images as image}
					<img
						src={image}
						alt={project.projectName}
						class="max-h-72 w-5/12 rounded-sm border object-contain md:shadow lg:w-auto"
					/>
				{/each}
			</div>
			{@render renderProjectContent(project.content)}
			<Dialog.Footer>
				<Button
					onclick={() => (open = false)}
					class={buttonVariants({
						variant: 'outline',
						className: 'text-slate-900 dark:text-white'
					})}
				>
					Close
				</Button>
				<!-- For future statistics! -->
				<Button onclick={() => (open = false)} class="bg-slate-800 px-8 dark:bg-white"
					>Interesting!</Button
				>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
	<!-- Project details drawer - Mobile -->
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content class="max-h-[99svh]">
			<Drawer.Header>
				<Drawer.Title>{project.projectName}</Drawer.Title>
				<Drawer.Description>{project.description}</Drawer.Description>
			</Drawer.Header>
			<div class="mb-4 flex items-center justify-center gap-x-6 text-sm">
				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-1 hover:underline"
					>
						<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub Repository</span>
					</a>
				{/if}
				{#if project.liveUrl}
					<Separator orientation="vertical" />
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-1 hover:underline"
					>
						<Icon icon="octicon:link-24" class="size-4" /><span>Live Demo</span></a
					>
				{/if}
			</div>
			<div class="flex flex-wrap gap-x-2">
				<div class="mx-auto flex gap-x-1">{@render renderTechStack(project.techStack)}</div>
			</div>
			<div class="flex flex-col items-center justify-center gap-x-2 md:flex-row-reverse">
				<div
					class="mb-1 mt-4 flex w-fit flex-col items-center justify-center rounded dark:border-slate-800"
				>
					{#each project.images as image}
						<img
							src={image}
							alt={project.projectName}
							class="max-h-64 w-9/12 rounded-md border border-slate-300 object-cover p-0.5 md:max-h-36 md:w-auto"
						/>
					{/each}
				</div>
				<div class="md:w-8/12">
					{@render renderProjectContent(project.content)}
				</div>
			</div>
			<Dialog.Footer class="mx-6 mb-4 mt-2">
				<!-- For future statistics! -->
				<Button onclick={() => (open = false)}>Interesting!</Button>
			</Dialog.Footer>
		</Drawer.Content>
	</Drawer.Root>
{/if}

{#snippet renderTechStack(techStack: Project['techStack'])}
	{#each techStack as tech}
		<Badge>{tech}</Badge>
	{/each}
{/snippet}

{#snippet renderProjectContent(content: Project['content'])}
	{#if content && content.length}
		<div
			class="mx-auto mb-2 mt-4 max-h-80 w-full space-y-4 overflow-y-auto px-6 pb-3 md:max-h-36 lg:w-10/12"
		>
			{#each content as paragraph}
				<p class="mx-auto font-primary text-sm text-gray-700 dark:text-gray-100 sm:text-base">
					{paragraph}
				</p>
			{/each}
		</div>
	{/if}
{/snippet}
