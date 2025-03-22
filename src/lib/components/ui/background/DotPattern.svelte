<script lang="ts">
	import { cn } from '$lib/utils';
	let width: string | number = 16;
	let height: string | number = 16;
	let x = 0;
	let y = 0;
	let cx = 1;
	let cy = 1;
	let cr = 1;
	let fillColor = 'rgb(163 163 163 / 0.8)';

	let className: any = '';
	export { className as class };
	let id = crypto.randomUUID().toString().slice(0, 10);
</script>

<svg
	aria-hidden="true"
	class={cn('pointer-events-none absolute inset-0 h-full w-full ', className)}
	{...$$restProps}
	fill={fillColor}
>
	<defs>
		<pattern
			{id}
			{width}
			{height}
			patternUnits="userSpaceOnUse"
			patternContentUnits="userSpaceOnUse"
			{x}
			{y}
		>
			<circle id="pattern-circle" {cx} {cy} r={cr} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width={0} fill={`url(#${id})`} />
</svg>
