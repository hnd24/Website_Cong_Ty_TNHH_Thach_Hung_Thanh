// components/product/product-hero.tsx
import ContactDialog from '@/app/components/layout/header/ContactDialog';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import {formatMoney} from '@/lib/utils';
import {DetailEquipmentType} from '@/types';
import {PhoneCall} from 'lucide-react';
import Image from 'next/image';

interface ProductHeroProps {
	equipment: DetailEquipmentType;
}

export default function EquipmentHeroSection({equipment}: ProductHeroProps) {
	const {images} = equipment;

	const imageList = images.length > 0 ? images : ['/placeholder-equipment.jpg'];
	const price = formatMoney(equipment.price || 0, {multiplyByThousand: true});
	return (
		<section className="  mx-auto  w-full max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
			<Card className="h-fit shadow-md p-0 rounded-xl">
				<Carousel
					opts={{
						loop: true,
					}}
					className="w-full shadow-xl ">
					<CarouselContent>
						{imageList.map((src, index) => (
							<CarouselItem key={`${equipment.id}-${index}`}>
								<AspectRatio
									ratio={4 / 3}
									className=" border-gray-600 overflow-hidden rounded-lg ">
									<div className="relative h-full w-full">
										<Image
											src={src}
											alt={`${equipment.name} - hình ${index + 1}`}
											fill
											className="object-cover"
											sizes="(min-width: 1024px) 560px, 100vw"
											priority={index === 0}
										/>
									</div>
								</AspectRatio>
							</CarouselItem>
						))}
					</CarouselContent>

					{/* Nút điều hướng */}
					<CarouselPrevious className="-left-6 size-12" />
					<CarouselNext className="-right-6 size-12" />
				</Carousel>
			</Card>

			{/* RIGHT: thông tin thiết bị */}
			<div className="flex flex-col">
				<h1 className="text-3xl font-extrabold text-primary sm:text-4xl">
					{equipment.name}
				</h1>
				<p className="mt-2 text-base text-muted-foreground">{equipment.description}</p>

				<div className="mt-4">
					<p className="font-semibold text-muted-foreground">Giá thuê:</p>
					<p className="text-4xl font-bold text-primary-blue">
						{price}{' '}
						<span className="text-lg font-medium text-muted-foreground">/ngày</span>
					</p>
				</div>

				<div className="mt-4 flex items-center gap-4">
					{equipment.status && (
						<Badge
							variant="outline"
							className={
								equipment.status === 'available'
									? 'border-green-500 bg-green-50 text-green-800'
									: 'border-red-500 bg-red-50 text-red-700'
							}>
							<span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-current" />
							{equipment.status === 'available' ? 'Còn hàng' : 'Hết hàng'}
						</Badge>
					)}
				</div>

				<ul className="mt-6 space-y-2 text-muted-foreground">
					<li className="flex">
						<span className="mr-2 w-28 font-semibold text-foreground">
							Thương hiệu:
						</span>
						<span>{equipment.brand}</span>
					</li>
					<li className="flex">
						<span className="mr-2 w-28 font-semibold text-foreground">Loại:</span>
						<span>{equipment.type}</span>
					</li>
				</ul>

				<ContactDialog
					icon={PhoneCall}
					label="Liên hệ chúng tôi"
					className="mt-6 w-fit text-lg "
				/>
			</div>
		</section>
	);
}
