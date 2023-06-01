<script lang="ts" context="module">
	export type Product = {
		title: string;
		description: string;
		brand: string;
		category: string;
		searchTerms: string;
	};
</script>

<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let searchTerm = '';
	$: filteredProducts = data.products.filter((item) =>
		item.searchTerms.toLowerCase().includes(searchTerm.toLowerCase())
	);
</script>

<div class="container">
	<h1>Search/Filter</h1>
	<input type="search" placeholder="Search..." bind:value={searchTerm} />
</div>
<div class="product-grid">
	{#each filteredProducts as product}
		<div class="product">
			<h2>{product.title}</h2>
			<p>{product.description}</p>
			<p class="badge">{product.category}</p>
			<p>{product.brand}</p>
		</div>
	{/each}
</div>
