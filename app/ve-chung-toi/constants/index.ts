export const TEAM_MEMBERS = [
	{
		name: 'Trương Văn Thới',
		role: 'Chủ tịch Hội đồng thành viên kiêm Giám đốc',
		bio: 'Với 15+ năm kinh nghiệm trong ngành xây dựng, ông Thới dẫn dắt công ty với tầm nhìn rõ ràng và cam kết về sự xuất sắc.',
		image: '/images/people/avatar1.png',
	},
	{
		name: 'Châu Ngọc Hạnh',
		role: 'Đồng sáng lập',
		bio: 'Chuyên gia về vận hành thiết bị xây dựng, bà Hạnh đảm bảo mọi thiết bị của công ty luôn hoạt động ở hiệu suất tối ưu.',
		image: '/images/people/avatar2.png',
	},
];

type GalleryItem = {
	src: string;
	alt: string;
	caption: string;
	className: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
	{
		src: '/images/activites/act1.png',
		alt: 'Kho bãi thiết bị xây dựng được sắp xếp gọn gàng tại Long An',
		caption:
			'Kho bãi thiết bị xây dựng luôn được sắp xếp khoa học, sẵn sàng cho mỗi công trình.',
		className: 'md:col-span-3 md:row-span-2 lg:col-span-4',
	},
	{
		src: '/images/activites/act2.png',
		alt: 'Đội ngũ công nhân thi công cốt thép tại công trường xây dựng',
		caption: 'Thi công cốt thép tại công trường, đảm bảo tiến độ và an toàn lao động.',
		className: 'md:col-span-1 lg:col-span-2',
	},
	{
		src: '/images/activites/act3.png',
		alt: 'Xe máy công trình làm việc trên mặt bằng san lấp',
		caption: 'Thiết bị thi công nền móng và san lấp mặt bằng cho các dự án hạ tầng.',
		className: 'md:col-span-1 lg:col-span-2',
	},
	{
		src: '/images/activites/act4.webp',
		alt: 'Kỹ sư và nhà thầu họp bàn phương án thi công xây dựng',
		caption:
			'Đội ngũ kỹ sư và nhà thầu trao đổi phương án thi công và lựa chọn thiết bị phù hợp.',
		className: 'md:col-span-2 lg:col-span-3',
	},
	{
		src: '/images/activites/act5.webp',
		alt: 'Kỹ thuật viên kiểm tra, bảo trì máy móc thiết bị xây dựng',
		caption: 'Kiểm tra và bảo trì thiết bị định kỳ trước khi xuất kho cho công trình mới.',
		className: 'md:col-span-2 lg:col-span-3',
	},
];
