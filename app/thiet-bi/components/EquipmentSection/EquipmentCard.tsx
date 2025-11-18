// src/components/equipment/equipment-card.tsx
'use client';

import {AspectRatio} from '@/components/ui/aspect-ratio';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {StatusEquipmentEnum} from '@/constants/enum';
import {formatMoney} from '@/lib/utils';
import {EquipmentType} from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface EquipmentCardProps {
	equipment: EquipmentType;
}

export function EquipmentCard({equipment}: EquipmentCardProps) {
	const isAvailable = equipment.status === (StatusEquipmentEnum.Available as String);

	return (
		<article
			key={equipment.id}
			className="h-full"
			itemScope
			itemType="https://schema.org/Product">
			<Card className="p-0 gap-0 flex h-full flex-col overflow-hidden border border-border bg-background shadow-sm transition-shadow hover:shadow-md">
				{/* Hình */}
				<div className="relative w-full">
					<AspectRatio ratio={4 / 3}>
						<Image
							src={equipment.image}
							alt={`Thiết bị ${equipment.name}`}
							fill
							className="object-cover rounded-t-lg"
							sizes="(min-width: 1280px) 25vw,
									(min-width: 1024px) 33vw,
									(min-width: 768px) 50vw,
									100vw"
						/>
					</AspectRatio>
				</div>

				{/* Nội dung */}
				<CardContent className="flex flex-1 flex-col p-4">
					<h3 className="text-lg font-semibold text-foreground" itemProp="name">
						{equipment.name}
					</h3>
					{/* Thương hiệu */}
					<p className="text-sm text-muted-foreground">Thương hiệu: {equipment.brand}</p>
					{/* Giá & badge */}
					<div className="mt-3">
						<p
							className="text-lg font-bold text-blue-500"
							itemProp="offers"
							itemScope
							itemType="https://schema.org/Offer">
							<span itemProp="price">
								{formatMoney(equipment.price, {
									multiplyByThousand: true,
								})}
							</span>{' '}
							/ngày
						</p>

						<link
							itemProp="availability"
							href={
								equipment.status === 'available'
									? 'https://schema.org/InStock'
									: 'https://schema.org/OutOfStock'
							}
						/>

						{isAvailable ? (
							<span className="mt-1 w-fit rounded-xl bg-[#dcfce7] px-2 py-0.5 text-xs font-semibold text-[#166534]">
								Còn hàng
							</span>
						) : (
							// <span className="mt-1 w-fit rounded-xl bg-[#fef9c3] px-2 py-0.5 text-xs font-semibold text-[#854d0e]">
							// 	Đang thuê
							// </span>
							<span className="mt-1 w-fit rounded-xl bg-[#f0cbbe] px-2 py-0.5 text-xs font-semibold text-[#941d12]">
								Hết hàng
							</span>
						)}
					</div>

					{/* Button xem chi tiết */}
					<Button asChild variant="outline" className="mt-3">
						<Link
							href={`/thiet-bi/${equipment.slug}`}
							itemProp="url"
							aria-label={`Xem chi tiết thiết bị ${equipment.name}`}>
							Xem chi tiết thiết bị
						</Link>
					</Button>
				</CardContent>
			</Card>
		</article>
	);
}
