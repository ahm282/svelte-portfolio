<script lang="ts">
	import Badge from '$lib/components/projects/Badge.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import type { Project } from '$lib/types/project';
	import Icon from '@iconify/svelte';

	const { project }: { project: Project } = $props();
</script>

<div class="uc-project">
	<!-- Navigation breadcrumb -->
	<div
		class="mb-10 mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground md:mb-10"
	>
		<a href="/" class="hover:text-foreground">Home</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<a href="/projects" class="hover:text-foreground">Projects</a>
		<Icon icon="lucide:chevron-right" class="size-4" />
		<span class="text-foreground">{project.projectName}</span>
	</div>

	<!-- Project header section -->
	<div class="mb-10 border-b pb-6 dark:border-slate-800 md:mb-14 md:pb-10">
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
					<Icon icon="lucide:external-link" class="size-4" /><span>Live Demo</span>
				</a>
			{/if}
		</div>

		<!-- Technologies used -->
		<div>
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

	<!-- UML methodology visualization -->
	<div
		class="mb-10 rounded-lg border bg-white p-4 dark:border-slate-800 dark:bg-zinc-950 sm:p-6 md:mb-14"
	>
		<h2 class="mb-5 text-lg font-semibold sm:text-xl md:mb-6">Requirements Analysis Process</h2>
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<div class="flex flex-col items-center gap-3 text-center">
					<div
						class="flex size-12 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
					>
						<Icon icon="lucide:users" class="size-6" />
					</div>
					<h3 class="font-medium">Stakeholder Interviews</h3>
					<p class="text-sm text-muted-foreground">
						Gathering requirements from club members and management
					</p>
				</div>
			</div>

			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<div class="flex flex-col items-center gap-3 text-center">
					<div
						class="flex size-12 items-center justify-center rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
					>
						<Icon icon="lucide:file-text" class="size-6" />
					</div>
					<h3 class="font-medium">Requirements Documentation</h3>
					<p class="text-sm text-muted-foreground">
						Transforming needs into functional requirements
					</p>
				</div>
			</div>

			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<div class="flex flex-col items-center gap-3 text-center">
					<div
						class="flex size-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
					>
						<Icon icon="lucide:layout" class="size-6" />
					</div>
					<h3 class="font-medium">UML Modeling</h3>
					<p class="text-sm text-muted-foreground">Creating use case and class diagrams</p>
				</div>
			</div>

			<div class="rounded-lg border bg-muted/30 p-4 dark:border-slate-700">
				<div class="flex flex-col items-center gap-3 text-center">
					<div
						class="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
					>
						<Icon icon="lucide:monitor" class="size-6" />
					</div>
					<h3 class="font-medium">Wireframe Design</h3>
					<p class="text-sm text-muted-foreground">
						Prototyping the user interface with stakeholder feedback
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- UML diagram showcase -->
	<div class="mb-7">
		<div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
			<Card.Root class="border dark:border-slate-800">
				<Card.CardHeader>
					<Card.CardTitle>Use Case Diagram</Card.CardTitle>
					<Card.CardDescription>Modeling user interactions with the system</Card.CardDescription>
				</Card.CardHeader>
				<Card.CardContent>
					<div class="rounded-md border bg-muted/30 p-4 dark:border-slate-700">
						<div class="flex flex-col gap-4">
							<div class="flex items-center gap-2">
								<Icon icon="lucide:user" class="size-5 text-blue-500" />
								<span class="font-medium">Actors</span>
							</div>
							<ul class="ml-6 space-y-2 text-sm">
								<li class="list-disc">Club Member</li>
								<li class="list-disc">Club Admin</li>
								<li class="list-disc">Event Organizer</li>
							</ul>

							<div class="flex items-center gap-2">
								<Icon icon="lucide:clipboard-list" class="size-5 text-emerald-500" />
								<span class="font-medium">Key Use Cases</span>
							</div>
							<ul class="ml-6 space-y-2 text-sm">
								<li class="list-disc">Register for Membership</li>
								<li class="list-disc">Manage Events</li>
								<li class="list-disc">View Calendar</li>
								<li class="list-disc">Send Notifications</li>
							</ul>
						</div>
					</div>
				</Card.CardContent>
			</Card.Root>

			<Card.Root class="border dark:border-slate-800">
				<Card.CardHeader>
					<Card.CardTitle>Class Diagram</Card.CardTitle>
					<Card.CardDescription>Defining system structure and relationships</Card.CardDescription>
				</Card.CardHeader>
				<Card.CardContent>
					<div class="rounded-md border bg-muted/30 p-4 dark:border-slate-700">
						<div class="flex flex-col gap-4">
							<div class="flex items-center gap-2">
								<Icon icon="lucide:package" class="size-5 text-amber-500" />
								<span class="font-medium">Core Classes</span>
							</div>
							<ul class="ml-6 space-y-2 text-sm">
								<li class="list-disc">User</li>
								<li class="list-disc">Member</li>
								<li class="list-disc">Event</li>
								<li class="list-disc">Calendar</li>
								<li class="list-disc">Notification</li>
							</ul>

							<div class="flex items-center gap-2">
								<Icon icon="lucide:git-merge" class="size-5 text-purple-500" />
								<span class="font-medium">Relationships</span>
							</div>
							<ul class="ml-6 space-y-2 text-sm">
								<li class="list-disc">Inheritance: User → Member</li>
								<li class="list-disc">Composition: Calendar → Events</li>
								<li class="list-disc">Association: Member ↔ Event</li>
							</ul>
						</div>
					</div>
				</Card.CardContent>
			</Card.Root>
		</div>
	</div>

	<!-- Images section -->
	<Card.Root class="mb-10 border dark:border-slate-800 md:mb-14">
		<Card.CardContent class="p-0">
			<div
				id="images"
				class="scrollbar-thin flex items-center justify-center gap-3 overflow-x-auto p-4 sm:gap-5 sm:p-8"
			>
				{#each project.images as image, i}
					<div class="flex items-center justify-center">
						<img
							src={image}
							alt={`${project.projectName} screenshot ${i + 1}`}
							class="h-64 rounded-md border object-contain dark:border-slate-700 sm:h-80 md:h-96"
						/>
					</div>
				{/each}
			</div>
		</Card.CardContent>
	</Card.Root>

	<!-- Project description -->
	<div
		class="prose prose-zinc dark:prose-invert sm:prose-base lg:prose-lg mx-auto mb-12 max-w-none px-0 md:mb-16"
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
