'use client';
import {CircularNav, NavItemType} from '@/components/CircularNav';
import {Bolt, BookA, BookImage, HistoryIcon, PersonStanding, UsersRound} from 'lucide-react';

export default function CircularNavAboutUs() {
	const navItems: NavItemType[] = [
		{id: 'about-hero', label: 'Về chúng tôi', icon: Bolt},
		{id: 'story-section', label: 'Câu chuyện của chúng tôi', icon: BookA},
		{id: 'history-timeline', label: 'Dòng thời gian lịch sử', icon: HistoryIcon},
		{id: 'team-culture', label: 'Đội ngũ của chúng tôi', icon: PersonStanding},
		{id: 'activity-gallery', label: 'Hình ảnh hoạt động', icon: BookImage},
		{id: 'why-choose-us', label: 'Vì sao chọn chúng tôi?', icon: UsersRound},
	];
	return <CircularNav navItems={navItems} />;
}
