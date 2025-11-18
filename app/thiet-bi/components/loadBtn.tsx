'use client';
import {Button} from '@/components/ui/button';
import {BrandEquipmentEnum, StatusEquipmentEnum, TypeEquipmentEnum} from '@/constants/enum';
import {getEquipments} from '@/data/equipment';
import {useIsLoad, useSearchParams} from '@/hooks/use-params';
import {useEquipmentListStore} from '@/stores/equipment-store';

export default function EquipmentLoadBtn() {
	const {isLoad, setIsLoad} = useIsLoad();
	const storeDataFn = useEquipmentListStore(state => state.updateEquipmentsData);
	const {searchParams} = useSearchParams();
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
	};

	const handleClick = async function handleData() {
		setIsLoad(true);
		const data = await getEquipments({
			...param,
			meta: {
				page: 1,
				limit: 6,
			},
		});
		storeDataFn(data);
		setIsLoad(false);
	};

	return (
		<Button
			variant="primary"
			disabled={isLoad}
			className="w-full"
			size="lg"
			onClick={async () => {
				await handleClick();
			}}>
			Tìm kiếm
		</Button>
	);
}
