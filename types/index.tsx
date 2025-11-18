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

export type EquipmentSpecificationType = Record<string, string>;
export type TechDocType = {
	url: string;
	name: string;
};

export type DetailEquipmentType = Omit<EquipmentType, 'image'> & {
	description: string;
	specs: EquipmentSpecificationType[];
	features: string[];
	applications: string[];
	techDocs?: TechDocType[];
	images: string[];
};

export type PaginationMetaType = {
	page: number;
	limit?: number;
	total?: number;
	totalPages?: number;
};
