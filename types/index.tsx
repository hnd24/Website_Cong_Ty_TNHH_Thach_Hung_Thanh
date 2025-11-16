export type ProjectType = {
	title: string;
	subtitle: string;
	highlight: string;
	image: string;
};

export type EquipmentType = {
	name: string;
	pricePerDay: string;
	status?: 'available' | 'unavailable';
	image: string;
};
