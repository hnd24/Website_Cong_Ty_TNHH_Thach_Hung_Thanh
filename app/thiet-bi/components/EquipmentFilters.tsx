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
		<aside className="w-full lg:w-1/4 xl:w-1/5" aria-label="Bộ lọc sản phẩm">
			<div className="sticky top-28 space-y-6 rounded-xl border bg-card p-5 shadow-sm">
				<h3 className="text-lg font-bold text-navy-blue dark:text-white">
					Bộ lọc thiết bị
				</h3>

				<div className="space-y-2">
					<Label htmlFor="equipment-type">Loại thiết bị</Label>
					<Select
						onValueChange={value => {
							setSearchParams({typeEquipment: value as TypeEquipmentEnum});
						}}
						defaultValue={searchParams.typeEquipment}>
						<SelectTrigger
							className="w-full"
							id="equipment-type"
							aria-label="Chọn loại thiết bị">
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
				</div>

				<fieldset className="space-y-2">
					<legend className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Khoảng giá (VNĐ)
					</legend>
					<div className="flex items-center gap-2">
						<div className="flex-1">
							<Input
								id="price-min"
								min={0}
								inputMode="numeric"
								placeholder="TỪ"
								aria-label="Giá thấp nhất"
								value={
									searchParams.priceRange[0] === 0
										? ''
										: searchParams.priceRange[0]
								}
								onChange={e => {
									const value = e.target.value;
									if (/^\d*$/.test(value)) {
										setSearchParams({
											priceRange: [
												value === '' ? 0 : Number(value),
												searchParams.priceRange[1],
											],
										});
									}
								}}
								className="text-right"
							/>
						</div>
						<span className="text-muted-foreground" aria-hidden="true">
							–
						</span>
						<div className="flex-1">
							<Input
								id="price-max"
								min={0}
								inputMode="numeric"
								placeholder="ĐẾN"
								aria-label="Giá cao nhất"
								value={
									searchParams.priceRange[1] === 0
										? ''
										: searchParams.priceRange[1]
								}
								onChange={e => {
									const value = e.target.value;
									if (/^\d*$/.test(value)) {
										setSearchParams({
											priceRange: [
												searchParams.priceRange[0],
												value === '' ? 0 : Number(value),
											],
										});
									}
								}}
								className="text-right"
							/>
						</div>
					</div>
				</fieldset>

				{/* Thương hiệu */}
				<div className="space-y-2">
					<Label htmlFor="brand-type">Thương hiệu</Label>
					<Select
						onValueChange={value => {
							setSearchParams({brandEquipment: value as BrandEquipmentEnum});
						}}
						defaultValue={searchParams.brandEquipment}>
						<SelectTrigger
							className="w-full"
							id="brand-type"
							aria-label="Chọn thương hiệu">
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

				<EquipmentLoadBtn />
			</div>
		</aside>
	);
}
