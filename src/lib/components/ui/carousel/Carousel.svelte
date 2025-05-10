<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// Props
	const {
		images = [],
		imageAltPrefix = 'Image',
		autoplay = true,
		interval = 5000,
		showThumbnails = true
	} = $props();

	// State for carousel
	let currentImageIndex = $state(0);
	let carouselInterval: ReturnType<typeof setInterval> | null = null;

	// Navigation functions for carousel
	function nextImage() {
		currentImageIndex = (currentImageIndex + 1) % images.length;
	}

	function prevImage() {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
	}

	// Auto-rotate carousel
	function startCarouselInterval() {
		if (!autoplay) return;

		carouselInterval = setInterval(() => {
			nextImage();
		}, interval);
	}

	// Set up and clean up carousel interval
	onMount(() => {
		startCarouselInterval();

		return () => {
			if (carouselInterval) {
				clearInterval(carouselInterval);
			}
		};
	});
</script>

<div class="carousel">
	<!-- Main Carousel -->
	<div class="relative mb-4 overflow-hidden rounded-xl border dark:border-slate-800">
		<div class="relative aspect-video">
			<!-- Main Image -->
			<div class="h-full w-full">
				<img
					src={images[currentImageIndex]}
					alt={`${imageAltPrefix} ${currentImageIndex + 1}`}
					class="h-full w-full object-contain"
				/>
			</div>

			<!-- Navigation buttons -->
			<button
				class="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-white/10 dark:hover:bg-white/20 md:h-10 md:w-10"
				onclick={(e) => {
					e.stopPropagation();
					prevImage();
				}}
				aria-label="Previous image"
			>
				<Icon icon="lucide:chevron-left" class="size-5" />
			</button>
			<button
				class="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:bg-white/10 dark:hover:bg-white/20 md:h-10 md:w-10"
				onclick={(e) => {
					e.stopPropagation();
					nextImage();
				}}
				aria-label="Next image"
			>
				<Icon icon="lucide:chevron-right" class="size-5" />
			</button>

			<!-- Image counter -->
			<div
				class="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white dark:bg-white/20"
			>
				{currentImageIndex + 1} / {images.length}
			</div>
		</div>
	</div>

	<!-- Thumbnails -->
	{#if showThumbnails && images.length > 1}
		<div class="w-full overflow-hidden">
			<div
				class="scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 mx-1 flex gap-2 overflow-x-auto p-2 md:gap-3 md:pb-4"
			>
				{#each images as image, i}
					<button
						class="aspect-video w-1/4 flex-none snap-start overflow-hidden rounded-lg border {i ===
						currentImageIndex
							? 'ring-1 ring-primary ring-offset-1'
							: ''} dark:border-slate-800"
						onclick={() => {
							currentImageIndex = i;
						}}
						aria-label={`View ${imageAltPrefix.toLowerCase()} ${i + 1}`}
					>
						<img
							src={image}
							alt={`${imageAltPrefix} thumbnail ${i + 1}`}
							class="h-full w-full object-cover"
						/>
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
