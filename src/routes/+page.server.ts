import type { PageServerLoad } from './$types';
import type { Product } from './+page.svelte';

export const load: PageServerLoad = async () => {
	const getProducts = async () => {
		const res = await fetch('https://dummyjson.com/products');
		const data = await res.json();
		const productsWithSearchTerms: Product[] = data.products.map((product: Product) => ({
			...product,
			searchTerms: `${product.title} ${product.description} ${product.brand} ${product.category}`
		}));
		return productsWithSearchTerms;
	};

	return {
		products: getProducts()
	};
};
