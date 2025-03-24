<script>
	import { Target, Code, Database, LineChart, Users } from '@lucide/svelte';
</script>

<section class="py-12">
	<div class="mb-12">
		<h2 class="mb-6 text-3xl text-black md:text-4xl">Our Services</h2>
		
		<p class="text-gray-700">
			We offer comprehensive solutions to help your business earn more and spend less both time and
			money.
		</p>

		<p class="text-gray-700">
			- These are just a overview of our services. We provide custom solutions for you, powered by
			our services. -
		</p>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<!-- First row: 1x2 + 1x1 -->
		<div
			class="flex flex-col items-start rounded-sm border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-black md:col-span-2"
		>
			<div class="bg-primary/10 mb-4 rounded-full">
				<Target class="text-primary h-8 w-8" />
			</div>
			<h3 class="mb-3 md:text-xl lg:text-2xl">Future Proof Your Business With Strategic AI Consulting</h3>
			<p class="text-gray-700">
				We analyze your business needs and develop tailored AI strategies to optimize operations,
				increase efficiency, and drive growth. We identify opportunities where AI can make the
				biggest impact for your business.
			</p>
		</div>

		<div
			class="flex flex-col items-start rounded-sm border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-black"
		>
			<div class="bg-primary/10 mb-4 rounded-full">
				<Code class="text-primary h-8 w-8" />
			</div>
			<h3 class="mb-3 md:text-xl lg:text-2xl">Maximize Efficiency With Custom Software Solutions</h3>
			<p class="text-gray-700">
				We build or provide software solutions tailored to your specific business requirements,
				ensuring seamless migration from your existing systems.
			</p>
		</div>

		<div
			class="flex flex-col items-start rounded-sm border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-black md:col-span-3"
		>
			<div class="bg-primary/10 mb-4 rounded-full">
				<LineChart class="text-primary h-8 w-8" />
			</div>
			<h3 class="mb-3 md:text-xl lg:text-2xl">
				Customer & Product Intelligence & Analytics For Data-Driven Decisions
			</h3>
			<p class="text-gray-700">
				Transform data into meaningful insights with our analytics service. We identify
				opportunities and make data-driven insights that drive business growth. Our reports provide
				insights that help you make smarter decisions.
			</p>
		</div>

		<!-- Third row: 1x3 (full width) -->
		<div
			class="flex flex-col items-start rounded-sm border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-black md:col-span-3"
		>
			<div class="bg-primary/10 mb-4 rounded-full">
				<Users class="text-primary h-8 w-8" />
			</div>
			<h3 class="mb-3 md:text-xl lg:text-2xl">Say Goodbye To Repetitive Time Consuming Tasks With Automation</h3>
			<p class="text-gray-700">
				Streamline your operations and reduce costs with our intelligent automation solutions. We
				identify repetitive tasks and implement AI-driven automation to increase efficiency, reduce
				errors, and free up your team to focus on high-value activities.
			</p>
		</div>
	</div>
</section>
