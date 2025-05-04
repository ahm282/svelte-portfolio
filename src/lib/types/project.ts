export interface Project {
	id?: string;
	projectName: string;
	description: string;
	techStack: string[];
	images: string[];
	githubUrl?: string;
	liveUrl?: string;
	status?: string;
	content: string[];
	layout?: 'standard' | 'imageGallery' | 'fullWidth' | 'splitView';
}

export interface ProjectsData {
	projects: Record<string, Project>;
}
