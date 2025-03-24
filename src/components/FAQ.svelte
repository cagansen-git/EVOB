<script>
	// @ts-nocheck
	import Accordion from './Accordion.svelte';
	const questions = [
		{
			items: [
				{
					title: '"Do you provide ongoing support after the project is completed?"',
					content:
						'Yes, we offer ongoing maintenance and support to ensure your software and AI tools remain up-to-date and perform optimally. Our team is always available to provide updates, troubleshoot issues, and make improvements based on your evolving needs.'
				},
				{
					title: '"How can we track and measure customer satisfaction?"',
					content:
						'We integrate customer satisfaction tools such as surveys, feedback forms, and sentiment analysis into your system. This enables real-time tracking of customer satisfaction metrics, helping you quickly respond to issues and improve overall customer experience.'
				},
				{
					title: '"We don’t have actionable insights from our customer interactions."',
					content:
						'We help you collect, analyze, and visualize customer data to turn interactions into valuable business insights. Our reports and dashboards reveal trends, preferences, and pain points, allowing you to personalize and enhance customer experiences.'
				},
				{
					title: '"How long does it take to implement a custom software solution?"',
					content:
						'The timeline for custom software development depends on the complexity of your requirements. Typically, we deliver MVPs (minimum viable products) within 8-12 weeks, with continuous updates and improvements after the initial release.'
				},
				{
					title: '"Can analytics help us improve our product offerings?"',
					content:
						'Yes! By analyzing customer behavior and feedback, we help you identify which features and products are most valuable to your customers. This data-driven product development approach ensures you’re creating what your customers truly want, improving both customer satisfaction and business performance.'
				},
				{
					title: '"How do I know if AI will give me a good return on investment?"',
					content:
						'We work closely with you to evaluate the ROI of AI solutions. Through detailed cost-benefit analysis and small-scale pilot projects, we ensure AI applications will generate tangible results—whether in cost savings, productivity, or customer experience.'
				},
				{
					title: '"Will AI be difficult for my team to implement?"',
					content:
						'Our AI solutions are designed to be user-friendly, and we provide comprehensive training to your team. We also offer ongoing support to ensure a smooth adoption process. The goal is to enhance your team’s capabilities, not complicate their workflow.'
				},
				{
					title: '"How can we improve our customer retention"',
					content:
						'By using predictive analytics, we help you identify customer behaviors that lead to churn. With actionable insights, you can implement targeted strategies to improve customer retention, loyalty, and lifetime value.'
				},
				{
					title: '"Our software expenses are too high."',
					content:
						"You're likely overpaying for software you don't fully use. We audit your tech stack, identify unnecessary costs, and recommend cost-effective alternatives—whether it’s switching to open-source tools, consolidating redundant software, or optimizing your licensing plans. Reduce expenses without sacrificing functionality."
				},
				{
					title: '"What makes your AI services different from other agencies?"',
					content:
						'We specialize in holistic AI solutions that are deeply integrated with your business goals. Unlike generic AI services, we focus on tailored, cost-effective solutions, prioritizing transparency and long-term support. Plus, we emphasize data privacy, particularly with self-hosted and open-source solutions.'
				},
				{
					title: '"WHow do we optimize our customer experience through data?"',
					content:
						'We leverage customer analytics to identify pain points in the customer journey and recommend improvements. By using real-time data, we can personalize experiences, optimize touchpoints, and enhance customer satisfaction—leading to increased loyalty and higher retention.'
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
						'We’re happy to help! Book a free consultation, and we’ll answer any questions you have about AI, automation, software optimization, and how we can support your business. No commitment—just clarity.'
				}
			]
		}
	];
</script>

<section class="">
	<h3 class="mb-6 text-3xl text-black md:text-4xl">People also asked.</h3>

	{#each questions as question}
		<Accordion items={question.items} />
	{/each}
</section>
