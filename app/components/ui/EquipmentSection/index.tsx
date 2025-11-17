import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {ACHIEVEMENTS} from '@/constants';
import {getOutstandingEquipments} from '@/data';
import {formatMoney} from '@/lib/utils';
import Image from 'next/image';
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
							{ACHIEVEMENTS.numberOfDevices.value} thiết bị
						</strong>{' '}
						sẵn kho phục vụ thi công 24/7, đáp ứng các nhu cầu xây dựng, nền móng, công
						trình dân dụng – công nghiệp tại Long An và khu vực lân cận.
					</p>
				</div>

				{/* Grid thiết bị */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{displayedEquipments.map(item => (
						<article
							key={item.id}
							className="h-full"
							itemScope
							itemType="https://schema.org/Product">
							<Card className="p-0 flex h-full flex-col overflow-hidden border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
								{/* Hình */}
								<div className="relative aspect-[4/3] bg-muted">
									<Image
										width={512}
										height={512}
										src={item.image}
										alt={`Thiết bị ${item.name} – ${
											item.status === 'available' ? 'còn hàng' : 'đang thuê'
										}`}
										className="object-cover"
										itemProp="image"
									/>
								</div>

								{/* Nội dung */}
								<CardContent className="flex flex-1 flex-col gap-3 p-4">
									<h3
										className="text-lg font-semibold text-foreground"
										itemProp="name">
										{item.name}
									</h3>

									{/* Giá & badge */}
									<div>
										<p
											className="text-lg font-bold text-blue-500"
											itemProp="offers"
											itemScope
											itemType="https://schema.org/Offer">
											<span itemProp="price">
												{formatMoney(item.pricePerDay, {
													multiplyByThousand: true,
												})}
											</span>{' '}
											<span itemProp="priceCurrency">VND</span> /ngày
										</p>

										<link
											itemProp="availability"
											href={
												item.status === 'available'
													? 'https://schema.org/InStock'
													: 'https://schema.org/OutOfStock'
											}
										/>

										{item.status === 'available' ? (
											<span className="mt-1 w-fit rounded-xl bg-[#dcfce7] px-2 py-0.5 text-xs font-semibold text-[#166534]">
												Còn hàng
											</span>
										) : (
											<span className="mt-1 w-fit rounded-xl bg-[#fef9c3] px-2 py-0.5 text-xs font-semibold text-[#854d0e]">
												Đang thuê
											</span>
										)}
									</div>

									{/* Button xem chi tiết */}
									<Button asChild variant="outline" className="mt-auto">
										<Link
											href={`/thiet-bi/${item.id}`}
											itemProp="url"
											aria-label={`Xem chi tiết thiết bị ${item.name}`}>
											Xem chi tiết thiết bị
										</Link>
									</Button>
								</CardContent>
							</Card>
						</article>
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
