import {Card, CardContent} from '@/components/ui/card';
import {SERVICES} from '@/constants';

export default function ServicesSection() {
	return (
		<section
			id="services"
			aria-labelledby="services-heading"
			className="scrolling-mt-16 bg-muted/80 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Dịch Vụ Cốt Lõi
					</h2>
					<p className="mt-4 text-base text-muted-foreground md:text-lg">
						Giải pháp toàn diện cho mọi nhu cầu xây dựng của bạn.
					</p>
				</div>

				{/* Grid services */}
				<article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{SERVICES.map(service => {
						const Icon = service.icon;
						return (
							<Card
								key={service.title}
								className="bg-gray-50 h-full border border-border shadow-sm">
								<CardContent className="flex h-full flex-col gap-2 px-8 py-2 text-start">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
										<Icon size={24} aria-hidden="true" />
									</div>
									<h3 className=" uppercase text-lg font-semibold text-foreground">
										{service.title}
									</h3>
									<p className="text-gray-700 flex-1">{service.description}</p>
									<p className="text-gray-700 flex-1">
										{service.highlights?.join(' – ')}.
									</p>
								</CardContent>
							</Card>
						);
					})}
				</article>
			</div>
		</section>
	);
}
