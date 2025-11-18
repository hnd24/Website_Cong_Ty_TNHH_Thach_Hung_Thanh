import {delay} from '@/lib/utils';
import {EquipmentType, ProjectType} from '@/types';
import {outstandingEquipmentData, projectData} from './temp';

export const getProjects = async (): Promise<ProjectType[]> => {
	await delay(500); // Simulate network delay
	return projectData;
};

export const getOutstandingEquipments = async (): Promise<EquipmentType[]> => {
	await delay(500); // Simulate network delay
	return outstandingEquipmentData;
};
