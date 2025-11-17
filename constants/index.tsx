import {
	BadgeCheck,
	Facebook,
	Headset,
	House,
	ScrollText,
	Settings,
	Truck,
	Users,
} from 'lucide-react';

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
export const NUMBER_CLIENTS: number = 500;

type AchievementType = {
	[key: string]: {
		value: string;
		label: string;
		ariaLabel: string;
	};
};

export const ACHIEVEMENTS: AchievementType = {
	numberCompletedProjects: {
		value: '10',
		label: 'Năm kinh nghiệm',
		ariaLabel:
			'Hơn 10 năm kinh nghiệm thi công và cho thuê thiết bị xây dựng tại Long An và khu vực lân cận',
	},
	yearOfExperience: {
		value: '300',
		label: 'Dự án hoàn thành',
		ariaLabel: 'Hơn 300 dự án xây dựng và hạ tầng đã được hoàn thành đúng tiến độ',
	},
	numberOfDevices: {
		value: '200',
		label: 'Thiết bị hiện đại',
		ariaLabel: 'Hơn 200 thiết bị xây dựng hiện đại luôn sẵn sàng cho thuê và vận hành',
	},
	numberClients: {
		value: '500',
		label: 'Khách hàng doanh nghiệp',
		ariaLabel: 'Hơn 500 khách hàng doanh nghiệp và nhà thầu đã tin tưởng hợp tác',
	},
};

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
	description: string;
};

export const MILESTONES: milestone[] = [
	{
		year: '2015',
		event: 'Thành lập công ty',
		description: 'Khởi đầu hành trình với đội ngũ nòng cốt và định hướng rõ ràng.',
	},
	{
		year: '2018',
		event: 'Mở rộng quy mô',
		description: 'Đầu tư vào trang thiết bị hiện đại và mở rộng danh mục dịch vụ.',
	},
	{
		year: '2021',
		event: 'Đạt chứng nhận ISO',
		description: 'Khẳng định cam kết về chất lượng và quy trình quản lý chuyên nghiệp.',
	},
	{
		year: '2024',
		event: 'Đối tác chiến lược',
		description: 'Trở thành đối tác tin cậy của nhiều tập đoàn và doanh nghiệp lớn.',
	},
];

type Reason = {
	title: string;
	icon: React.ComponentType<any>;
	description: string;
};

export const REASONS: Reason[] = [
	{
		title: 'Thiết bị đạt chuẩn kiểm định',
		icon: BadgeCheck,
		description: 'Mọi thiết bị đều được kiểm định chất lượng trước khi giao đến khách hàng.',
	},
	{
		title: 'Giá minh bạch – không phát sinh',
		icon: ScrollText,
		description: 'Báo giá rõ ràng, cam kết không có chi phí ẩn hay phát sinh ngoài hợp đồng.',
	},
	{
		title: 'Giao nhận nhanh & hỗ trợ 24/7',
		icon: Headset,
		description:
			'Dịch vụ giao nhận linh hoạt, đội ngũ hỗ trợ luôn sẵn sàng phục vụ khách hàng.',
	},
	{
		title: 'Kinh nghiệm thi công thực tế',
		icon: Users,
		description: 'Đội ngũ kỹ sư và công nhân có nhiều năm kinh nghiệm trong ngành xây dựng.',
	},
];
