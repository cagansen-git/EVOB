<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer p-xl rounded-tl-md rounded-tr-md bg-black text-white mt-xl">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div>
				<h2 class="mb-6 text-2xl font-semibold">EVOB</h2>
				<a
					href="https://linkedin.com/company/evobtech"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center transition-colors hover:text-gray-300"
					aria-label="LinkedIn"
				>
					Follow us on LinkedIn
				</a>
			</div>

			<!-- Navigation -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Navigation</h3>
				<ul class="space-y-2">
					<li>
						<a href="/" class="transition-colors hover:text-gray-300" data-sveltekit-preload-data
							>Home</a
						>
					</li>
					<li>
						<a
							href="/offers"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Offers</a
						>
					</li>
					<li>
						<a
							href="/services"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Services</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>About</a
						>
					</li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Get in Touch</h3>
				<a
					href="/contact"
					class="text-white transition-colors hover:text-gray-300"
					data-sveltekit-preload-data
				>
					Contact Us
				</a>
				<p><a href="mailto:contact@evob.tech">contact@evob.tech</a></p>
			</div>

			<!-- Resources -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Resources</h3>
				<ul class="space-y-2">
					<li>
						<!-- <a
							href="/insights"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Insıghts</a
						> -->
					</li>
					<li>
						<a href="/faq" class="transition-colors hover:text-gray-300" data-sveltekit-preload-data
							>FAQ</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-700 pt-6">
			<div class="mb-4 md:mb-0">
				<p>© {currentYear} EVOB, Inc. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>

