import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const copyToClipboard = async (text: string): Promise<boolean> => {
	// 1. Check for browser support
	if (!navigator.clipboard || !navigator.clipboard.writeText) {
		console.warn('Clipboard API not supported by this browser.');
		return false;
	}

	try {
		// 2. Attempt to write the text
		await navigator.clipboard.writeText(text);

		// 3. Success
		console.log(`Successfully copied: "${text}"`);
		return true;
	} catch (err) {
		// 4. Handle errors (e.g., permission denied)
		console.error('Failed to copy text to clipboard: ', err);
		return false;
	}
};
