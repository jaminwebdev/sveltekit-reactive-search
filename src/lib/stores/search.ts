/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
	data: T[];
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(data: T[] = []) => {
	const { subscribe, set, update } = writable<SearchStoreModel<T>>({
		data: data
	});

	const searchHandler = (searchTerm: string) => {
		return data.filter((item) => item.searchTerms.toLowerCase().includes(searchTerm.toLowerCase()));
	};

	return {
		subscribe,
		set,
		update,
		searchHandler
	};
};
