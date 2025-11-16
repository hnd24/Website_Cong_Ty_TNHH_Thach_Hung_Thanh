import {EquipmentType, ProjectType} from '@/types';
import {equipmentData, projectData} from './temp';

export const getProjects = async (): Promise<ProjectType[]> => {
	return projectData;
};

export const getOutstandingEquipments = async (): Promise<EquipmentType[]> => {
	return equipmentData;
};
