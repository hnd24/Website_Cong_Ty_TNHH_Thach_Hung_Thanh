import {EquipmentType, ProjectType} from '@/types';

export const projectData: ProjectType[] = [
	{
		id: 'project1',
		title: 'Nhà Xưởng Hoàng Phát – Long An (2024)',
		subtitle: 'Thi công nền móng · San lấp mặt bằng · Ép cọc',
		highlight: 'Bàn giao đúng tiến độ trong 32 ngày, đảm bảo chất lượng nền móng.',
		image: '/images/projects/project1.png',
		link: 'https://www.thanhhungthanh.vn/du-an/nha-xuong-hoang-phat-long-an-2024',
	},
	{
		id: 'project2',
		title: 'Khu Dân Cư Phú Thạnh (2023)',
		subtitle: 'San lấp · Đường nội bộ · Hệ thống thoát nước',
		highlight: 'Thi công nhiều hạng mục song song, tối ưu tiến độ cho chủ đầu tư.',
		image: '/images/projects/project2.png',
		link: 'https://www.thanhhungthanh.vn/du-an/khu-dan-cu-phu-thanh-2023',
	},
	{
		id: 'project3',
		title: 'Nhà Máy Chế Biến Thực Phẩm (2022)',
		subtitle: 'Nền móng · Hạ tầng kỹ thuật · Thoát nước',
		highlight: 'Đảm bảo tiêu chuẩn an toàn & vệ sinh trong quá trình thi công.',
		image: '/images/projects/project3.png',
		link: 'https://www.thanhhungthanh.vn/du-an/nha-may-che-bien-thuc-pham-2022',
	},
	{
		id: 'project4',
		title: 'Hạ Tầng KCN Long Hậu (2021)',
		subtitle: 'San lấp mặt bằng · Đường nội bộ · Thoát nước',
		highlight: 'Thi công hạ tầng đồng bộ, đáp ứng yêu cầu kỹ thuật của khu công nghiệp.',
		image: '/images/projects/project4.png',
		link: 'https://www.thanhhungthanh.vn/du-an/ha-tang-kcn-long-hau-2021',
	},
];

export const equipmentData: EquipmentType[] = [
	{
		id: 'equipment1',
		name: 'Máy Đầm Cóc Mikasa MT-55',
		pricePerDay: '250.000',
		status: 'available',
		image: '/images/equipments/equipment1.png',
	},
	{
		id: 'equipment2',
		name: 'Xe Lu Rung 10 Tấn',
		pricePerDay: '3.500.000',
		status: 'unavailable',
		image: '/images/equipments/equipment2.png',
	},
	{
		id: 'equipment3',
		name: 'Máy Xúc Lật 1.2m³',
		pricePerDay: '2.800.000',
		status: 'available',
		image: '/images/equipments/equipment3.png',
	},
	{
		id: 'equipment4',
		name: 'Máy Bơm Bùn Công Suất Lớn',
		pricePerDay: '1.100.000',
		status: 'available',
		image: '/images/equipments/equipment4.png',
	},
];
