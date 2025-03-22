import type { PageLoad } from './$types';
import projects from '$lib/data/projects.json';

export const load = (async () => {
	try {
		return { projects };
	} catch (error) {
		console.error(error);
		return { error };
	}
}) satisfies PageLoad;
