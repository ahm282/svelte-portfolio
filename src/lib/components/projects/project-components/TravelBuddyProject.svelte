<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import type { Project } from '$lib/types/project';

	const { project }: { project: Project } = $props();
</script>

<div class="travel-buddy-project">
	<!-- Hero section with full-width image -->
	<div class="relative mb-14 overflow-hidden rounded-xl">
		<img
			src={project.images[0]}
			alt={project.projectName}
			class="h-80 w-full object-cover object-center sm:h-96 md:h-[450px]"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10"></div>

		<!-- Overlay content -->
		<div class="absolute bottom-0 left-0 right-0 p-8 md:p-10">
			<div class="flex flex-col gap-2">
				<div class="mb-5 flex flex-wrap gap-2">
					{#each project.techStack as tech}
						<Badge>{tech}</Badge>
					{/each}
				</div>
				<h1 class="font-primary text-3xl font-extrabold leading-tight text-white md:text-4xl">
					{project.projectName}
				</h1>
				<p class="mt-3 text-lg font-light leading-relaxed text-white/90 md:w-3/4 lg:w-1/2">
					{project.description}
				</p>
			</div>
		</div>
	</div>

	<!-- Navigation breadcrumb -->
	<div class="mb-10 flex items-center gap-x-2 text-sm text-muted-foreground">
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Project content with mobile mockup -->
	<div class="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2">
		<div class="order-2 md:order-1">
			<div class="prose prose-zinc dark:prose-invert md:prose-lg max-w-none">
				<h2 class="mb-6 font-primary text-2xl font-bold">AI-Powered Travel Planning</h2>

				{#each project.content as paragraph}
					<p class="mb-5 leading-relaxed">{paragraph}</p>
				{/each}

				<h3 class="mb-5 mt-10 font-primary text-xl font-semibold">Key Features</h3>
				<ul class="space-y-3">
					<li class="flex items-start gap-2">
						<Icon
							icon="lucide:check"
							class="mt-1 size-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
						/>
						<span>AI-powered destination recommendations</span>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							icon="lucide:check"
							class="mt-1 size-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
						/>
						<span>Personalized trip planning</span>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							icon="lucide:check"
							class="mt-1 size-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
						/>
						<span>History of past trips</span>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							icon="lucide:check"
							class="mt-1 size-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
						/>
						<span>Bookmark favorite destinations</span>
					</li>
					<li class="flex items-start gap-2">
						<Icon
							icon="lucide:check"
							class="mt-1 size-5 flex-shrink-0 text-emerald-600 dark:text-emerald-500"
						/>
						<span>Integrated with Google Maps</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="order-1 md:order-2">
			<!-- Custom mobile phone mockup -->
			<div class="flex justify-center px-4 py-5">
				<div
					class="relative mx-auto h-[600px] w-[300px] rounded-[2.5rem] border-8 border-zinc-800 bg-zinc-800 shadow-xl dark:border-zinc-700 dark:bg-zinc-700"
				>
					<!-- Notch -->
					<div
						class="absolute left-1/2 top-0 h-6 w-40 -translate-x-1/2 transform rounded-b-lg bg-zinc-800 dark:bg-zinc-700"
					></div>

					<!-- Power button -->
					<div
						class="absolute -right-4 top-28 h-16 w-2 rounded-r-lg bg-zinc-800 dark:bg-zinc-600"
					></div>

					<!-- Volume buttons -->
					<div
						class="absolute -left-4 top-20 h-12 w-2 rounded-l-lg bg-zinc-800 dark:bg-zinc-600"
					></div>
					<div
						class="absolute -left-4 top-40 h-12 w-2 rounded-l-lg bg-zinc-800 dark:bg-zinc-600"
					></div>

					<!-- Screen content -->
					<div class="h-full w-full overflow-hidden rounded-[2rem] bg-white p-2">
						<img
							src={project.images[0]}
							alt={project.projectName}
							class="h-full w-full rounded-[1.8rem] object-cover"
						/>
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
	</div>
</div>
