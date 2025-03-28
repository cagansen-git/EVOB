<script>
	import Accordion from '../../components/Accordion.svelte';

	// Service data with titles and accordion items
	const services = [
		{
			title: 'Software Offerings',
			items: [
				{
					title: 'Custom Business Software',
					content:
						'We will build tailored software that fits your exact business needs. Our team will work with you to understand your requirements, design the software, and develop a solution. From requirements gathering to development and beyond, we ensure clear communication and a solution that boosts efficiency and growth.'
				},
				{
					title: 'Minimum Viable Product (MVP)',
					content:
						'We will build a fully functional minimum viable product (MVP) built and deployed in 10 weeks (Might change based on the requirements of project). Our team will work with you to define the scope, develop the software, and launch your product to market quickly and efficiently.'
				},
				{
					title: 'Legacy Software Modernization',
					content:
						'We seamlessly migrate your existing software to a more advance and robust solution. Whether replacing legacy systems or transitioning to cloud-based platforms, we ensure a smooth migration with minimal downtime.'
				},
				{
					title: 'Software Migration & Replacement',
					content:
						'We provide a complete and seamless migration service for your applications and data. This means we move everything to your chosen new platform, whether it is the cloud, a new server, or a different database. We do this with careful planning, detailed testing, and expert execution to minimize downtime and maximize the efficiency of your systems. We keep you informed every step of the way, ensuring a smooth and successful transition.'
				},
				{
					title: 'Proffesional Company Website',
					content:
						'We create a powerful business website that truly represents your brand, integrated with a robust Content Management System (CMS). This empowers you to take charge of your digital narrative, easily publishing updates, managing media, and ensuring your online identity evolves seamlessly with your business.'
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
					title: 'AI Adaptation & Integration',
					content:
						'We will seamlessly integrate AI into your business with a roadmap designed to enhance efficiency and innovation. We conduct in-depth strategy plans, assess AI use cases relevant to your industry, and select the best AI models and tools such as GPT, OpenAI, Claude, or Gemini. Our experts provide a structured deployment plan with workflow automation to ensure a smooth transition, setting your business up for long-term success with AI-driven capabilities.'
				},
				{
					title: 'LLM Alignment & Optimization',
					content:
						'We will adjust the LLM for your use case, customized to meet your business’s unique needs, ensuring maximum efficiency and accuracy. We handle AI model selection, prompt engineering, and optimization techniques such as Retrieval-Augmented Generation (RAG) to improve model accuracy. Our experts also fine-tune LLM models and aligning AI outputs with business objectives.'
				},
				{
					title: 'Advanced Customer Experience',
					content:
						'We will improve your customer engagement, satisfaction, and retention with our genAI powered customer facing chatbots and helpdesk for your human agent, you will handle less of work cause of the ai chatbot powered by most intelligent llm on the market at that time. Our AI chatbots provide 24/7 support, With email integration, and social media integration your businesses can help your customers all message channels 7/24 leading to stronger customer relationships, leading to increased loyalty and lifetime value.'
				},

				{
					title: 'Document Processing, Analysis & Data Extraction',
					content:
						'We extract, structure, and analyze data from scanned documents, PDFs, and images. Automate the extraction of critical information—whether its invoices, contracts, legal documents, or business forms—and convert them into actionable insights. With intelligent document classification, data validation, and compliance checks, businesses can streamline operations, reduce manual errors, and improve data accuracy.'
				},
				{
					title: 'SEO Optimized Content Creation',
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
			title: 'Automation Offerings',
			items: [
				{
					title: 'LLM-Powered Workflow Automation',
					content:
						'We will implement AI solutions to transform your operations. We will automate repetitive tasks, streamline your decision-making processes, and enhance efficiency across sales, customer service, and internal operations. This will reduce costs, improve accuracy, and enable your team to focus on strategic initiatives.'
				},
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
		},
		{
			title: 'Data & Analytics Offerings',
			items: [
				{
					title: 'Product Intelligence & Analytics',
					content:
						'Our Product Intelligence and Analytics services are designed to help businesses optimize their product strategies by providing deep insights into product performance and customer preferences. Through advanced data analysis and actionable intelligence, we enable you to make data-driven decisions that enhance product development, improve user experience, and drive sustained growth.'
				},
				{
					title: 'Customer Intelligence & Analytics',
					content:
						'Advanced Customer Intelligence and Analytics solutions designed to help businesses gain deeper insights into customer behavior, preferences, and trends. By leveraging data-driven approaches, we enable you to make informed, strategic decisions that enhance customer engagement, optimize marketing efforts, and drive business growth.'
				},

				{
					title: 'Ongoing Support & Maintenance',
					content:
						'We provide continuous monitoring & reports to ensure your efforts aligned with your business goals.'
				}
			]
		}
	];
</script>

<svelte:head>
	<meta property="og:title" content="EVOB | Offers" />
	<meta name="twitter:title" content="EVOB | Offers" />
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
