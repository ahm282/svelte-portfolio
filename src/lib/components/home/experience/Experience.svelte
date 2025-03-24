<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Education from '$lib/components/home/experience/Education.svelte';
	import Work from '$lib/components/home/experience/Work.svelte';
</script>

<div class="mx-auto my-5">
	<Tabs.Root value="work" class="w-full">
		<Tabs.TabsList class="w-full gap-x-1 border">
			<Tabs.TabsTrigger value="work" class="w-6/12">Work</Tabs.TabsTrigger>
			<Tabs.TabsTrigger value="education" class="w-6/12">Education</Tabs.TabsTrigger>
		</Tabs.TabsList>
		<div class="my-1 rounded bg-white dark:bg-transparent">
			<Tabs.TabsContent value="education" class="rounded-lg border">
				<Education />
			</Tabs.TabsContent>
			<Tabs.TabsContent value="work" class="rounded-lg border">
				<Work />
			</Tabs.TabsContent>
		</div>
	</Tabs.Root>
</div>
