<script lang="ts">
	import Icon from '@iconify/svelte';
	import Badge from '$lib/components/projects/Badge.svelte';
	import { Carousel } from '$lib/components/ui/carousel';
	import type { Project } from '$lib/types/project';
	import { Breadcrumb } from '$lib/components/ui/breadcrumb';

	const { project }: { project: Project } = $props();
</script>

<div class="wallet-project">
	<!-- Navigation breadcrumb -->
	<Breadcrumb
		items={[
			{ href: '/', label: 'Home' },
			{ href: '/projects', label: 'Projects' }
		]}
		currentPage={project.projectName}
	/>

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
					class="flex items-center gap-x-2 rounded-full border bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 sm:px-5 sm:py-2.5"
				>
					<Icon icon="octicon:mark-github-16" class="size-4" /><span>GitHub Repository</span>
				</a>
			{/if}

			<!-- Thesis PDF button -->
			<a
				href="/assets/docs/wallet_thesis.pdf"
				target="_blank"
				class="flex items-center gap-x-2 rounded-full border bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 sm:px-5 sm:py-2.5"
			>
				<Icon icon="lucide:file-text" class="size-4" /><span>View Thesis PDF</span>
			</a>
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

	<!-- Image Carousel with Thumbnails -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Project Screenshots</h2>

		<Carousel
			images={project.images}
			imageAltPrefix="Wallet screenshot"
			autoplay={false}
			showThumbnails={true}
		/>
	</div>

	<!-- Project content -->
	<div
		class="prose prose-zinc dark:prose-invert sm:prose-base md:prose-lg mb-12 max-w-none md:mb-16"
	>
		{#each project.content as paragraph}
			<p class="mb-4 leading-relaxed md:mb-5">{paragraph}</p>
		{/each}
	</div>

	<!-- Technology Stack & Learning Goals Section -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Bachelor Thesis Project</h2>
		<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
			<div class="flex flex-col gap-6">
				<p>
					I developed this project as part of my bachelor thesis at Häme University of Applied
					Sciences in Finland. It gave me a chance to work with technologies I wanted to explore
					further. I built the backend services using both NestJS and Spring Boot - two frameworks I
					was eager to learn.
				</p>
				<p>
					NestJS offered an opinionated TypeScript-based approach that felt similar to Angular,
					while Spring Boot improved my Java skills and enterprise pattern understanding.
				</p>
				<div class="flex justify-center">
					<img
						src="/assets/projects/wallet/wallet_architecture.webp"
						alt="Wallet Application Architecture Diagram"
						class="max-w-full rounded-md object-contain transition-shadow duration-300 hover:shadow dark:border dark:border-slate-700"
					/>
				</div>
				<div class="flex flex-col gap-6">
					<p>
						The diagram shows the system architecture I designed. The microservices communicate with
						each other using RESTful APIs, and authentication is implemented with Google OAuth2.
					</p>
					<p>
						The project was initially planned to be hosted on Google Cloud Platform. I'm planning on
						further improving this project soon by adding new features and refining the
						architecture.
					</p>
				</div>
				<div class="mt-2 flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
					<p class="flex flex-col gap-1 md:w-8/12">
						<span>Thesis Title:</span>
						<span class="text-sm font-light md:text-base"
							>From Monolith to Microservices: Building Scalable Applications with Kubernetes,
							CI/CD, and Chaos Engineering
						</span>
					</p>
					<a
						href="/assets/docs/wallet_thesis.pdf"
						target="_blank"
						class="flex h-fit w-fit items-center gap-x-2 rounded-md bg-zinc-100 px-3 py-2 font-primary text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
					>
						<Icon icon="lucide:file-text" class="size-4" />
						<span class="">View Thesis PDF</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Architecture Features Section -->
	<div class="mb-12 md:mb-16">
		<h2 class="mb-6 text-xl font-semibold sm:text-2xl">Architecture Features</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30"
					>
						<Icon icon="lucide:layout-dashboard" class="size-5 text-blue-600 dark:text-blue-400" />
					</div>
					<h3 class="text-lg font-medium">Microservices Architecture</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Built with scalable, independently deployable microservices for flexibility and resilience
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
					>
						<Icon icon="lucide:database" class="size-5 text-green-600 dark:text-green-400" />
					</div>
					<h3 class="text-lg font-medium">Multi-Database Strategy</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Leverages different database technologies optimized for specific services' data
					requirements
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30"
					>
						<Icon icon="logos:react" class="size-5" />
					</div>
					<h3 class="text-lg font-medium">React-Based Frontend</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Responsive and interactive user interface built with React and modern frontend
					technologies
				</p>
			</div>

			<div class="rounded-lg border bg-card p-6 dark:border-slate-800">
				<div class="flex items-center gap-4">
					<div
						class="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30"
					>
						<Icon icon="lucide:git-branch" class="size-5 text-amber-600 dark:text-amber-400" />
					</div>
					<h3 class="text-lg font-medium">CI/CD Pipeline</h3>
				</div>
				<p class="mt-3 text-muted-foreground">
					Automated testing and deployment workflows for reliable and consistent releases
				</p>
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
