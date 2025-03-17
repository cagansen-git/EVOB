<script>
	import Accordion from '../../components/Accordion.svelte';

	// Service data with titles and accordion items
	const services = [
		{
			title: 'Software Services',
			items: [
				{
					title: 'Custom Software Development',
					content:
						'We design, develop, and deploy software solutions tailored to your unique business needs. Whether you need a brand-new application or improvements to your existing system, we build scalable, high-performance software that drives efficiency and growth.'
				},
				{
					title: 'Software Migration & Replacement',
					content: 'We seamlessly migrate your existing software to a more robust and cost-effective solution. Whether upgrading legacy systems or transitioning to cloud-based platforms, we ensure a smooth migration with minimal downtime.'
				},
				{
					title: 'Cost Optimization & Software Expense Reduction',
					content: 'We analyze your current software stack and eliminate unnecessary costs by replacing expensive tools with more efficient, budget-friendly alternatives—without compromising performance.'
				},
				{
					title: 'Replacement With Open-Source & Self-Hosted Alternatives',
					content: 'We help you switch from costly, proprietary software to powerful open-source and self-hosted solutions, giving you more control, security, and long-term savings.'
				},
				{
					title: 'Web UI/UX Design',
					content: 'We create visually stunning and user-friendly interfaces that enhance user experience and engagement. Our designs are optimized for conversions, accessibility, and brand consistency.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content: 'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		},
		{
			title: 'AI Services',
			items: [
				{
					title: 'AI Consulting',
					content: 'We help you to implement AI strategies that optimize workflows, enhance decision-making, and unlock new revenue opportunities.'
				},
				{
					title: 'LLM Alignment & Optimization',
					content: 'We help businesses optimize Large Language Models (LLMs) to perform better for their specific use cases'
				},
				{
					title: 'AI Agents & Automation',
					content: 'We build AI-powered agents that automate repetitive tasks, streamline operations, and improve customer interactions—saving you time and resources.'
				},
				{
					title: 'AI Assistants',
					content: 'We develop intelligent AI assistants that enhance customer support, internal workflows, and decision-making processes, giving your business a 24/7 productivity boost.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content: 'We continuously optimize and monitor AI solutions to ensure long-term performance, accuracy, and adaptability as your business evolves.'
				}
			]
		},
		{
			title: 'Automation Services',
			items: [
				{
					title: 'Business Process Automation',
					content:
						'We automate manual, time-consuming business processes using AI and workflow automation, reducing errors and increasing operational efficiency.'
				},
				{
					title: 'Workflow Automation',
					content:
						'We integrate smart automation tools into your daily operations, ensuring seamless collaboration, task management, and productivity enhancements.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide proactive monitoring and support for your automated workflows, ensuring they run efficiently without disruption.'
				}
			]
		},
		{
			title: 'Data & Analytics Services',
			items: [
				{
					title: 'Business Intelligence & Analytics',
					content:
						'We transform raw data into actionable insights, giving you a real-time understanding of your business performance for better decision-making.'
				},
				{
					title: 'Growth Intelligence & Analytics',
					content:
						'We leverage data-driven strategies to identify growth opportunities, optimize marketing efforts, and maximize profitability.'
				},
				{
					title: 'Customer Intelligence & Analytics',
					content:
						'We help you understand your customers like never before by analyzing their behaviors, preferences, and interactions. Our Customer Intelligence & Analytics solutions provide data-driven insights that allow you to personalize marketing, improve customer retention, and maximize lifetime value.'
				},
			]
		}
	];
</script>

<div class="services-container">
	{#each services as service}
		<section class="service-section">
			<div class="service-heading">
				<h2>{service.title}</h2>
			</div>
			<div class="service-accordion">
				<Accordion items={service.items} />
			</div>
		</section>
	{/each}
</div>

<style>
	.services-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.service-section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	@media (min-width: 769px) {
		.service-section {
			flex-direction: row;
			align-items: flex-start;
		}

		.service-heading {
			width: 50%;
			padding-right: 2rem;
		}

		.service-accordion {
			width: 50%;
		}
	}

	h2 {
		margin: 0;
		padding: 1rem;
		background-color: #f5f5f5;
		border-left: 4px solid #333;
		font-size: 1.5rem;
	}

	.service-accordion {
		margin-left: 0;
	}

	/* Tablet and mobile styles */
	@media (max-width: 768px) {
		.services-container {
			gap: 2rem;
		}

		.service-section {
			gap: 1rem;
		}
	}
</style>
