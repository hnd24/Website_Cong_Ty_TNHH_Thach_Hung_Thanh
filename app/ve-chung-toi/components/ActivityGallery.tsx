// components/about/activity-gallery-section.tsx
import {Card} from '@/components/ui/card';
import Image from 'next/image';
import {GALLERY_ITEMS} from '../constants';

export function ActivityGallerySection() {
	return (
		<section
			id="activity-gallery"
			aria-labelledby="activity-gallery-heading"
			className="w-full flex justify-center py-24 bg-white dark:bg-background-dark">
			<div className="w-full max-w-6xl px-4">
				{/* Heading */}
				<div className="mb-10 flex flex-col items-center gap-3 text-center">
					<h2
						id="activity-gallery-heading"
						className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">
						Hình ảnh hoạt động
					</h2>
					<p className="max-w-2xl text-sm sm:text-base text-[#60758a] dark:text-gray-400">
						Thực tế công việc tại các công trường, kho bãi và hình ảnh đội ngũ chuyên
						nghiệp của chúng tôi trong quá trình thi công xây dựng và cho thuê thiết bị
						tại Long An và khu vực lân cận.
					</p>
				</div>

				{/* Gallery */}
				<Card className="border-none bg-transparent shadow-none">
					<div className="grid auto-rows-[180px] gap-4 md:auto-rows-[220px] md:grid-cols-4 lg:auto-rows-[260px] lg:grid-cols-6">
						{GALLERY_ITEMS.map(item => (
							<figure
								key={item.alt}
								className={`group relative overflow-hidden rounded-2xl ${item.className}`}>
								<Image
									fill
									src={item.src}
									alt={item.alt}
									loading="lazy"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
								<figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-3 pt-10 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									{item.caption}
								</figcaption>
							</figure>
						))}
					</div>
				</Card>
			</div>
		</section>
	);
}
