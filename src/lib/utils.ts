import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getCurrentAge() {
	const birthDate: Date = new Date('2002-04-28');
	const currentDate: Date = new Date();
	const age: number = currentDate.getFullYear() - birthDate.getFullYear();
	const month: number = currentDate.getMonth() - birthDate.getMonth();

	if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
		return age - 1;
	}

	return age;
}
