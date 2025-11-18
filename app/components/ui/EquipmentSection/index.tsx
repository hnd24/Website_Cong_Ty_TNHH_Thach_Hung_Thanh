import {EquipmentCard} from '@/app/thiet-bi/components/EquipmentSection/EquipmentCard';
import {Button} from '@/components/ui/button';
import {ACHIEVEMENTS} from '@/constants';
import {getOutstandingEquipments} from '@/data/project';
import Link from 'next/link';

export default async function EquipmentSection() {
	const equipmentData = await getOutstandingEquipments();
	const displayedEquipments = (equipmentData || []).slice(0, 4);

	return (
		<section
			id="featured_equipments"
			aria-labelledby="featured-equipments-heading"
			className="scroll-mt-2 bg-background/80 py-16 sm:py-24"
			itemScope
			itemType="https://schema.org/RentalService">
			<meta itemProp="serviceType" content="Cho thuê thiết bị xây dựng" />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2
						id="featured-equipments-heading"
						className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
						itemProp="name">
						Thiết Bị Cho Thuê Nổi Bật
					</h2>

					<p
						className="mt-4 text-base text-muted-foreground md:text-lg"
						itemProp="description">
						Một phần trong hơn{' '}
						<strong className="font-semibold">
							{ACHIEVEMENTS.numberOfEquipments.value} thiết bị
						</strong>{' '}
						sẵn kho phục vụ thi công 24/7, đáp ứng các nhu cầu xây dựng, nền móng, công
						trình dân dụng – công nghiệp tại Long An và khu vực lân cận.
					</p>
				</div>

				{/* Grid thiết bị */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{displayedEquipments.map(item => (
						<EquipmentCard key={item.slug} equipment={item} />
					))}
				</div>

				{/* Xem tất cả */}
				<div className="mt-10 flex justify-center">
					<Button asChild variant="outline" size="lg" className="text-base font-semibold">
						<Link href="/thiet-bi" aria-label="Xem tất cả thiết bị cho thuê">
							Xem tất cả thiết bị
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
