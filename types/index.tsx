export type ProjectType = {
	id: string;
	title: string;
	subtitle: string;
	highlight: string;
	image: string;
};

export type EquipmentType = {
	id: string;
	name: string;
	pricePerDay: string;
	status?: 'available' | 'unavailable';
	image: string;
};
