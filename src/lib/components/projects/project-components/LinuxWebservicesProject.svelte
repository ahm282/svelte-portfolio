<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/types/project';
	import { Breadcrumb } from '$lib/components/ui/breadcrumb';

	const { project }: { project: Project } = $props();
</script>

<div class="linux-webservices-project">
	<!-- Navigation breadcrumb -->
	<Breadcrumb
		items={[
			{ href: '/', label: 'Home' },
			{ href: '/projects', label: 'Projects' }
		]}
		currentPage={project.projectName}
	/>

	<!-- Project header section -->
	<div class="pb-10">
		<h1 class="font-primary text-3xl font-extrabold leading-tight md:text-4xl">
			{project.projectName}
		</h1>
		<p class="mt-5 text-lg font-light leading-relaxed md:w-4/5">{project.description}</p>

		<!-- Links section -->
		<div class="mt-8 flex flex-wrap items-center gap-6">
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-x-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
				>
					<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub Repository</span>
				</a>
			{/if}
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-x-2 rounded-full bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
				>
					<Icon icon="lucide:external-link" class="size-4" /><span>Live Demo</span>
				</a>
			{/if}
		</div>

		<!-- Technologies used -->
		<div>
			<h3 class="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
				Technologies
			</h3>
			<div class="flex flex-wrap gap-2.5">
				{#each project.techStack as tech}
					<Badge>{tech}</Badge>
				{/each}
			</div>
		</div>
	</div>

	<!-- Custom diagram for Linux Web Services -->
	<div class="mb-10 rounded-lg border p-6 dark:border-slate-800">
		<h2 class="mb-6 text-xl font-semibold">Infrastructure Architecture</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<h3 class="mb-2 font-medium">Vagrant VM</h3>
				<div class="flex items-center gap-2 text-sm text-muted-foreground">
					<Icon icon="lucide:server" class="size-4" />
					<span>Kubernetes Control Plane</span>
				</div>
			</div>
			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<h3 class="mb-2 font-medium">Worker Nodes</h3>
				<div class="flex items-center gap-2 text-sm text-muted-foreground">
					<Icon icon="lucide:layers" class="size-4" />
					<span>Docker Containers</span>
				</div>
			</div>
			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<h3 class="mb-2 font-medium">Monitoring</h3>
				<div class="flex items-center gap-2 text-sm text-muted-foreground">
					<Icon icon="lucide:activity" class="size-4" />
					<span>Prometheus & Grafana</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Images section -->
	<Card.Root class="mb-10 border dark:border-slate-800">
		<Card.CardContent class="p-2">
			<div id="images" class="scrollbar-thin flex gap-5 overflow-x-auto lg:p-8">
				{#each project.images as image, i}
					<div class="flex items-center justify-center">
						<img
							src={image}
							alt={`${project.projectName} screenshot ${i + 1}`}
							class="rounded-md border object-contain dark:border-slate-700"
						/>
					</div>
				{/each}
			</div>
		</Card.CardContent>
	</Card.Root>

	<!-- Project description -->
	<div class="prose prose-zinc dark:prose-invert lg:prose-lg mx-auto mb-16 max-w-none">
		{#each project.content as paragraph}
			<p class="mb-5 leading-relaxed">{paragraph}</p>
		{/each}
	</div>

	<!-- Bottom navigation -->
	<div
		class="flex flex-wrap items-center justify-between gap-5 border-t pt-10 dark:border-slate-800"
	>
		<a
			href="/projects"
			class="flex items-center gap-x-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted dark:border-slate-800"
		>
			<Icon icon="lucide:arrow-left" class="size-4" />
			Back to Projects
		</a>

		<div class="flex items-center gap-x-6">
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-muted-foreground hover:text-foreground"
				>
					<Icon icon="octicon:mark-github-16" class="mr-1 inline size-4" />
					View Source
				</a>
			{/if}
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-muted-foreground hover:text-foreground"
				>
					<Icon icon="lucide:external-link" class="mr-1 inline size-4" />
					Visit Project
				</a>
			{/if}
		</div>
	</div>
</div>
