'use client';

import {Circle} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';

const COMPANY_NAME = 'CÔNG TY TNHH THẠNH HƯNG THÀNH';

export function Logo() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href="/"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			aria-label={`${COMPANY_NAME} – Trang chủ`}
			title={`${COMPANY_NAME} – Trang chủ`}
			className="group relative inline-flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
			<div className="relative flex h-10 w-10 items-center justify-center">
				{/* Animated background circle */}
				<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-blue/20 via-primary-blue/10 to-transparent transition-all duration-500 group-hover:from-primary-blue/30 group-hover:via-primary-blue/20" />

				{/* Icon container (decorative) */}
				<div className="relative z-10 flex items-center justify-center text-primary-blue">
					<Circle
						aria-hidden="true"
						strokeWidth={2.5}
						className={`h-5 w-5 transition-all duration-500 ${
							isHovered ? 'scale-110 rotate-12' : 'scale-100'
						}`}
					/>
				</div>

				{/* Shimmer effect on hover */}
				<div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
					<div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
				</div>
			</div>

			{/* Brand text with organization schema */}
			<div
				className="flex flex-col justify-center"
				itemScope
				itemType="https://schema.org/Organization">
				<span className="text-[11px] font-semibold uppercase text-muted-foreground transition-colors duration-300 group-hover:text-primary-blue/60">
					Công ty TNHH
				</span>
				<span
					itemProp="name"
					className="leading-tight text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary-blue">
					Thạnh Hưng Thành
				</span>
			</div>

			{/* Underline highlight on hover */}
			<div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-blue via-primary-blue to-primary-blue/50 transition-all duration-500 group-hover:w-full" />
		</Link>
	);
}
