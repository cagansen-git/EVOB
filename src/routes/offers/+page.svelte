<script>
	import Accordion from '../../components/Accordion.svelte';

	// Service data with titles and accordion items
	const services = [
		{
			title: 'Software Offerings',
			items: [
				{
					title: 'Minimum Viable Product (MVP)',
					content:
						'We will build a fully functional minimum viable product (MVP) built and deployed in 10 weeks (Might change based on the requirements of project). Our team will work with you to define the scope, develop the software, and launch your product to market quickly and efficiently.'
				},
				{
					title: 'Custom Business Tool',
					content:
						'We will build tailored software solution that fits your exact business needs. Our team will work with you to understand your requirements, design the software, and develop a solution that drives efficiency and growth.'
				},
				{
					title: 'Legacy Software Modernization',
					content:
						'We seamlessly migrate your existing software to a more robust and cost-effective solution. Whether upgrading legacy systems or transitioning to cloud-based platforms, we ensure a smooth migration with minimal downtime.'
				},
				{
					title: 'Privacy-First Software Transition',
					content:
						'We will Move you to privacy-focused, self-hosted solutions to protect your business data and reduce dependency on third-party providers.'
				},
				{
					title: 'Software Migration & Replacement',
					content:
						'We will Seamlessly move your applications and data to new platforms with minimal downtime and maximum efficiency.'
				},

				{
					title: 'Self-Hosted Alternative Implementation ',
					content:
						'We will move you from costly SaaS solutions to self-hosted and open-source alternatives for better control, security, and reduced expenses.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		},
		{
			title: 'AI Offerings',
			items: [
				{
					title: 'AI Adaptation & Integration Strategy',
					content:
						'Seamlessly integrate AI into your business with a tailored roadmap designed to enhance efficiency and innovation. We conduct in-depth strategy workshops, assess AI use cases relevant to your industry, and select the best AI models and tools such as GPT, OpenAI, Claude, or Gemini. Our experts provide a structured deployment plan with workflow automation to ensure a smooth transition, setting your business up for long-term success with AI-driven capabilities.'
				},
				{
					title: 'AI-Powered Business Automation',
					content:
						'Transform your operations by leveraging AI to automate workflows, streamline decision-making, and enhance efficiency across sales, customer service, and internal processes. We build intelligent AI-driven chatbots and implement document processing automation to optimize your business. By eliminating repetitive tasks and enhancing operational accuracy, your company can reduce costs and focus on high-value growth opportunities.'
				},
				{
					title: 'Custom AI Deployment & Optimization',
					content:
						'Deploy AI solutions that are customized to meet your business’s unique needs, ensuring maximum efficiency and accuracy. We handle AI model selection and deployment, advanced prompt engineering, and optimization techniques such as Retrieval-Augmented Generation (RAG) to improve model accuracy. Our experts also fine-tune AI performance without modifying core model weights, ensuring compliance, reducing bias, and aligning AI outputs with business objectives.'
				},
				{
					title: 'AI-Driven Customer Experience Optimization',
					content:
						'Enhance customer engagement, satisfaction, and retention with AI-powered personalization and automation. Our AI chatbots and virtual assistants provide 24/7 support, while sentiment analysis and predictive insights help you understand and anticipate customer needs. With AI-driven personalization, email automation, and behavior-based recommendations, businesses can build stronger customer relationships, leading to increased loyalty and lifetime value.'
				},
				{
					title: 'OCR and Document Analysis',
					content:
						'We extract, structure, and analyze data from scanned documents, PDFs, and images. Automate the extraction of critical information—whether its invoices, contracts, legal documents, or business forms—and convert them into actionable insights. With intelligent document classification, data validation, and compliance checks, businesses can streamline operations, reduce manual errors, and improve data accuracy.'
				},
				{
					title: 'SEO Optimized Content Generation',
					content:
						'SEO-optimized content that elevates your online presence and drives measurable results. With a strategic approach to SEO, we combine in-depth keyword research, content optimization, and industry best practices to ensure that your blogs, articles, and website copy not only engage your audience but also rank higher on search engines like Google. Our team focuses on producing content that improves organic traffic, boosts visibility, and drives conversions.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		},
        {
			title: 'Business Offerings',
			items: [
				{
					title: 'Customer Intelligence & Analytics',
					content:
						'Advanced Customer Intelligence and Analytics solutions designed to help businesses gain deeper insights into customer behavior, preferences, and trends. By leveraging data-driven approaches, we enable you to make informed, strategic decisions that enhance customer engagement, optimize marketing efforts, and drive business growth.'
				},
				{
					title: 'Growth Intelligence & Analytics',
					content:
						"We offer comprehensive Growth Intelligence and Analytics solutions designed to empower businesses with actionable insights that drive sustainable growth. By combining advanced data analysis with strategic intelligence, we help you uncover growth opportunities, optimize performance, and make data-driven decisions that accelerate your business's success."
				},
				{
					title: 'Product Intelligence & Analytics',
					content:
						'Our Product Intelligence and Analytics services are designed to help businesses optimize their product strategies by providing deep insights into product performance and customer preferences. Through advanced data analysis and actionable intelligence, we enable you to make data-driven decisions that enhance product development, improve user experience, and drive sustained growth.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		},
        {
			title: 'Automation Offerings',
			items: [
				{
					title: 'Workflow Automation',
					content:
						'A complete automation solution designed to eliminate bottlenecks, reduce manual work, and streamline operations for maximum efficiency. Enhance team productivity, ensures seamless data flow across departments, and minimizes errors to improve overall performance. By automating repetitive tasks, it reduces operational costs and frees up valuable time for high-impact work. With faster execution, greater accuracy, and a scalable infrastructure, businesses can operate more efficiently and adapt effortlessly to growth.'
				},
				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring, updates, and technical support to ensure your software and systems run smoothly, securely, and efficiently.'
				}
			]
		}
	];
</script>

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
