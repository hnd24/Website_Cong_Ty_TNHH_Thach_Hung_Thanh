import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {REASONS} from '@/constants';

export function WhyChooseUsSection() {
	return (
		<section
			id="why-choose-us"
			aria-labelledby="why-choose-us-heading"
			className="w-full flex justify-center py-24 bg-background-light dark:bg-background-dark/50">
			<div className="w-full max-w-5xl px-4">
				{/* Heading */}
				<div className="mb-12 flex flex-col items-center gap-3 text-center">
					<h2
						id="why-choose-us-heading"
						className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">
						Lý do chọn chúng tôi
					</h2>
					<p className="max-w-2xl text-sm sm:text-base text-[#60758a] dark:text-gray-400">
						Cam kết về chất lượng, tiến độ và sự hỗ trợ toàn diện là nền tảng giúp dự án
						xây dựng của bạn vận hành hiệu quả và an toàn hơn.
					</p>
				</div>

				{/* Reasons list */}
				<ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{REASONS.map(({title, description, icon: Icon}) => (
						<li key={title}>
							<Card className="h-full border-none bg-white shadow-md dark:bg-background-dark gap-0">
								<CardHeader>
									<CardTitle className=" flex items-center gap-4 ">
										<Icon
											size={24}
											className="text-primary-blue"
											aria-hidden="true"
										/>

										<span className="text-base font-bold text-[#111418] dark:text-white">
											{title}
										</span>
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0">
									<p className="text-sm text-[#60758a] dark:text-gray-400">
										{description}
									</p>
								</CardContent>
							</Card>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
