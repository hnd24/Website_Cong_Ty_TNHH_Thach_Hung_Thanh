import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {ACHIEVEMENTS} from '@/constants';
import {getOutstandingEquipments} from '@/data'; // hoặc import từ data tĩnh
import {formatMoney} from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function EquipmentSection() {
	const equipmentData = await getOutstandingEquipments();
	const displayedEquipments = (equipmentData || []).slice(0, 4);

	return (
		<section id="featured_equipments" className="scroll-mt-8 bg-background/80 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Thiết Bị Cho Thuê Nổi Bật
					</h2>
					<p className="mt-4 text-base text-muted-foreground md:text-lg">
						Một phần trong hơn {ACHIEVEMENTS.numberOfDevices.value} thiết bị luôn sẵn
						kho, đáp ứng nhu cầu thi công 24/7.
					</p>
				</div>

				{/* Grid thiết bị */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{displayedEquipments.map(item => (
						<Card
							key={item.name}
							className="p-0 gap-0 flex h-full flex-col overflow-hidden border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
							{/* Hình */}
							<div className="relative aspect-[4/3] bg-muted">
								<Image
									width={512}
									height={512}
									src={item.image}
									alt={item.name}
									className="object-cover"
									// fill
									// sizes="(min-width: 1024px) 25vw, 50vw"
								/>
							</div>

							{/* Nội dung */}
							<CardContent className="!p-4 flex flex-1 flex-col gap-2 py-2">
								<h3 className="flex-1 text-lg font-semibold text-foreground ">
									{item.name}
								</h3>

								{/* Giá + badge */}
								<div className="flex flex-col">
									<p className="text-lg font-bold text-blue-400 ">
										{formatMoney(item.pricePerDay, {multiplyByThousand: true})}{' '}
										/ngày
									</p>
									{item.status === 'available' ? (
										<span className="w-fit px-2  py-0.5 rounded-xl bg-[#dcfce7] text-[#166534] font-semibold text-center text-xs ">
											Còn hàng
										</span>
									) : (
										<span className="w-fit px-2  py-0.5 rounded-xl bg-[#fef9c3] text-[#854d0e] font-semibold text-center text-xs">
											Đang thuê
										</span>
									)}
								</div>

								{/* Button */}
								<Link href={`/thiet-bi/${item.id}`} className="mt-4">
									<Button variant="outline">Xem chi tiết</Button>
								</Link>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Xem tất cả */}
				<div className="mt-10 flex justify-center">
					<Link href="/thiet-bi">
						<Button variant="outline" size="lg" className="text-base font-semibold">
							Xem tất cả thiết bị
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
