<script>
	import Accordion from '../../components/Accordion.svelte';

	// Service data with titles and accordion items
	const services = [
		{
			title: 'Software Services',
			items: [
				{
					title: 'Software Consulting',
					content:
						'We analyze your current software stack and eliminate unnecessary costs, inefficiencies, and redundancies. Our software consulting services help you optimize your technology investments and align your software with your business goals.'
				},
				{
					title: 'Custom Software Development',
					content:
						'We design, develop, and deploy software solutions tailored to your unique business needs. Whether you need a brand-new application or improvements to your existing system, we build scalable, high-performance software that drives efficiency and growth.'
				},
				{
					title: 'Software Migration & Replacement',
					content:
						'We seamlessly migrate your existing software to a more robust and cost-effective solution. Whether upgrading legacy systems or transitioning to cloud-based platforms, we ensure a smooth migration with minimal downtime.'
				},
				{
					title: 'Web UI/UX Design',
					content:
						'We create visually stunning and user-friendly interfaces that enhance user experience and engagement. Our designs are optimized for conversions, accessibility, and brand consistency.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		},
		{
			title: 'AI Services',
			items: [
				{
					title: 'AI Consulting',
					content:
						'We help you to implement AI strategies that optimize workflows, enhance decision-making, and unlock new revenue opportunities.'
				},
				{
					title: 'AI Agents & Automation',
					content:
						'We build AI-powered agents that automate repetitive tasks, streamline operations, and improve customer interactions—saving you time and resources.'
				},
				{
					title: 'AI Assistants',
					content:
						'We develop intelligent AI assistants that enhance customer support & internal workflows giving your business a 24/7 productivity boost.'
				},
				{
					title: 'LLM Alignment & Optimization',
					content:
						'We help businesses optimize Large Language Models (LLMs) to perform better for their specific use cases'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We continuously optimize and monitor AI solutions to ensure long-term performance, accuracy, and adaptability as your business evolves.'
				}
			]
		},
		{
			title: 'Automation Services',
			items: [
				{
					title: 'Workflow Automation',
					content:
						'We integrate smart automation into your daily operations, improving efficiency, reducing errors, and freeing up your team to focus on high-value tasks.'
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
					title: 'Product Intelligence & Analytics',
					content:
						'We track and analyze your online product by providing deep insights into product performance, customer preferences, what your customers want and do not want.'
				},
				{
					title: 'Customer Intelligence & Analytics',
					content:
						'We help you understand your customers like never before by analyzing their behaviors, preferences, and interactions. Our Customer Intelligence & Analytics solutions provide data-driven insights that allow you to personalize marketing, improve customer retention, and maximize lifetime value.'
				},
				{
					title:"On going Support & Maintenance",
					content:"We provide continuous monitoring & reports to ensure your efforts aligned with your business goals." 
				}
			]
		}
	];
</script>

<svelte:head
	><meta property="og:title" content="EVOB | Homepage" />
	<meta name="twitter:title" content="EVOB | Homepage" />
</svelte:head>

<div class="services-container">
	{#each services as service}
		<section class="service-section">
			<div class="service-heading">
				<h2><u>{service.title}</u></h2>
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
		margin: 0 auto;
		padding: 2rem 0rem;
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
		padding: 1rem 0rem;
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
