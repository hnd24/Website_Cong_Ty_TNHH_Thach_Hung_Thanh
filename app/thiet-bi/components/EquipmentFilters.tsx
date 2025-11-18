// src/components/equipment/equipment-filters.tsx
'use client';

import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {BrandEquipmentEnum, TypeEquipmentEnum} from '@/constants/enum';
import {useSearchParams} from '@/hooks/use-params';
import EquipmentLoadBtn from './loadBtn';

export function EquipmentFilters() {
	const {searchParams, setSearchParams} = useSearchParams();

	const typeEquipment = Object.entries(TypeEquipmentEnum);
	const brandEquipment = Object.entries(BrandEquipmentEnum);
	return (
		<aside className="w-full lg:w-1/4 xl:w-1/5">
			<div className="sticky top-28 space-y-6 rounded-xl border bg-card p-5">
				<h3 className="text-lg font-bold text-navy-blue dark:text-white">Lọc theo</h3>

				{/* Loại thiết bị */}
				<div className="space-y-2">
					<Label htmlFor="equipment-type">Loại thiết bị</Label>
					{
						<Select
							onValueChange={value => {
								setSearchParams({typeEquipment: value as TypeEquipmentEnum});
							}}
							defaultValue={searchParams.typeEquipment}>
							<SelectTrigger className="w-full" id="equipment-type">
								<SelectValue placeholder="Tất cả" />
							</SelectTrigger>
							<SelectContent>
								{typeEquipment.map(([key, value]) => (
									<SelectItem key={key} value={value}>
										{value}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					}
				</div>

				{/* Giá thuê */}
				<div className="space-y-2">
					<Label>Khoảng giá </Label>
					<div className="flex items-center gap-2">
						<div className="flex-1">
							<Input
								inputMode="numeric"
								placeholder="TỪ"
								value={searchParams.priceRange[0]}
								onChange={value => {
									setSearchParams({
										priceRange: [
											Number(value.target.value),
											searchParams.priceRange[1],
										],
									});
								}}
								className="text-right"
							/>
						</div>
						<span className="text-muted-foreground">–</span>
						<div className="flex-1">
							<Input
								inputMode="numeric"
								placeholder="ĐẾN"
								value={searchParams.priceRange[1]}
								onChange={value => {
									setSearchParams({
										priceRange: [
											searchParams.priceRange[0],
											Number(value.target.value),
										],
									});
								}}
								className="text-right"
							/>
						</div>
					</div>
				</div>

				{/* Trạng thái */}
				{/* <div className="space-y-2">
					<Label>Trạng thái</Label>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<Checkbox id="status-in-stock" />
							<Label htmlFor="status-in-stock" className="font-normal">
								Còn hàng
							</Label>
						</div>
						<div className="flex items-center gap-2">
							<Checkbox id="status-rented" />
							<Label htmlFor="status-rented" className="font-normal">
								Đang thuê
							</Label>
						</div>
					</div>
				</div> */}

				{/* Thương hiệu */}
				<div className="space-y-2">
					<Label htmlFor="brand-type">Thương hiệu</Label>
					<Select
						onValueChange={value => {
							setSearchParams({brandEquipment: value as BrandEquipmentEnum});
						}}
						defaultValue={searchParams.brandEquipment}>
						<SelectTrigger className="w-full" id="brand-type">
							<SelectValue placeholder="Tất cả" />
						</SelectTrigger>
						<SelectContent>
							{brandEquipment.map(([key, value]) => (
								<SelectItem key={key} value={value}>
									{value}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				{/* Button loading */}
				<EquipmentLoadBtn />
			</div>
		</aside>
	);
}
