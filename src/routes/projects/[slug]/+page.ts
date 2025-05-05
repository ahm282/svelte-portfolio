import type { PageLoad } from './$types';
import projects from '$lib/data/projects.json';
import { error } from '@sveltejs/kit';

export const load = (async ({ params }) => {
	const { slug } = params;

	// Create a lookup object to convert project name to slug format
	const projectSlugs = Object.entries(projects).reduce(
		(acc, [key, project]) => {
			const projectSlug = project.projectName.toLowerCase().replace(/\s+/g, '-');
			acc[projectSlug] = key;
			return acc;
		},
		{} as Record<string, string>
	);

	// Get the original project key using the slug
	const projectKey = projectSlugs[slug];

	if (!projectKey || !projects[projectKey]) {
		throw error(404, {
			message: 'Project not found'
		});
	}

	return {
		project: projects[projectKey],
		slug
	};
}) satisfies PageLoad;
