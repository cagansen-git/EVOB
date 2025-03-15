<script lang="ts">
	import { Linkedin } from '@lucide/svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="footer mt-3xl p-xl rounded-tl-md rounded-tr-md bg-black text-white">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Company Info -->
			<div>
				<h2 class="mb-6 text-2xl font-semibold">EVOB</h2>
				<p class="mb-4 text-gray-300">
					We help businesses increase revenue and improve operational efficiency with AI,
					automation, and smart software solutions.
				</p>
				<a
					href="https://linkedin.com/company/evobtech"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center transition-colors hover:text-gray-300"
					aria-label="LinkedIn"
				>
					<Linkedin size={20} />
					<span class="ml-2">Follow us on LinkedIn</span>
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
					<li>
						<a
							href="/blog"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Blog</a
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
			</div>

			<!-- Resources -->
			<div>
				<h3 class="mb-4 text-lg font-semibold">Resources</h3>
				<ul class="space-y-2">
					<li>
						<a
							href="/blog"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Blog</a
						>
					</li>
					<li>
						<a href="/faq" class="transition-colors hover:text-gray-300" data-sveltekit-preload-data
							>FAQ</a
						>
					</li>
					<li>
						<a
							href="/privacy-policy"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Privacy Policy</a
						>
					</li>
					<li>
						<a
							href="/terms-of-service"
							class="transition-colors hover:text-gray-300"
							data-sveltekit-preload-data>Terms of Service</a
						>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-700 pt-6">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="mb-4 md:mb-0">
					<p>© {currentYear} EVOB, Inc. All rights reserved.</p>
				</div>
				<div class="flex space-x-6">
					<a
						href="/contact"
						class="text-sm transition-colors hover:text-gray-300"
						data-sveltekit-preload-data
					>
						Contact Us
					</a>
					<a
						href="/services"
						class="text-sm transition-colors hover:text-gray-300"
						data-sveltekit-preload-data
					>
						Services
					</a>
					<a
						href="/about"
						class="text-sm transition-colors hover:text-gray-300"
						data-sveltekit-preload-data
					>
						About
					</a>
					<a
						href="/blog"
						class="text-sm transition-colors hover:text-gray-300"
						data-sveltekit-preload-data
					>
						Blog
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>


