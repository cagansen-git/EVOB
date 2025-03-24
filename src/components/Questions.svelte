<script>
	// @ts-nocheck
	import Accordion from './Accordion.svelte';

	const questions = [
		{
			items: [
				{
					title: '"Our software expenses are too high."',
					content:
						"You're likely overpaying for software you don't fully use. We audit your tech stack, identify unnecessary costs, and recommend cost-effective alternatives—whether it's switching to open-source tools, consolidating redundant software, or optimizing your licensing plans. Reduce expenses without sacrificing functionality."
				},
				{
					title: '"We’re not sure if AI will work for us"',
					content:
						'AI is transforming businesses across industries, but it’s not one-size-fits-all. We assess your operations and pinpoint AI-driven solutions that align with your goals. Whether it’s automation, data insights, or customer engagement, we ensure AI enhances efficiency, not complexity.'
				},
				{
					title: '"Our manual processes are slowing us down."',
					content:
						"Repetitive tasks drain time and resources. We automate workflows—whether it's data entry, scheduling, or reporting—so your team can focus on higher-value work. Say goodbye to bottlenecks and hello to efficiency."
				},
				{
					title: '"We need smarter ways to track customer behavior."',
					content:
						'Understanding customer behavior is key to growth. We implement analytics tools that track user interactions, preferences, and engagement in real-time. This helps you make data-backed decisions and personalize your marketing strategy for better conversions.'
				},
				{
					title: '"Our website does not convert visitors into customers."',
					content:
						'Your website should be a lead-generation machine. We analyze visitor behavior, optimize UX/UI, and implement data-driven CRO (Conversion Rate Optimization) strategies—so more visitors turn into paying customers.'
				},
				{
					title: '"We need to improve our customer service."',
					content:
						'Slow responses and inefficiencies frustrate customers. We implement AI-powered chatbots and automation to provide instant, accurate, and 24/7 support—improving response times and customer satisfaction while reducing workload.'
				},
				{
					title:
						'"We need a custom software solution, but we are afraid of the cost and complexity."',
					content:
						"Off-the-shelf software often forces you to adapt to it. We build custom software that adapts to you. Our approach is different: we focus on your specific needs, eliminating unnecessary features and bloat. This results in a more efficient, cost-effective solution in the long run. Plus, you own the software and the data – no more recurring licensing fees or vendor dependence. We also provide ongoing maintenance and support, so you're never left stranded."
				},
				{
					title: '"We don’t have the data to improve our customer interactions."',
					content:
						'Your business generates valuable customer data—you just need the right tools to harness it. We integrate analytics tools that collect data and we make actionable insights, so you can refine customer interactions and enhance loyalty.'
				},
				{
					title: '"We need something else."',
					content:
						'We’re happy to help! Book a free consultation, and we’ll answer any questions you have about AI, automation, software optimization, and how we can support your business.'
				}
			]
		}
	];

</script>

<section class="">
	<h3 class="mb-6 text-2xl md:text-4xl">Facing These Business Challenges? We Can Help.</h3>

	{#each questions as question}
		<Accordion items={question.items} />
	{/each}
</section>
