<script lang="ts">
	import { onMount } from 'svelte';
	import { MediaQuery } from 'svelte/reactivity';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import Badge from './Badge.svelte';
	import Icon from '@iconify/svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { Project } from '$lib/types/project';

	let { project, open = $bindable(false) }: { project: Project; open?: boolean } = $props();

	const isDesktop = new MediaQuery('(min-width: 768px)');

	// Default to 'standard' layout if not specified
	const layout = project.layout || 'standard';

	// User agent detection for drawer and dialog rendering
	let userAgent = '';
	let isMobileUA = $state(false);

	// Image gallery state
	let activeImageIndex = $state(0);

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
			<div class="mt-6 flex items-center gap-x-6">
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
			<div class="mt-4 flex flex-wrap gap-x-2">
				<h3>Technologies used:</h3>
				<div class="flex gap-x-1">{@render renderTechStack(project.techStack)}</div>
			</div>

			<!-- Layout-specific content rendering -->
			{#if layout === 'standard'}
				<div
					id="images"
					class="my-4 flex w-full justify-center gap-4 overflow-x-auto rounded border border-slate-300 p-4 dark:border-slate-800"
				>
					{#each project.images as image}
						<img
							src={image}
							alt={project.projectName}
							class="h-64 flex-none rounded-sm object-contain"
						/>
					{/each}
				</div>
				{@render renderProjectContent(project.content)}
			{:else if layout === 'imageGallery'}
				<div class="my-4 w-full rounded border border-slate-300 p-4 dark:border-slate-800">
					<div class="mb-4 flex items-center justify-center">
						<img
							src={project.images[activeImageIndex]}
							alt={project.projectName}
							class="max-h-80 rounded-sm object-contain"
						/>
					</div>
					<div class="flex justify-center gap-2">
						{#each project.images as _, index}
							<button
								onclick={() => (activeImageIndex = index)}
								class={`size-3 rounded-full ${
									index === activeImageIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
								}`}
								aria-label={`Image ${index + 1}`}
							>
							</button>
						{/each}
					</div>
				</div>
				{@render renderProjectContent(project.content)}
			{:else if layout === 'fullWidth'}
				<div class="my-4 flex w-full justify-center">
					<img
						src={project.images[0]}
						alt={project.projectName}
						class="w-full rounded-md object-contain"
					/>
				</div>
				{@render renderProjectContent(project.content)}
			{:else if layout === 'splitView'}
				<div class="my-4 flex flex-row gap-4">
					<div class="flex w-1/2 items-center justify-center">
						<img
							src={project.images[0]}
							alt={project.projectName}
							class="h-full w-full rounded-md object-contain"
						/>
					</div>
					<div class="w-1/2">
						{@render renderProjectContent(project.content)}
					</div>
				</div>
			{/if}

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
				<div class="flex w-full overflow-x-auto px-4 pb-2">
					<div class="flex flex-nowrap gap-x-1">
						{@render renderTechStack(project.techStack)}
					</div>
				</div>
			</div>

			<!-- Mobile layout rendering -->
			{#if layout === 'standard' || layout === 'fullWidth'}
				<div class="flex flex-col items-center justify-center">
					<div class="my-4 px-4">
						<div class="flex justify-center gap-4 overflow-x-auto">
							{#each project.images as image}
								<img
									src={image}
									alt={project.projectName}
									class="h-48 flex-none rounded-md object-contain"
								/>
							{/each}
						</div>
					</div>
					<div class="w-full">
						{@render renderProjectContent(project.content)}
					</div>
				</div>
			{:else if layout === 'imageGallery'}
				<div class="flex flex-col items-center justify-center">
					<div class="my-4 w-full px-4">
						<div class="flex items-center justify-center">
							<img
								src={project.images[activeImageIndex]}
								alt={project.projectName}
								class="h-56 rounded-md object-contain"
							/>
						</div>
						<div class="mt-2 flex justify-center gap-2">
							{#each project.images as _, index}
								<button
									onclick={() => (activeImageIndex = index)}
									class={`size-3 rounded-full ${
										index === activeImageIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-700'
									}`}
									aria-label={`Image ${index + 1}`}
								>
								</button>
							{/each}
						</div>
					</div>
					<div class="w-full">
						{@render renderProjectContent(project.content)}
					</div>
				</div>
			{:else if layout === 'splitView'}
				<div class="flex flex-col items-center justify-center">
					<div class="my-4 px-4">
						<Tabs.Root value="image" class="w-full">
							<Tabs.TabsList class="w-full gap-x-1 border">
								<Tabs.TabsTrigger value="image" class="w-6/12">Image</Tabs.TabsTrigger>
								<Tabs.TabsTrigger value="description" class="w-6/12">Description</Tabs.TabsTrigger>
							</Tabs.TabsList>
							<div class="my-1 rounded">
								<Tabs.TabsContent value="image" class="flex justify-center rounded-lg">
									<img
										src={project.images[0]}
										alt={project.projectName}
										class="rounded-md object-contain"
									/>
								</Tabs.TabsContent>
								<Tabs.TabsContent value="description" class="rounded-lg">
									{@render renderProjectContent(project.content)}
								</Tabs.TabsContent>
							</div>
						</Tabs.Root>
					</div>
				</div>
			{/if}

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
