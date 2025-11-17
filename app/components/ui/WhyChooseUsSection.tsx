// components/sections/why-choose-us-section.tsx

import {Card, CardContent} from '@/components/ui/card';
import {REASONS} from '@/constants';

export default function WhyChooseUsSection() {
	return (
		<section
			id="why_choose_us"
			aria-labelledby="why-choose-us-heading"
			className="scroll-mt-24 bg-background/80 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-10 text-center">
					<h2
						id="why-choose-us-heading"
						className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Vì sao chọn chúng tôi?
					</h2>
					<p className="mt-4 text-lg text-gray-700">
						Đối tác thi công xây dựng và cho thuê thiết bị tại Long An, cam kết mang lại
						tiến độ, an toàn và chất lượng cho mọi công trình.
					</p>
				</div>

				{/* Lý do */}
				<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{REASONS.map(item => {
						const Icon = item.icon;

						return (
							<li key={item.title}>
								<Card className="h-full border border-border bg-white shadow-sm dark:border-gray-700 dark:bg-navy-blue">
									<CardContent className="flex h-full flex-col items-center gap-3 text-center">
										{/* Icon (decorative) */}
										<div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
											<Icon
												className="size-8 text-primary-blue"
												aria-hidden="true"
											/>
										</div>

										{/* Title */}
										<h3 className="text-base font-semibold text-foreground">
											{item.title}
										</h3>

										{/* Optional description nếu REASONS có field description */}
										{item.description && (
											<p className="text-sm text-gray-600 dark:text-gray-300">
												{item.description}
											</p>
										)}
									</CardContent>
								</Card>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
