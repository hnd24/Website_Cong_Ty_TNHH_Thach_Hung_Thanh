'use client';
import {Button} from '@/components/ui/button';
import {BrandEquipmentEnum, StatusEquipmentEnum, TypeEquipmentEnum} from '@/constants/enum';
import {getEquipments} from '@/data';
import {useEquipmentRes} from '@/hooks/use-equipment';
import {useIsLoad, useSearchParams} from '@/hooks/use-params';
import {useEffect, useState} from 'react';

export default function EquipmentLoadBtn() {
	const [isFirst, setIsFirst] = useState(true);
	const [isClick, setIsClick] = useState(true);
	const storeDataFn = useEquipmentRes(state => state.updateEquipmentsData);
	const updateMetaFn = useEquipmentRes(state => state.updateMeta);
	const {searchParams} = useSearchParams();
	const page = searchParams.page || 1;
	const {isLoad, setIsLoad} = useIsLoad();
	const param = {
		...(searchParams.typeEquipment !== TypeEquipmentEnum.All && {
			typeEquipment: searchParams.typeEquipment,
		}),
		...(searchParams.brandEquipment !== BrandEquipmentEnum.All && {
			brandEquipment: searchParams.brandEquipment,
		}),
		...(searchParams.statusEquipment !== StatusEquipmentEnum.All && {
			statusEquipment: searchParams.statusEquipment,
		}),
		priceRange: searchParams.priceRange,
		page: page,
		limit: 6,
	};
	useEffect(() => {
		async function handleData(page: number) {
			const data = await getEquipments({
				...param,
				meta: {
					page: page,
					limit: 6,
				},
			});
			storeDataFn(data);
			updateMetaFn(data.meta);
			setIsLoad(false);
		}
		if (isFirst) {
			handleData(page);
		}
		if (isLoad) {
			isClick ? handleData(1) : handleData(page);
			setIsClick(false);
		}
		return () => {
			setIsFirst(false);
		};
	}, [isLoad, page]);
	return (
		<Button
			variant="primary"
			disabled={isLoad}
			className="w-full"
			size="lg"
			onClick={() => {
				setIsClick(true);
				setIsLoad(true);
			}}>
			Tìm kiếm
		</Button>
	);
}
