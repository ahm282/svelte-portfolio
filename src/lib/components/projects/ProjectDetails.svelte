<script lang="ts">
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
</script>

{#if isDesktop.current}
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
			<div class="flex items-center justify-center gap-x-2">
				{#each project.images as image}
					<img src={image} alt={project.projectName} class="w-5/12 rounded-sm" />
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
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
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
			<div class="mb-1 mt-4 flex flex-col items-center justify-center gap-y-2">
				{#each project.images as image}
					<img src={image} alt={project.projectName} class="w-10/12 rounded-sm" />
				{/each}
			</div>
			<div>
				{@render renderProjectContent(project.content)}
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
		<div class="mb-2 mt-4 max-h-80 space-y-4 overflow-y-auto px-6 pb-3 sm:px-0">
			{#each content as paragraph}
				<p class="font-primary text-sm text-gray-700 dark:text-gray-100 sm:text-base">
					{paragraph}
				</p>
			{/each}
		</div>
	{/if}
{/snippet}
