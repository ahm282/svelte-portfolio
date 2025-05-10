<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import { Carousel } from '$lib/components/ui/carousel';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
</script>

<div class="kanban-board-project">
	<!-- Navigation breadcrumb -->
	<div class="mb-10 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Hero section with full-width image -->
	<div class="relative overflow-hidden rounded-xl">
		<img
			src={project.images[0]}
			alt={project.projectName}
			class="h-80 w-full object-cover object-center sm:h-96 md:h-[450px]"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10"></div>

		<!-- Overlay content -->
		<div class="absolute bottom-0 left-0 right-0 px-4 pb-8">
			<div class="flex flex-col gap-2">
				<h1 class="font-primary text-3xl font-extrabold leading-tight text-white md:text-4xl">
					{project.projectName}
				</h1>
				<p class="text-base font-light leading-relaxed text-white md:w-4/5 md:text-lg">
					{project.description}
				</p>
			</div>
		</div>
	</div>

	<!-- Project header section -->
	<div class="mb-10 border-b pb-6 dark:border-slate-800 md:mb-14 md:pb-10">
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
					<Icon icon="lucide:external-link" class="size-4" /><span>Live Demo</span>
				</a>
			{/if}
		</div>

		<!-- Technologies used -->
		<div class="mt-4 md:mt-4">
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

	<!-- Image Carousel with Thumbnails -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Project Screenshots</h2>

		<Carousel
			images={project.images}
			imageAltPrefix="Kanban Board screenshot"
			autoplay={false}
			showThumbnails={true}
		/>
	</div>

	<!-- Features Section -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Key Features</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
					>
						<Icon icon="lucide:layout-dashboard" class="size-5 text-blue-600 dark:text-blue-400" />
					</div>
					<h3 class="text-lg font-medium">Kanban Board Visualization</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Organize tasks with a visual Kanban board featuring draggable cards and customizable
					columns
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
					>
						<Icon icon="lucide:users" class="size-5 text-green-600 dark:text-green-400" />
					</div>
					<h3 class="text-lg font-medium">Real-time Collaboration</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Seamless collaboration with team members through Socket.io for instant updates across
					devices
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30"
					>
						<Icon icon="lucide:flag" class="size-5 text-purple-600 dark:text-purple-400" />
					</div>
					<h3 class="text-lg font-medium">Task Priority</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Assign and visualize priority levels to tasks to help teams focus on what matters most
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30"
					>
						<Icon icon="lucide:accessibility" class="size-5 text-amber-600 dark:text-amber-400" />
					</div>
					<h3 class="text-lg font-medium">Accessibility</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Fully accessible interface with keyboard navigation, screen reader support, and high
					contrast options
				</p>
			</div>
		</div>
	</div>

	<!-- Project content -->
	<div
		class="prose prose-zinc dark:prose-invert sm:prose-base md:prose-lg mb-12 max-w-none md:mb-16"
	>
		{#each project.content as paragraph}
			<p class="mb-4 leading-relaxed md:mb-5">{paragraph}</p>
		{/each}
	</div>

	<!-- Technical Architecture Section -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Technical Architecture</h2>
		<div class="overflow-hidden rounded-xl border dark:border-slate-800">
			<div class="grid grid-cols-1 md:grid-cols-3">
				<div class="border-b border-r p-6 dark:border-slate-800 md:border-b-0">
					<h3 class="mb-3 text-lg font-medium">Frontend</h3>
					<ul class="space-y-2 text-muted-foreground">
						<li class="flex items-center gap-2">
							<Icon icon="logos:nextjs-icon" class="size-5" />
							<span>Next.js for SSR & routing</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="logos:typescript-icon" class="size-5" />
							<span>TypeScript for type safety</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="logos:tailwindcss-icon" class="size-5" />
							<span>Tailwind CSS for styling</span>
						</li>
					</ul>
				</div>

				<div class="border-b border-r p-6 dark:border-slate-800 md:border-b-0">
					<h3 class="mb-3 text-lg font-medium">Backend</h3>
					<ul class="space-y-2 text-muted-foreground">
						<li class="flex items-center gap-2">
							<Icon icon="logos:express" class="size-5 rounded bg-white px-0.5" />
							<span>Express.js REST API</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="logos:socket-io" class="size-5" />
							<span>Socket.io for real-time</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="logos:jwt-icon" class="size-5" />
							<span>JWT authentication</span>
						</li>
					</ul>
				</div>

				<div class="p-6">
					<h3 class="mb-3 text-lg font-medium">Database</h3>
					<ul class="space-y-2 text-muted-foreground">
						<li class="flex items-center gap-2">
							<Icon icon="logos:mongodb-icon" class="size-5" />
							<span>MongoDB for data storage</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="simple-icons:mongoose" class="size-5" />
							<span>Mongoose ODM</span>
						</li>
						<li class="flex items-center gap-2">
							<Icon icon="lucide:database" class="size-5" />
							<span>Data validation & indexing</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
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
					Visit Project
				</a>
			{/if}
		</div>
	</div>
</div>
