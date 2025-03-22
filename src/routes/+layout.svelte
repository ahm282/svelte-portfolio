<script lang="ts">
	import '../app.css';
	import '@fontsource-variable/inter';
	import '@fontsource-variable/noto-sans';
	import { ModeWatcher } from 'mode-watcher';
	import DotPattern from '$lib/components/ui/background/DotPattern.svelte';
	import Footer from '$lib/components/ui/footer/Footer.svelte';

	let { children } = $props();
</script>

<DotPattern
	width={20}
	height={20}
	cx={10}
	cy={10}
	cr={1}
	class="-z-50 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
/>
<ModeWatcher />
<div class={'mx-auto w-11/12 text-left md:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12'}>
	{@render children?.()}
</div>
<Footer />
