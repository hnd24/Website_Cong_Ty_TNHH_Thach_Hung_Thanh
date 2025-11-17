import {EquipmentType, PaginationMetaType} from '@/types';
import {create} from 'zustand';

export type EquipmentTypeData = {
	equipments: EquipmentType[];
} & PaginationMetaType;

export type CounterActions = {
	updateEquipmentsData: (data: EquipmentTypeData) => void;
	addEquipments: (data: EquipmentType[]) => void;
	removeEquipments: (ids: string[]) => void;
	updateTotal: (total: number) => void;
	updatePage: (page: number) => void;
};

export type EquipmentState = EquipmentTypeData & CounterActions;

export const useEquipment = create<EquipmentState>(set => ({
	equipments: [],
	total: 0,
	page: 1,
	updateEquipmentsData: (data: EquipmentTypeData) =>
		set(() => ({
			equipments: data.equipments,
			total: data.total,
			page: data.page,
		})),
	addEquipments: (data: EquipmentType[]) =>
		set(state => ({
			equipments: [...state.equipments, ...data],
		})),
	removeEquipments: (ids: string[]) =>
		set(state => ({
			equipments: state.equipments.filter(equipment => !ids.includes(equipment.id)),
		})),
	updateTotal: (total: number) =>
		set(() => ({
			total,
		})),
	updatePage: (page: number) =>
		set(() => ({
			page,
		})),
}));
