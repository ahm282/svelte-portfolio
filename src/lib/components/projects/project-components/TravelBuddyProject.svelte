<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';
	import { Breadcrumb } from '$lib/components/ui/breadcrumb';

	const { project }: { project: Project } = $props();
</script>

<div class="travel-buddy-project">
	<!-- Navigation breadcrumb -->
	<Breadcrumb
		items={[
			{ href: '/', label: 'Home' },
			{ href: '/projects', label: 'Projects' }
		]}
		currentPage={project.projectName}
	/>

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
		<!-- <h1 class="font-primary text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
			{project.projectName}
		</h1>
		<p class="mt-4 text-base font-light leading-relaxed md:mt-5 md:w-4/5 md:text-lg">
			{project.description}
		</p> -->

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

	<!-- Project Layout - Split View with Tabs -->
	<div class="mb-10 overflow-hidden rounded-xl border dark:border-slate-800 md:mb-14">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<!-- Left column: Image display -->
			<div class="flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
				<div class="relative flex h-full w-full items-center justify-center">
					<img
						src={project.images[0]}
						alt="TravelBuddy Map Interface"
						class="h-full w-full object-contain p-4"
					/>
				</div>
			</div>

			<!-- Right column: Feature tabs -->
			<div class="bg-white p-4 dark:bg-zinc-950 sm:p-8">
				<div class="flex h-full flex-col">
					<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Key Features</h2>

					<!-- Tabs -->
					<div class="grid h-full gap-4">
						<div
							class="rounded-lg border bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:p-4"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 sm:size-10"
								>
									<Icon
										icon="lucide:map-pin"
										class="size-4 text-blue-600 dark:text-blue-400 sm:size-5"
									/>
								</div>
								<div>
									<h3 class="font-medium">Google Places Integration</h3>
									<p class="mt-1 text-sm text-muted-foreground">
										Leveraging Google Places API to find nearby tourist attractions and points of
										interest
									</p>
								</div>
							</div>
						</div>

						<div
							class="rounded-lg border bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:p-4"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 sm:size-10"
								>
									<Icon
										icon="lucide:star"
										class="size-4 text-amber-600 dark:text-amber-400 sm:size-5"
									/>
								</div>
								<div>
									<h3 class="font-medium">Favorites System</h3>
									<p class="mt-1 text-sm text-muted-foreground">
										Save and organize your favorite destinations for quick access
									</p>
								</div>
							</div>
						</div>

						<div
							class="rounded-lg border bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:p-4"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 sm:size-10"
								>
									<Icon
										icon="lucide:route"
										class="size-4 text-green-600 dark:text-green-400 sm:size-5"
									/>
								</div>
								<div>
									<h3 class="font-medium">Trip History</h3>
									<p class="mt-1 text-sm text-muted-foreground">
										Track your past trips and easily revisit places you've explored
									</p>
								</div>
							</div>
						</div>

						<div
							class="rounded-lg border bg-zinc-50 p-3 dark:border-zinc-800 dark:bg-zinc-900 sm:p-4"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex size-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 sm:size-10"
								>
									<Icon
										icon="lucide:globe"
										class="size-4 text-purple-600 dark:text-purple-400 sm:size-5"
									/>
								</div>
								<div>
									<h3 class="font-medium">Latest User Trips</h3>
									<p class="mt-1 text-sm text-muted-foreground">
										Discover recently created trips by other users on the home page
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- App Home Page Showcase -->
	<div>
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Simple & Intuitive UI</h2>
		<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each project.images.slice(1) as image, index}
				<div
					class="overflow-hidden rounded-lg border bg-white shadow-sm dark:border-slate-800 dark:bg-zinc-900"
				>
					<img
						src={image}
						alt={`TravelBuddy screenshot ${index + 2}`}
						class="h-48 w-full object-cover sm:h-52"
					/>
					<div class="p-4">
						<h3 class="text-sm font-medium">
							{index === 0
								? 'Home Feed with Latest Trips'
								: index === 1
									? 'Favorites & Trip History'
									: 'Detailed Location View'}
						</h3>
					</div>
				</div>
			{/each}
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
