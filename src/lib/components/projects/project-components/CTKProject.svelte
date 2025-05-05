<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
</script>

<div class="ctk-project">
	<!-- Navigation breadcrumb -->
	<div class="mb-10 mt-5 flex items-center gap-x-2 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Project header with charity theme -->
	<div class="mb-14">
		<div
			class="rounded-lg border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 px-5 py-8 dark:border-pink-900/30 dark:from-pink-950/20 dark:to-purple-950/20"
		>
			<div class="flex items-center gap-4">
				<div
					class="flex size-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/30"
				>
					<Icon icon="lucide:heart" class="size-6 text-pink-600 dark:text-pink-400" />
				</div>
				<div>
					<h1 class="font-primary text-3xl text-[1.6rem] font-extrabold leading-tight md:text-4xl">
						{project.projectName}
					</h1>
					<p class="text-sm text-pink-700 dark:text-pink-400">Charity Fundraiser Event</p>
				</div>
			</div>
			<p class="mt-6 text-lg font-light leading-relaxed md:w-4/5">{project.description}</p>

			<!-- Links section -->
			<div class="mt-8 flex flex-wrap items-center gap-4">
				{#if project.liveUrl}
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-2 rounded-full bg-pink-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-pink-700 dark:bg-pink-700 dark:hover:bg-pink-600"
					>
						<Icon icon="lucide:external-link" class="size-4" />
						<span>Visit Event Website</span>
					</a>
				{/if}

				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-pink-700 shadow-sm transition-colors hover:bg-pink-50 dark:bg-zinc-800 dark:text-pink-400 dark:hover:bg-zinc-700"
					>
						<Icon icon="octicon:mark-github-16" class="size-4" />
						<span>Source Code</span>
					</a>
				{/if}
			</div>
		</div>
	</div>

	<!-- Content area with screenshot and info -->
	<div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-12">
		<div class="md:col-span-8">
			<div class="overflow-hidden rounded-xl shadow-lg">
				<img src={project.images[0]} alt={project.projectName} class="w-full" />
			</div>

			<div class="prose prose-zinc dark:prose-invert md:prose-lg mt-10 max-w-none">
				{#each project.content as paragraph}
					<p class="mb-5 leading-relaxed">{paragraph}</p>
				{/each}
			</div>
		</div>

		<div class="md:col-span-4">
			<!-- Tech stack -->
			<div
				class="mb-10 rounded-lg border bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
			>
				<h3 class="mb-5 font-primary text-lg font-semibold">Technologies Used</h3>
				<div class="flex flex-wrap gap-2.5">
					{#each project.techStack as tech}
						<Badge>{tech}</Badge>
					{/each}
				</div>
			</div>

			<!-- Event details -->
			<div class="rounded-lg border bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
				<h3 class="mb-5 font-primary text-lg font-semibold">Event Details</h3>

				<div class="space-y-5">
					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
						>
							<Icon icon="lucide:calendar" class="size-4" />
						</div>
						<div>
							<p class="font-medium">Charity Comedy Event</p>
							<p class="text-sm text-muted-foreground">Fundraiser for cancer research</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
						>
							<Icon icon="lucide:landmark" class="size-4" />
						</div>
						<div>
							<p class="font-medium">Web Platform</p>
							<p class="text-sm text-muted-foreground">
								Online presence for event information and ticket sales
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3">
						<div
							class="mt-0.5 flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
						>
							<Icon icon="lucide:rocket" class="size-4" />
						</div>
						<div>
							<p class="font-medium">Volunteer Project</p>
							<p class="text-sm text-muted-foreground">
								Contributed development work to support the cause
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
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
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm text-muted-foreground hover:text-foreground"
				>
					<Icon icon="lucide:external-link" class="mr-1 inline size-4" />
					Visit Website
				</a>
			{/if}
		</div>
	</div>
</div>
