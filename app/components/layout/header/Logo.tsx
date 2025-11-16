'use client';

import {Circle} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';

export function Logo() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href="/"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className="group relative inline-flex items-center gap-2 focus-visible:outline-ring/50 rounded-lg focus-visible:ring-2 focus-visible:ring-ring">
			<div className="relative flex items-center justify-center w-10 h-10">
				{/* Animated background circle */}
				<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-blue/20 via-primary-blue/10 to-transparent group-hover:from-primary-blue/30 group-hover:via-primary-blue/20 transition-all duration-500" />

				{/* Icon container */}
				<div className="relative z-10 flex items-center justify-center text-primary-blue">
					<Circle
						strokeWidth={2.5}
						className={`w-5 h-5 transition-all duration-500 ${
							isHovered ? 'scale-110 rotate-12' : 'scale-100'
						}`}
					/>
				</div>

				{/* Shimmer effect on hover */}
				<div
					className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden`}>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700" />
				</div>
			</div>

			<div className="flex flex-col justify-center">
				<span className="text-sm font-semibold text-muted-foreground group-hover:text-primary-blue/60 transition-colors duration-300 uppercase">
					Công ty TNHH
				</span>
				<span className="text-lg font-bold text-foreground group-hover:text-primary-blue transition-colors duration-300 leading-tight">
					Thạnh Hưng Thành
				</span>
			</div>

			<div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-blue to-primary-blue/50 group-hover:w-full transition-all duration-500" />
		</Link>
	);
}
