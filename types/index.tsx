export type ProjectType = {
	id: string;
	title: string;
	subtitle: string;
	highlight: string;
	image: string;
	link: string;
};

export type EquipmentType = {
	id: string;
	name: string;
	pricePerDay: number;
	status?: 'available' | 'unavailable';
	image: string;
};

export type PaginationMetaType = {
	page: number;
	limit?: number;
	total: number;
};
