<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';

	// Define props for the accordion
	let { items = [] } = $props();

	// State to track which panel is currently open
	let activeIndex = $state(-1); // -1 means no panel is open initially

	// Function to toggle panel visibility
	/**
	 * @param {number} index
	 */
	function togglePanel(index: number) {
		activeIndex = activeIndex === index ? -1 : index;
	}
</script>

{#each items as item, index}
	<div class="border-b border-gray-200 last:border-b-0">
		<button
			class={`flex w-full cursor-pointer items-center justify-between bg-white py-4 text-left transition-colors hover:bg-gray-50 ${activeIndex === index ? 'bg-gray-50' : ''}`}
			onclick={() => togglePanel(index)}
			aria-expanded={activeIndex === index}
			aria-controls={`panel-${index}`}
		>
			<div class="flex items-center gap-4">
				<div
					class="flex h-8 min-h-8 w-8 min-w-8 items-center justify-center rounded-full bg-black text-sm font-semibold text-white"
				>
					{index + 1}
				</div>
				<span class="text-base font-medium">{item.title}</span>
			</div>
			<div class={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
				<ChevronDown size={20} />
			</div>
		</button>

		<div
			id={`panel-${index}`}
			class={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
			aria-hidden={activeIndex !== index}
		>
			<div class="py-4 pl-14 sm:pl-12">
				{item.content}
			</div>
		</div>
	</div>
{/each}
