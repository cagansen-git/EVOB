<script lang="ts">
	import { AlignJustify, X } from '@lucide/svelte';
	let toggle = $state(false);

	const toggleNavbar = () => {
		toggle = !toggle;
	};
</script>

<header>
	<nav class="my-2xl bg-primary-text p-lg flex items-center justify-between rounded-md text-white">
		<!-- left side navbar -->
		<div>
			<h1 class="text-3xl tracking-tight"><a href="/" data-sveltekit-preload-data>EVOB</a></h1>
		</div>

		<!-- right side navbar -->
		<div class="gap-lg hidden items-center md:flex">
			<a href="/contact" class="nav-link" data-sveltekit-preload-data>Contact Us</a>
			<a href="/offers" class="nav-link" data-sveltekit-preload-data>Offers</a>
			<a href="/services" class="nav-link" data-sveltekit-preload-data>Services</a>
			<a href="/faq" class="nav-link" data-sveltekit-preload-data>FAQ</a>
			<a href="/about" class="nav-link" data-sveltekit-preload-data>About</a>
			<!-- <a href="/insights" class="nav-link" data-sveltekit-preload-data>Insights</a> -->
		</div>

		<!-- mobile navbar button  -->
		<div class="items-center md:hidden">
			{#if toggle}
				<button class="py-sm relative z-50" onclick={toggleNavbar}><X /></button>
			{:else}
				<button class="py-sm" onclick={toggleNavbar}><AlignJustify /></button>
			{/if}
		</div>

		<!-- mobile navbar -->
		<div
			class="p-3xl bg-primary-text fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 ease-in-out {toggle
				? 'translate-x-0'
				: 'translate-x-full'}"
		>
			<ul class="space-y-lg pt-lg">
				<li>
					<a href="/contact" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}
						>Contact Us</a
					>
				</li>
				<li>
					<a href="/offers" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}
						>Offers</a
					>
				</li>
				<li>
					<a href="/services" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}
						>Services</a
					>
				</li>
				<li>
					<a href="/faq" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}>FAQ</a>
				</li>
				<li>
					<a href="/about" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}
						>About</a
					>
				</li>
				<li>
					<!-- <a href="/insights" class="nav-link" data-sveltekit-preload-data onclick={toggleNavbar}>Insights</a> -->
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	.nav-link {
		position: relative;
		display: inline-block;
		transition: color 0.3s ease;
	}

	.nav-link::after {
		content: '';
		position: absolute;
		width: 0;
		height: 2px;
		bottom: -4px;
		left: 0;
		background-color: currentColor;
		transition: width 0.3s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}
</style>
