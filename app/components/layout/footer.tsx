'use client';

import {ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER, SOCIAL_MEDIA} from '@/constants';
import {Mail, MapPin, Phone} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10">
				{/* Main Content */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
						{/* Cột 1: Thông tin công ty */}
						<div>
							<h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
								CÔNG TY TNHH THẠNH HƯNG THÀNH
							</h2>
							<p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-md">
								Đơn vị hàng đầu cung cấp giải pháp chuyên nghiệp cho các nhu cầu
								kinh doanh hiện đại.
							</p>
							<div className="flex items-center gap-6">
								{Object.keys(SOCIAL_MEDIA).map(key => {
									const social = SOCIAL_MEDIA[key];
									const Icon = social.icon;
									return (
										<Link
											key={key}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											className="border-2 p-1.5 rounded-full ">
											<Icon size={16} />
										</Link>
									);
								})}
							</div>
						</div>
						<div className="space-y-4">
							<a
								href={ADDRESS.url}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-start gap-3 group">
								<MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
								<div>
									<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
										Địa chỉ
									</p>
									<p className="text-sm text-slate-200 hover:text-blue-300 transition-colors font-medium">
										{ADDRESS.string}
									</p>
								</div>
							</a>

							<div className="flex items-start gap-3 group">
								<Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
								<a href={`tel:${PHONE_NUMBER}`} className="no-underline">
									<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
										Hotline / Zalo
									</p>
									<p className="text-sm text-slate-200 hover:text-blue-300 transition-colors font-medium">
										{(PHONE_NUMBER ?? '').replace(/^\+?84/, '0')}
									</p>
								</a>
							</div>

							<div className="flex items-start gap-3 group">
								<Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300 transition-colors" />
								<a
									href={`mailto:${EMAIL_ADDRESS}`}
									className="no-underline"
									target="_blank"
									rel="noopener noreferrer">
									<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
										Email
									</p>
									<p className="text-sm text-slate-200 hover:text-blue-300 transition-colors font-medium">
										{EMAIL_ADDRESS}
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Divider and Copyright */}
				<div className="border-t border-slate-700/50 backdrop-blur-sm">
					<div className="max-w-7xl mx-auto px-4 sm:px-4 py-6">
						<div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4">
							<p className="text-sm text-slate-400 text-center">
								© 2025 CÔNG TY TNHH THẠNH HƯNG THÀNH. All rights
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
