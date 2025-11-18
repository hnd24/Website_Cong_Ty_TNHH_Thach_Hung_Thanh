'use client';

import {navItems} from '@/constants';
import {cn} from '@/lib/utils';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import MenuMobile from '../MenuMobile';

export function Navigator() {
	const pathname = usePathname();

	return (
		<>
			<nav className="hidden items-center gap-6 md:flex">
				{navItems.map(item => {
					const isActive = item.href === pathname;

					return (
						<Link
							key={item.label}
							href={item.href}
							className={cn(
								'text-sm font-medium transition-colors',
								isActive ? 'text-blue-400 ' : 'text-gray-800 hover:text-blue-400 ',
							)}>
							{item.label}
						</Link>
					);
				})}
			</nav>
			<MenuMobile />
		</>
	);
}
