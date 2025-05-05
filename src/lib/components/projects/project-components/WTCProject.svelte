<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
</script>

<div class="wtc-project">
	<!-- Navigation breadcrumb -->
	<div class="mb-10 flex items-center gap-x-2 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Split view header -->
	<div class="mb-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
		<div>
			<div class="rounded-xl border bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
				<img src={project.images[0]} alt={project.projectName} class="rounded-lg" />
			</div>
		</div>

		<div>
			<h1 class="font-primary text-3xl font-extrabold leading-tight md:text-4xl">
				{project.projectName}
			</h1>
			<p class="mt-5 text-lg font-light leading-relaxed">{project.description}</p>

			<!-- Links section -->
			<div class="mt-8 flex items-center gap-4">
				{#if project.liveUrl}
					<a
						href={project.liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
					>
						Visit Website
					</a>
				{/if}

				{#if project.githubUrl}
					<a
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-x-2 rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-muted"
					>
						<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub</span>
					</a>
				{/if}
			</div>

			<div class="mt-10">
				<h3 class="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
					Built with
				</h3>
				<div class="flex flex-wrap gap-2.5">
					{#each project.techStack as tech}
						<Badge>{tech}</Badge>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Main content with custom styling -->
	<div class="mb-16">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
			<div class="col-span-2">
				<div class="prose prose-zinc dark:prose-invert md:prose-lg max-w-none">
					<h2 class="mb-6 font-primary text-2xl font-bold">Club Management Platform</h2>

					{#each project.content as paragraph}
						<p class="mb-5 leading-relaxed">{paragraph}</p>
					{/each}
				</div>
			</div>

			<div class="col-span-1">
				<!-- Feature cards -->
				<div class="space-y-7">
					<div
						class="rounded-lg border bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
					>
						<div
							class="mb-4 inline-flex rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
						>
							<Icon icon="lucide:calendar" class="size-6" />
						</div>
						<h3 class="mb-3 font-primary text-lg font-semibold">Event Management</h3>
						<p class="text-muted-foreground">
							Create and manage club events with detailed information and attendee tracking.
						</p>
					</div>

					<div
						class="rounded-lg border bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
					>
						<div
							class="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400"
						>
							<Icon icon="lucide:users" class="size-6" />
						</div>
						<h3 class="mb-3 font-primary text-lg font-semibold">Membership Tracking</h3>
						<p class="text-muted-foreground">
							Manage member profiles, track dues, and handle membership renewals.
						</p>
					</div>

					<div
						class="rounded-lg border bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
					>
						<div
							class="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
						>
							<Icon icon="lucide:mail" class="size-6" />
						</div>
						<h3 class="mb-3 font-primary text-lg font-semibold">Email System</h3>
						<p class="text-muted-foreground">
							Send notifications and updates to members with customizable email templates.
						</p>
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
