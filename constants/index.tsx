import {Facebook, House, Settings, Truck} from 'lucide-react';

export const navItems = [
	{href: '/thiet-bi', label: 'Danh sách thiết bị'},
	{href: '/ve-chung-toi', label: 'Về chúng tôi'},
];

export const PHONE_NUMBER: string = '+84909123456';
export const EMAIL_ADDRESS: string = 'example@example.com';
export const ADDRESS = {
	string: '119 & 121 Đường 278, Phường 7, Thành phố Tân An, Tỉnh Long An, Việt Nam',
	url: '',
};
export const NUMBER_CLIENTS: number = 500;

type SocialMedia = {
	[key: string]: {
		url: string;
		icon: React.ComponentType<any>;
	};
};

export const SOCIAL_MEDIA: SocialMedia = {
	facebook: {
		url: 'https://www.facebook.com/thachhungthanh.company',
		icon: Facebook, // Replace with the appropriate icon component
	},
};

export const NUMBER_PROJECTS_COMPLETED: number = 300;
export const YEARS_OF_EXPERIENCE: number = 10;
export const NUMBER_OF_DEVICES: number = 200;

type Service = {
	icon: React.ComponentType<any>;
	title: string;
	description: string;
	highlights: string[];
};

export const SERVICES: Service[] = [
	{
		icon: House,
		title: 'Thi công công trình',
		description: 'Thi công nền móng, dân dụng, công nghiệp, hạ tầng.',
		highlights: ['Đội thi công chuyên nghiệp", "Cam kết tiến độ" ,"Quy trình giám sát chuẩn.'],
	},
	{
		icon: Settings,
		title: 'Cho thuê thiết bị',
		description: 'Cho thuê máy móc, thiết bị thi công công trình.',
		highlights: ['Thiết bị kiểm định', 'Bảo trì định kỳ', 'Giao tận công trường'],
	},
	{
		icon: Truck,
		title: 'Mua bán thiết bị',
		description: 'Cung cấp máy móc, thiết bị thi công công trình.',
		highlights: ['Báo giá minh bạch', 'Hỗ trợ xuất hóa đơn', 'Thiết bị hiệu suất cao'],
	},
];

type milestone = {
	year: string;
	event: string;
};

export const MILESTONES: milestone[] = [
	{year: '2015', event: 'Thành lập'},
	{year: '2018', event: 'Mở rộng thi công'},
	{year: '2020', event: 'Kho thiết bị > 150 loại'},
	{year: '2024', event: 'Nâng cấp hệ thống quản lý thiết bị'},
];
