export interface Activity {
	name: string;
	icon: string;
	image?: string;
	description?: string;
	subtext?: string;
	content: string[];
}

export interface ActivitiesData {
	activities: Record<string, Activity>;
}
