// components/sections/why-choose-us-section.tsx

import {Card, CardContent} from '@/components/ui/card';
import {REASONS} from '@/constants';

export default function WhyChooseUsSection() {
	return (
		<section id="why_choose_us" className="scrolling-mt-24 bg-background/80 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-10 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl capitalize">
						Vì sao chọn chúng tôi?
					</h2>
					<p className="mt-4 text-gray-700 text-lg ">
						Cam kết mang lại giá trị và sự an tâm cho mọi công trình.
					</p>
				</div>

				{/* Lý do */}
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{REASONS.map((item, index) => {
						const Icon = item.icon;
						return (
							<Card
								key={index}
								className="h-full border border-border bg-white shadow-sm dark:bg-navy-blue dark:border-gray-700">
								<CardContent className="flex h-full flex-col items-center text-center gap-3">
									{/* Icon */}
									<div className="h-14 w-14 flex items-center justify-center rounded-full bg-gray-50">
										<Icon className="size-8 text-primary-blue" />
									</div>

									{/* Title */}
									<h3 className="text-base font-semibold text-foreground">
										{item.title}
									</h3>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
