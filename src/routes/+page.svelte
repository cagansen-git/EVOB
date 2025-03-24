<script lang="ts">
	import OurValues from '../components/OurValues.svelte';
	import HeadingSection from '../components/HeadingSection.svelte';
	import ServicesSection from '../components/ServicesSection.svelte';
	import Questions from '../components/Questions.svelte';
	import Button from '../components/Button.svelte';
</script>

<svelte:head>
	<meta property="og:title" content="EVOB | Homepage" />
	<meta name="twitter:title" content="EVOB | Homepage" />
</svelte:head>

<HeadingSection></HeadingSection>
<OurValues></OurValues>
<Questions></Questions>
<ServicesSection></ServicesSection>
<Button link="/contact" text="Contact Us" target=""></Button>
