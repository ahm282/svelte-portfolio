import type { PageLoad } from './$types';
import activities from '$lib/data/activities.json';

export const load = (async () => {
	try {
		return { activities };
	} catch (error) {
		console.error(error);
		return { error };
	}
}) satisfies PageLoad;
