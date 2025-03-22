<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import EmailCard from './EmailCard.svelte';
	import LinkedInCard from './LinkedInCard.svelte';
	import WorkInterestCard from './WorkInterestCard.svelte';
</script>

<div class="mt-14">
	<Card.Root class="flex h-full flex-col">
		<Card.CardHeader>
			<Card.CardTitle class="text-center font-primary text-2xl font-bold"
				>Let's Connect</Card.CardTitle
			>
			<Card.CardDescription class="text-center text-base font-light dark:text-zinc-300"
				><span class="block">
					I'm a final-year Computer Science student passionate about full-stack development and
					DevOps.
				</span>
				<span class="mt-3 block">
					Feel free to reach out if you'd like to connect or discuss potential opportunities.
				</span></Card.CardDescription
			>
		</Card.CardHeader>
		<Card.CardContent class="flex flex-col items-center justify-between">
			<div
				class="mb-4 flex w-full flex-col items-center justify-between gap-y-4 lg:flex-row lg:gap-x-6 lg:gap-y-0"
			>
				<EmailCard />
				<LinkedInCard />
			</div>
			<WorkInterestCard />
		</Card.CardContent>
	</Card.Root>
</div>
