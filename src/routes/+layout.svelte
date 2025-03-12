<script lang="ts">
	import '../app.css';
	// Supports weights 100-900
	// Supports weights 100-900
	import '@fontsource-variable/dm-sans';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
