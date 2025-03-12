<script>
	import { ChevronRight } from '@lucide/svelte';

	// State to track which accordion item is active
	let activeIndex = $state(0);

	// Accordion data with titles and content
	const accordionItems = $state([
		{
			title: '"Our software expenses are too high."',
			content: "You're likely overpaying for software you don't fully use. We audit your tech stack, identify unnecessary costs, and recommend cost-effective alternatives—whether it’s switching to open-source tools, consolidating redundant software, or optimizing your licensing plans. Reduce expenses without sacrificing functionality."
		},
		{
			title: '"We’re not sure if AI will work for us"',
			content: "AI is transforming businesses across industries, but it’s not one-size-fits-all. We assess your operations and pinpoint AI-driven solutions that align with your goals. Whether it’s automation, data insights, or customer engagement, we ensure AI enhances efficiency, not complexity."

		},
		{
			title: '"Our manual processes are slowing us down."',
			content: "Repetitive tasks drain time and resources. We automate workflows—whether it's data entry, scheduling, or reporting—so your team can focus on higher-value work. Say goodbye to bottlenecks and hello to efficiency."

		},
		{
			title: '"We need smarter ways to track customer behavior."',
			content: "Understanding customer behavior is key to growth. We implement analytics tools that track user interactions, preferences, and engagement in real-time. This helps you make data-backed decisions and personalize your marketing strategy for better conversions."

		},
		{
			title: '"Our website does not convert visitors into customers."',
			content: "Your website should be a lead-generation machine. We analyze visitor behavior, optimize UX/UI, and implement data-driven CRO (Conversion Rate Optimization) strategies—so more visitors turn into paying customers."

		},
		{
			title: '"We need to improve our customer service."',
			content: "Slow responses and inefficiencies frustrate customers. We implement AI-powered chatbots and automation to provide instant, accurate, and 24/7 support—improving response times and customer satisfaction while reducing workload."

		},
		{
			title: '"We don’t have the data to improve our customer interactions."',
			content: "Your business generates valuable customer data—you just need the right tools to harness it. We integrate analytics tools that collect data and we make actionable insights, so you can refine customer interactions and enhance loyalty."

		},
		{
			title: '"I have more questions."',
			content: "We’re happy to help! Book a free consultation, and we’ll answer any questions you have about AI, automation, software optimization, and how we can support your business. No commitment—just clarity."

		},

	]);

	// Function to handle accordion item click
	/**
	 * @param {number} index
	 */
	function handleAccordionClick(index) {
		activeIndex = index;
	}
</script>

<section class="py-3xl pb-xl">
	<h3 class="mb-6 text-3xl font-semibold text-black md:text-4xl">Do you have Questions?</h3>

	<div class="flex flex-col gap-6 lg:flex-row">
		<!-- Accordion section (left side) -->
		<div class="w-full lg:w-1/2">
			{#each accordionItems as item, index}
				<div
					class="border-b border-gray-200 last:border-b-0"
					data-testid={`accordion-item-${index}`}
				>
					<button
						class="focus:ring-primary-500 flex w-full items-center justify-between py-4 text-left font-medium transition-all duration-200 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:outline-none cursor-pointer"
						onclick={() => handleAccordionClick(index)}
						aria-expanded={activeIndex === index}
						aria-controls={`content-${index}`}
					>
						<span>{item.title}</span>
						<ChevronRight
							class={`h-5 w-5 transition-transform duration-200 ${activeIndex === index ? 'rotate-90' : ''}`}
							aria-hidden="true"
						/>
					</button>
				</div>
			{/each}
		</div>

		<!-- Content section (right side) -->
		<div class="w-full rounded-lg bg-gray-50 p-6 lg:w-1/2">
			<div id={`content-${activeIndex}`} class="prose max-w-none ">
				<h4 class="mb-4 text-xl font-semibold">{accordionItems[activeIndex].title}</h4>
				<p>{accordionItems[activeIndex].content}</p>
			</div>
		</div>
	</div>
</section>
