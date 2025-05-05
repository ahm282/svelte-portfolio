<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();

	// For image gallery
	let activeImageIndex = $state(0);

	// Handle image navigation
	const nextImage = () => {
		activeImageIndex = (activeImageIndex + 1) % project.images.length;
	};

	const prevImage = () => {
		activeImageIndex = (activeImageIndex - 1 + project.images.length) % project.images.length;
	};
</script>

<div class="wallet-project">
	<!-- Navigation breadcrumb -->
	<div class="mb-10 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Project header section -->
	<div class="mb-10 border-b pb-6 dark:border-slate-800 md:mb-14 md:pb-10">
		<h1 class="font-primary text-3xl font-extrabold leading-tight md:text-4xl">
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

	<!-- Image Gallery - Specific Layout for Wallet -->
	<div
		class="mb-10 rounded-lg border bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8 md:mb-14"
	>
		<div class="relative">
			<!-- Main image display -->
			<div class="flex items-center justify-center">
				<img
					src={project.images[activeImageIndex]}
					alt={`${project.projectName} screenshot ${activeImageIndex + 1}`}
					class="max-h-[350px] rounded-md object-contain md:max-h-[550px]"
				/>
			</div>

			<!-- Navigation arrows -->
			{#if project.images.length > 1}
				<button
					onclick={prevImage}
					class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/90 p-1.5 text-zinc-800 shadow-md hover:bg-white focus:outline-none dark:bg-zinc-800/90 dark:text-white dark:hover:bg-zinc-800 sm:left-4 sm:p-2.5"
					aria-label="Previous image"
				>
					<Icon icon="lucide:chevron-left" class="size-4 sm:size-5" />
				</button>
				<button
					onclick={nextImage}
					class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white/90 p-1.5 text-zinc-800 shadow-md hover:bg-white focus:outline-none dark:bg-zinc-800/90 dark:text-white dark:hover:bg-zinc-800 sm:right-4 sm:p-2.5"
					aria-label="Next image"
				>
					<Icon icon="lucide:chevron-right" class="size-4 sm:size-5" />
				</button>
			{/if}

			<!-- Indicator dots -->
			{#if project.images.length > 1}
				<div class="mt-3 flex justify-center gap-2 sm:gap-3 md:mt-8">
					{#each project.images as _, index}
						<button
							onclick={() => (activeImageIndex = index)}
							class={`size-2.5 rounded-full transition-all sm:size-3 ${
								index === activeImageIndex
									? 'scale-110 bg-primary'
									: 'bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-600'
							}`}
							aria-label={`Image ${index + 1}`}
						></button>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<!-- Project-specific content with unique styling -->
	<div class="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:gap-12 lg:grid-cols-12">
		<div class="lg:col-span-8">
			<div class="prose prose-zinc dark:prose-invert sm:prose-base md:prose-lg max-w-none">
				<h2 class="font-primary font-bold text-3xl mb-5">Personal Finance Management</h2>

				{#each project.content as paragraph, i}
					{#if i === project.content.length - 1}
						<p class="leading-relaxed">{paragraph}</p>
					{:else}
						<p class="mb-4 leading-relaxed md:mb-5">{paragraph}</p>
					{/if}
				{/each}
			</div>
		</div>

		<div class="lg:col-span-4">
			<div
				class="rounded-lg border bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-7"
			>
				<h3 class="mb-4 font-primary text-base font-semibold sm:text-lg md:mb-5">
					Architecture Features
				</h3>
				<ul class="space-y-3 md:space-y-4">
					<li class="flex items-start gap-2 sm:gap-3">
						<Icon
							icon="lucide:check-circle"
							class="mt-1 size-4 flex-shrink-0 text-green-500 sm:size-5"
						/>
						<span>Microservices architecture</span>
					</li>
					<li class="flex items-start gap-2 sm:gap-3">
						<Icon
							icon="lucide:check-circle"
							class="mt-1 size-4 flex-shrink-0 text-green-500 sm:size-5"
						/>
						<span>Multiple database technologies</span>
					</li>
					<li class="flex items-start gap-2 sm:gap-3">
						<Icon
							icon="lucide:check-circle"
							class="mt-1 size-4 flex-shrink-0 text-green-500 sm:size-5"
						/>
						<span>React-based frontend</span>
					</li>
					<li class="flex items-start gap-2 sm:gap-3">
						<Icon
							icon="lucide:check-circle"
							class="mt-1 size-4 flex-shrink-0 text-green-500 sm:size-5"
						/>
						<span>CI/CD pipeline</span>
					</li>
					<li class="flex items-start gap-2 sm:gap-3">
						<Icon
							icon="lucide:check-circle"
							class="mt-1 size-4 flex-shrink-0 text-green-500 sm:size-5"
						/>
						<span>Chaos Engineering testing</span>
					</li>
				</ul>
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
		</div>
	</div>
</div>
