<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';
	import { Breadcrumb } from '$lib/components/ui/breadcrumb';

	const { project }: { project: Project } = $props();
</script>

<div class="wtc-project">
	<!-- Navigation breadcrumb -->
	<Breadcrumb
		items={[
			{ href: '/', label: 'Home' },
			{ href: '/projects', label: 'Projects' }
		]}
		currentPage={project.projectName}
	/>

	<!-- Project header section -->
	<div class="mb-14 border-b pb-10 dark:border-slate-800 md:mb-14 md:pb-10">
		<h1 class="font-primary text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
			{project.projectName}
		</h1>
		<p class="mt-4 text-base font-light leading-relaxed md:mt-5 md:w-4/5 md:text-lg">
			{project.description}
		</p>

		<!-- Links section -->
		<div class="mt-6 flex flex-wrap items-center gap-3 md:mt-8 md:gap-6">
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-x-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 sm:px-5 sm:py-2.5"
				>
					<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub Repository</span>
				</a>
			{/if}
			{#if project.liveUrl}
				<a
					href={project.liveUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="flex items-center gap-x-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 sm:px-5 sm:py-2.5"
				>
					<Icon icon="lucide:external-link" class="size-4" /><span>Visit Website</span>
				</a>
			{/if}
		</div>

		<div class="relative overflow-hidden sm:h-[300px] md:h-[450px]">
			<img
				src={project.images[0]}
				alt="WTC-Roland Club Website"
				class="h-full w-full rounded-lg object-contain object-center md:object-cover"
			/>
		</div>

		<!-- Technologies used -->
		<div class="mt-8 md:mt-10">
			<h3 class="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground md:mb-4">
				Technologies
			</h3>
			<div class="flex flex-wrap gap-2 md:gap-2.5">
				{#each project.techStack as tech}
					<Badge>{tech}</Badge>
				{/each}
			</div>
		</div>
	</div>

	<!-- Feature showcase -->
	<div class="mb-10 md:mb-14">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Key Features</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 sm:size-12"
					>
						<Icon icon="lucide:layout" class="size-5 text-blue-600 dark:text-blue-400 sm:size-6" />
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Simple Layout</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Clean and straightforward design focused on providing essential information
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 sm:size-12"
					>
						<Icon
							icon="lucide:calendar"
							class="size-5 text-amber-600 dark:text-amber-400 sm:size-6"
						/>
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Event Display</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Calendar showing upcoming club rides and events
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 sm:size-12"
					>
						<Icon
							icon="lucide:shield"
							class="size-5 text-green-600 dark:text-green-400 sm:size-6"
						/>
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Admin Panel</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Basic administrative capabilities for club managers. Allowing them to manage events
							and memberships
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 sm:size-12"
					>
						<Icon
							icon="lucide:image"
							class="size-5 text-purple-600 dark:text-purple-400 sm:size-6"
						/>
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Photo Gallery</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Simple gallery to showcase club rides and events photos
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900/30 sm:size-12"
					>
						<Icon icon="lucide:mail" class="size-5 text-cyan-600 dark:text-cyan-400 sm:size-6" />
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Contact Form</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Simple contact form allowing visitors to get in touch with club officials
						</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg border bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6">
				<div class="flex gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 sm:size-12"
					>
						<Icon icon="lucide:flag" class="size-5 text-red-600 dark:text-red-400 sm:size-6" />
					</div>
					<div>
						<h3 class="text-base font-medium sm:text-lg">Live Rankings</h3>
						<p class="mt-2 text-sm text-muted-foreground">
							Displaying live rankings of teams and riders during events
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Project description -->
	<div
		class="prose prose-zinc dark:prose-invert sm:prose-base md:prose-lg mb-12 max-w-none md:mb-16"
	>
		{#each project.content as paragraph}
			<p class="mb-4 leading-relaxed md:mb-5">{paragraph}</p>
		{/each}
	</div>

	<!-- Bottom navigation -->
	<div
		class="flex flex-wrap items-center justify-between gap-4 border-t pt-6 dark:border-slate-800 md:gap-5 md:pt-10"
	>
		<a
			href="/projects"
			class="flex items-center gap-x-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted dark:border-slate-800 sm:px-5 sm:py-2.5"
		>
			<Icon icon="lucide:arrow-left" class="size-4" />
			Back to Projects
		</a>

		<div class="flex items-center gap-x-4 md:gap-x-6">
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
					Visit Website
				</a>
			{/if}
		</div>
	</div>
</div>
