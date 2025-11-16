import {EquipmentType, ProjectType} from '@/types';

export const projectData: ProjectType[] = [
	{
		title: 'Nhà Xưởng Hoàng Phát – Long An (2024)',
		subtitle: 'Thi công nền móng · San lấp mặt bằng · Ép cọc',
		highlight: 'Bàn giao đúng tiến độ trong 32 ngày, đảm bảo chất lượng nền móng.',
		image: '/images/projects/project1.png',
	},
	{
		title: 'Khu Dân Cư Phú Thạnh (2023)',
		subtitle: 'San lấp · Đường nội bộ · Hệ thống thoát nước',
		highlight: 'Thi công nhiều hạng mục song song, tối ưu tiến độ cho chủ đầu tư.',
		image: '/images/projects/project2.png',
	},
	{
		title: 'Nhà Máy Chế Biến Thực Phẩm (2022)',
		subtitle: 'Nền móng · Hạ tầng kỹ thuật · Thoát nước',
		highlight: 'Đảm bảo tiêu chuẩn an toàn & vệ sinh trong quá trình thi công.',
		image: '/images/projects/project3.png',
	},
	{
		title: 'Hạ Tầng KCN Long Hậu (2021)',
		subtitle: 'San lấp mặt bằng · Đường nội bộ · Thoát nước',
		highlight: 'Thi công hạ tầng đồng bộ, đáp ứng yêu cầu kỹ thuật của khu công nghiệp.',
		image: '/images/projects/project4.png',
	},
];

export const equipmentData: EquipmentType[] = [
	{
		name: 'Máy Đầm Cóc Mikasa MT-55',
		pricePerDay: '250.000',
		status: 'available',
		image: '/images/equipments/equipment1.png',
	},
	{
		name: 'Xe Lu Rung 10 Tấn',
		pricePerDay: '3.500.000',
		status: 'unavailable',
		image: '/images/equipments/equipment2.png',
	},
	{
		name: 'Máy Xúc Lật 1.2m³',
		pricePerDay: '2.800.000',
		status: 'available',
		image: '/images/equipments/equipment3.png',
	},
	{
		name: 'Máy Bơm Bùn Công Suất Lớn',
		pricePerDay: '1.100.000',
		status: 'available',
		image: '/images/equipments/equipment4.png',
	},
];
