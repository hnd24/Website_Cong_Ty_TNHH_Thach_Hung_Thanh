import {delay} from '@/lib/utils';
import {DetailEquipmentType, EquipmentType, PaginationMetaType} from '@/types';
import {detailEquipmentData1, equipmentData} from './temp';

export type GetEquipmentsProps = {
	typeEquipment: string;
	statusEquipment: string;
	brandEquipment: string;
	priceRange: number[];
	meta: PaginationMetaType;
};

export type GetEquipmentsResponse = {
	equipments: EquipmentType[];
	meta: PaginationMetaType;
};

export const getEquipments = async (
	props: Partial<GetEquipmentsProps>,
): Promise<GetEquipmentsResponse> => {
	await delay(500); // Simulate network delay

	const page = props.meta?.page ?? 1;
	const limit = props.meta?.limit ?? 6;

	// 1. Lọc theo các điều kiện
	const filtered = equipmentData.filter(item => {
		if (props.typeEquipment && item.type !== props.typeEquipment) {
			return false;
		}
		if (props.statusEquipment && item.status !== props.statusEquipment) {
			return false;
		}
		if (props.brandEquipment && item.brand !== props.brandEquipment) {
			return false;
		}
		if (props.priceRange) {
			const [minPrice, maxPrice] = props.priceRange;
			if (minPrice != null && item.price < minPrice) {
				return false;
			}
			if (maxPrice != null && item.price > maxPrice) {
				return false;
			}
		}
		return true;
	});

	// 2. Tổng sau khi lọc (dùng cho pagination)
	const total = filtered.length;
	const totalPages = limit > 0 ? Math.ceil(total / limit) : 0;

	// 3. Phân trang trên dữ liệu đã lọc
	const start = (page - 1) * limit;
	const end = start + limit;
	const resData = filtered.slice(start, end);

	// 4. Trả về
	return {
		equipments: resData,
		meta: {
			page,
			limit,
			total,
			totalPages,
		},
	};
};

export const getEquipmentBySlug = async (slug: string): Promise<DetailEquipmentType | null> => {
	await delay(500);
	return detailEquipmentData1;
};
