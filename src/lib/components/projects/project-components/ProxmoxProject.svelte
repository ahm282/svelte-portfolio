<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
</script>

<div class="proxmox-project">
	<!-- Navigation breadcrumb -->
	<div class="mb-10 flex items-center gap-x-2 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Project header section -->
	<div class="mb-14 border-b pb-10 dark:border-slate-800">
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
		<div class="mt-10">
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

	<!-- Homelab infrastructure visualization -->
	<div class="mb-14 rounded-lg border p-6 dark:border-slate-800">
		<h2 class="mb-6 text-xl font-semibold">Homelab Setup</h2>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="col-span-1 md:col-span-2">
				<!-- Server infrastructure diagram -->
				<div class="rounded-lg border bg-gradient-to-br from-slate-50 to-slate-100 p-5 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
					<div class="flex flex-col items-center gap-4">
						<div class="rounded-lg border bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
							<div class="flex items-center gap-2">
								<Icon icon="lucide:server" class="size-5 text-emerald-500" />
								<span class="font-medium">Proxmox Hypervisor</span>
							</div>
						</div>
						
						<Icon icon="lucide:arrow-down" class="size-5 text-muted-foreground" />
						
						<div class="grid grid-cols-1 gap-4 md:grid-cols-3 w-full">
							<div class="rounded-lg border bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
								<div class="flex flex-col items-center gap-1">
									<Icon icon="lucide:hard-drive" class="size-5 text-blue-500" />
									<span class="text-sm font-medium">VM: Web Server</span>
								</div>
							</div>
							<div class="rounded-lg border bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
								<div class="flex flex-col items-center gap-1">
									<Icon icon="lucide:database" class="size-5 text-amber-500" />
									<span class="text-sm font-medium">VM: Database</span>
								</div>
							</div>
							<div class="rounded-lg border bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
								<div class="flex flex-col items-center gap-1">
									<Icon icon="lucide:shield" class="size-5 text-red-500" />
									<span class="text-sm font-medium">VM: Firewall</span>
								</div>
							</div>
						</div>
						
						<Icon icon="lucide:arrow-down" class="size-5 text-muted-foreground" />
						
						<div class="w-full rounded-lg border bg-white p-3 shadow-sm dark:bg-slate-800 dark:border-slate-700">
							<div class="flex items-center justify-center gap-2">
								<Icon icon="lucide:globe" class="size-5 text-purple-500" />
								<span class="font-medium">Self-Hosted Services</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="col-span-1">
				<!-- Self-hosted services list -->
				<div class="rounded-lg border p-4 h-full dark:border-slate-700">
					<h3 class="mb-4 font-medium">Running Services</h3>
					<ul class="space-y-3">
						<li class="flex items-center gap-2 text-sm">
							<Icon icon="lucide:layout" class="size-4 text-sky-500" />
							<span>Portfolio Website</span>
						</li>
						<li class="flex items-center gap-2 text-sm">
							<Icon icon="lucide:message-square" class="size-4 text-emerald-500" />
							<span>AI Chatbot (OpenWebUI)</span>
						</li>
						<li class="flex items-center gap-2 text-sm">
							<Icon icon="lucide:film" class="size-4 text-amber-500" />
							<span>Jellyfin Media Server</span>
						</li>
						<li class="flex items-center gap-2 text-sm">
							<Icon icon="lucide:shield-alert" class="size-4 text-red-500" />
							<span>Pi-hole Ad Blocker</span>
						</li>
						<li class="flex items-center gap-2 text-sm">
							<Icon icon="lucide:file" class="size-4 text-indigo-500" />
							<span>NextCloud Storage</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<!-- Images section -->
	<Card.Root class="mb-14 border dark:border-slate-800">
		<Card.CardContent class="p-0">
			<div id="images" class="scrollbar-thin flex gap-5 overflow-x-auto p-8">
				{#each project.images as image, i}
					<div class="flex justify-center items-center">
						<img
							src={image}
							alt={`${project.projectName} screenshot ${i + 1}`}
							class="h-80 rounded-md border object-contain dark:border-slate-700 md:h-96"
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