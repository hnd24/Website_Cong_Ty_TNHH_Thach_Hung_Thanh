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
	price: number;
	status?: string;
	image: string;
	brand: string;
	type: string;
	slug: string;
};

export type PaginationMetaType = {
	page: number;
	limit?: number;
	total?: number;
	totalPages?: number;
};
