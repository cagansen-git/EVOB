<script>
	import {  Lightbulb, Users, Target, Shield } from '@lucide/svelte';

	// Define your agency's core values
	const values = [
		{
			title: 'High Standarts',
			description:
				'We strive for excellence in every project we undertake, ensuring the highest quality outcomes for our clients.',
			icon: Target
		},
		{
			title: 'Communication',
			description:
				'We embrace creative thinking and innovative approaches to solve complex challenges and deliver unique solutions.',
			icon: Lightbulb
		},
		{
			title: 'Integrity',
			description:
				'We conduct our business with honesty, transparency, and ethical standards that build lasting trust.',
			icon: Shield
		},
		{
			title: 'Collaboration',
			description:
				'We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals.',
			icon: Users
		}
	];
</script>

<section id="ourValues" class="pb-xl">
	<div class="mx-auto max-w-7xl py-xl">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
			<!-- Left-aligned text description -->
			<div class="lg:col-span-4">
				<h2 class="mb-6 text-3xl  text-black md:text-4xl">Our Values</h2>
				<p class="mb-8 text-gray-700">
					Our core values define who we are and guide every decision we make. They represent our
					approach to delivering exceptional results for our clients.
				</p>
				<div class="h-1 w-20 bg-black"></div>
			</div>

			<!-- Values cards grid -->
			<div class="lg:col-span-8">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					{#each values as value}
						<div
							class="flex h-full flex-col border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-black rounded-sm"
						>
							<div class="mb-4">
								<svelte:component this={value.icon} size={24} class="text-black" />
							</div>
							<h3 class="mb-3 text-xl font-semibold text-black">{value.title}</h3>
							<p class="flex-grow text-gray-600">{value.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
