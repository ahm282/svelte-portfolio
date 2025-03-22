<script lang="ts">
	import Picture from '$lib/components/home/intro/Picture.svelte';
	import NameAndFunction from '$lib/components/home/intro/NameAndFunction.svelte';
	import LocationInfo from '$lib/components/home/intro/LocationInfo.svelte';
	import IconDrawer from '$lib/components/home/intro/IconDrawer.svelte';
	import Icon from '@iconify/svelte';
	import { getCurrentAge } from '$lib/utils';

	const age = getCurrentAge();
</script>

<div class="mt-6 rounded border-2 bg-white px-4 py-5 dark:bg-section">
	<!-- First row - Header -->
	<div class="flex flex-row gap-3 pb-5">
		<Picture />
		<!-- Text info -->
		<div class="flex w-full flex-row justify-between">
			<NameAndFunction />
			<LocationInfo />
		</div>
	</div>
	<!-- Second row - text -->
	<div class="text-pretty">
		<div class="flex items-center">
			<span>Hi there!</span>
			<Icon
				icon="fluent-emoji-flat:waving-hand-medium-light"
				class="mb-1.5 ms-1 size-6 transform-gpu duration-500 hover:animate-wave"
			/>
		</div>
		<div class="mt-4 flex flex-col gap-y-2 text-sm leading-relaxed md:text-base">
			<p>
				I'm a {age}-year-old final-year Computer Science student.
			</p>
			<p class="md:hidden">
				Currently, I'm focused on gaining experience in full-stack development, SysAdmin and DevOps.
			</p>
			<p class="hidden md:block">
				Currently, I'm focused on gaining experience in full-stack development, system
				administration and DevOps.
			</p>
			<p>
				In my free time, I enjoy working on personal projects, traveling, and learning new things.
			</p>
		</div>
	</div>
	<!-- Third row - links -->
	<div class="mt-5">
		<IconDrawer />
	</div>
</div>
