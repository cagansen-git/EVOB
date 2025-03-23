<script>
	let { link, text, target = '_blank' } = $props();
</script>

<a
	href={link}
	class="bg-primary-text py-sm p-md inline-block rounded-md text-base text-white transition-transform duration-200 hover:scale-[1.05]"
	data-sveltekit-preload-data
	{target}
	rel="noopener noreferrer"
	>{text}
</a>
