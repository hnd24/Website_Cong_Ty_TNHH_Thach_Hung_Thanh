import {ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER, SOCIAL_MEDIA} from '@/constants';
import {Mail, MapPin, Phone} from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
	const displayPhone = (PHONE_NUMBER ?? '').replace(/^\+?84/, '0');

	return (
		<footer
			className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
			role="contentinfo"
			itemScope
			itemType="https://schema.org/Organization">
			{/* Background blobs */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
				<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
			</div>

			<div className="relative z-10">
				{/* Main Content */}
				<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{/* Cột 1: Thông tin công ty */}
						<div>
							<h2 className="mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-xl font-bold tracking-tight text-transparent md:text-2xl">
								<span itemProp="name">CÔNG TY TNHH THẠNH HƯNG THÀNH</span>
							</h2>
							<p className="mb-4 max-w-md text-sm leading-relaxed text-slate-300">
								Đơn vị thi công xây dựng và cho thuê thiết bị tại Long An, cung cấp
								giải pháp chuyên nghiệp cho công trình dân dụng, công nghiệp và hạ
								tầng.
							</p>

							<div className="flex items-center gap-4">
								{Object.keys(SOCIAL_MEDIA).map(key => {
									const social = SOCIAL_MEDIA[key];
									const Icon = social.icon;
									return (
										<Link
											key={key}
											href={social.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={key ?? `Kênh ${key}`}
											itemProp="sameAs"
											className="rounded-full border-2 border-slate-600/60 p-1.5 transition-colors hover:border-blue-400 hover:bg-blue-500/10">
											<Icon size={16} aria-hidden="true" />
										</Link>
									);
								})}
							</div>
						</div>

						{/* Cột 2: Liên hệ */}
						<div className="space-y-4">
							{/* Địa chỉ */}
							<a
								href={ADDRESS.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-start gap-3">
								<MapPin
									className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 transition-colors group-hover:text-blue-300"
									aria-hidden="true"
								/>
								<div
									itemProp="address"
									itemScope
									itemType="https://schema.org/PostalAddress">
									<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
										Địa chỉ
									</p>
									<p className="text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300">
										<span itemProp="streetAddress">{ADDRESS.string}</span>
									</p>
								</div>
							</a>

							{/* Hotline */}
							<div className="group flex items-start gap-3">
								<Phone
									className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 transition-colors group-hover:text-blue-300"
									aria-hidden="true"
								/>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
										Hotline / Zalo
									</p>
									<a href={`tel:${PHONE_NUMBER}`} className="no-underline">
										<p
											itemProp="telephone"
											className="text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300">
											{displayPhone}
										</p>
									</a>
								</div>
							</div>

							{/* Email */}
							<div className="group flex items-start gap-3">
								<Mail
									className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400 transition-colors group-hover:text-blue-300"
									aria-hidden="true"
								/>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
										Email
									</p>
									<a
										href={`mailto:${EMAIL_ADDRESS}`}
										className="no-underline"
										target="_blank"
										rel="noopener noreferrer">
										<p
											itemProp="email"
											className="text-sm font-medium text-slate-200 transition-colors group-hover:text-blue-300">
											{EMAIL_ADDRESS}
										</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Divider and Copyright */}
				<div className="border-t border-slate-700/50 backdrop-blur-sm">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-4">
						<div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:items-center">
							<p className="text-center text-sm text-slate-400">
								© 2025 CÔNG TY TNHH THẠNH HƯNG THÀNH. All rights reserved.
							</p>
							{/* Nếu sau này bạn có trang Điều khoản, Chính sách, có thể thêm vào đây */}
							{/* <div className="flex gap-4 text-xs text-slate-500">
                <Link href="/terms" className="hover:text-slate-300">Điều khoản sử dụng</Link>
                <Link href="/privacy" className="hover:text-slate-300">Chính sách bảo mật</Link>
              </div> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
