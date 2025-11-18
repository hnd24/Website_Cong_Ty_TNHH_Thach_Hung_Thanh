'use client';
import {CircularNav, NavItemType} from '@/components/CircularNav';
import {Building2, FileCog, Milestone, ShoppingCart, UsersRound, Wrench} from 'lucide-react';

export default function CircularNavHome() {
	const navItems: NavItemType[] = [
		{id: 'hero', label: 'Trang chủ', icon: Building2},
		{id: 'completed_projects', label: 'Công trình đã thực hiện', icon: FileCog},
		{id: 'services', label: 'Dịch vụ', icon: Wrench},
		{id: 'featured_equipments', label: 'Thiết bị nổi bật', icon: ShoppingCart, special: true},
		{id: 'milestones', label: 'Dấu ấn', icon: Milestone},
		{id: 'why_choose_us', label: 'Vì sao chọn chúng tôi', icon: UsersRound},
	];
	return <CircularNav navItems={navItems} />;
}
