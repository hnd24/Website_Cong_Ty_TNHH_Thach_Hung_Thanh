'use client';

import {Button} from '@/components/ui/button';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {Building2, FileCog, Milestone, Plus, UsersRound, Wrench, Zap} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

const navItems = [
	{id: 'hero', label: 'Trang chủ', icon: Building2},
	{id: 'completed_projects', label: 'Công trình đã thực hiện', icon: FileCog},
	{id: 'services', label: 'Dịch vụ', icon: Wrench},
	{id: 'featured_equipments', label: 'Thiết bị nổi bật', icon: Zap},
	{id: 'milestones', label: 'Dấu ấn', icon: Milestone},
	{id: 'why_choose_us', label: 'Vì sao chọn chúng tôi', icon: UsersRound},
];

export function CircularNav() {
	const [isOpen, setIsOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement | null>(null);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({behavior: 'smooth', block: 'start'});
			setIsOpen(false);
		}
	};

	const handleMouseEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsOpen(false);
		}, 300);
	};

	const handleToggle = () => {
		setIsOpen(prev => !prev);
	};

	const handleTouchStart = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
		};
	}, []);

	return (
		<TooltipProvider>
			<nav
				ref={containerRef}
				aria-label="Điều hướng nhanh các phần trên trang"
				className="fixed right-4 top-1/2 z-40 -translate-y-1/2"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onTouchStart={handleTouchStart}>
				<div className="flex flex-col items-center gap-4">
					{/* Nhóm nút nav nằm trên main toggle */}
					<div
						className={`flex flex-col gap-4 transform transition-all duration-300 ease-out ${
							isOpen
								? 'visible translate-y-0 opacity-100'
								: 'invisible translate-y-4 opacity-0'
						}`}
						style={{
							transitionProperty: 'opacity, transform, visibility',
						}}>
						{navItems.map((item, index) => {
							const Icon = item.icon;

							const delay = isOpen
								? `${(navItems.length - 1 - index) * 70}ms`
								: '0ms';

							return (
								<Tooltip key={item.id} delayDuration={150}>
									<TooltipTrigger asChild>
										<Button
											type="button"
											size="icon"
											aria-label={item.label}
											className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95"
											style={{transitionDelay: delay}}
											onClick={() => handleScroll(item.id)}>
											<Icon className="h-6 w-6" />
										</Button>
									</TooltipTrigger>
									<TooltipContent side="left" className="text-xs font-medium">
										{item.label}
									</TooltipContent>
								</Tooltip>
							);
						})}
					</div>

					<Button
						type="button"
						size="icon"
						aria-label="Mở điều hướng nhanh"
						aria-expanded={isOpen}
						className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${
							isOpen ? 'shadow-blue-500/50' : ''
						}`}
						onClick={handleToggle}>
						<div
							className={`transition-transform duration-300 ${
								isOpen ? 'rotate-45' : ''
							}`}>
							<Plus className="h-6 w-6" />
						</div>
					</Button>
				</div>
			</nav>
		</TooltipProvider>
	);
}
