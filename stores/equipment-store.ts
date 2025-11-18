import {EquipmentType, PaginationMetaType} from '@/types';
import {create} from 'zustand';

export type EquipmentTypeData = {
	equipments: EquipmentType[];
	meta: PaginationMetaType;
};

export type CounterActions = {
	updateEquipmentsData: (data: EquipmentTypeData) => void;
	addEquipments: (data: EquipmentType[]) => void;
	removeEquipments: (ids: string[]) => void;
	updateMeta: (meta: PaginationMetaType) => void;
};

export type EquipmentState = EquipmentTypeData & CounterActions;

const createEquipmentStore = () =>
	create<EquipmentState>(set => ({
		equipments: [],
		meta: {
			total: 0,
			page: 1,
		},
		updateEquipmentsData: (data: EquipmentTypeData) =>
			set(() => ({
				equipments: data.equipments,
				meta: data.meta,
			})),
		addEquipments: (data: EquipmentType[]) =>
			set(state => ({
				equipments: [...state.equipments, ...data],
			})),
		removeEquipments: (ids: string[]) =>
			set(state => ({
				equipments: state.equipments.filter(equipment => !ids.includes(equipment.id)),
			})),
		updateMeta: (meta: PaginationMetaType) =>
			set(() => ({
				meta,
			})),
	}));

export const useEquipmentListStore = createEquipmentStore();

export const useEquipmentDetailStore = createEquipmentStore();
