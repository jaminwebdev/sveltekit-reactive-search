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
	import { browser } from '$app/environment';
	import { createSearchStore } from '$lib/stores/search';
	import type { PageData } from './$types';

	export let data: PageData;

	const searchStore = createSearchStore(data.products);

	let search = '';
	$: filteredProducts = searchStore.searchHandler(search);
</script>

<div class="container">
	<h1>Search/Filter</h1>
	<input type="search" placeholder="Search..." bind:value={search} />
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
