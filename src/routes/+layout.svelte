<script lang="ts">
	import '../app.css';
	// Supports weights 100-900
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>EVOB</title>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="At EVOB, we empower businesses to unlock new growth opportunities, reduce costs, and optimize
		operations through advanced technology. We deliver impactful outcomes that drive efficiency and innovation."
	/>
	<meta
		name="keywords"
		content="EVOB, About, Growth, Technology, AI, Automation, Custom Software, Analytics, Intelligence, Software Development Service, MVP Development Service, AI Solutions, AI Services, AI ROI, AI Implementation, Customer Retention, Software Expenses, AI Services, Customer Experience, Data, AI, Customer Behavior, AI Solutions, Automation, Customer Behavior, Customer Retention, AI, Manual Processes, Customer Behavior, "
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="EVOB" />

	<meta
		property="og:description"
		content="At EVOB, we empower businesses to unlock new growth opportunities, reduce costs, and optimize
		operations through advanced technology. We
		deliver impactful outcomes that drive efficiency and innovation."
	/>
	<meta property="og:image" content="https://evob.tech/favicon.png" />
	<meta property="og:url" content="https://evob.tech/about" />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@evobtech" />
	<meta name="twitter:creator" content="@evobtech" />
	<meta
		name="twitter:description"
		content="At EVOB, we empower businesses to unlock new growth opportunities, reduce costs, and optimize
		operations through advanced technology. We deliver impactful outcomes that drive efficiency and innovation."
	/>
</svelte:head>

<Navbar />
{@render children()}
<Footer />
