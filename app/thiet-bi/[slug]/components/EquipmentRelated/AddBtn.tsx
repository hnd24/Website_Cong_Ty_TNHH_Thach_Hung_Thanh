'use client';

import {Button} from '@/components/ui/button';
import {getEquipments} from '@/data/equipment';
import {useIsLoad} from '@/hooks/use-params';
import {useEquipmentDetailStore} from '@/stores/equipment-store';

export default function AddBtn({type}: {type: string}) {
	const {isLoad, setIsLoad} = useIsLoad();
	const addDataFn = useEquipmentDetailStore(state => state.addEquipments);
	const equipments = useEquipmentDetailStore(state => state.equipments);
	const meta = useEquipmentDetailStore(state => state.meta);
	const page = Math.ceil(equipments.length / 4);
	const limit = 4;
	const disabled = equipments.length === meta.total || isLoad;
	const handleClick = async () => {
		setIsLoad(true);
		const data = await getEquipments({
			typeEquipment: type,
			meta: {
				page: page + 1,
				limit,
			},
		});
		addDataFn(data.equipments);
		setIsLoad(false);
	};
	return (
		<Button
			disabled={disabled}
			size="lg"
			variant="primary"
			onClick={async () => {
				await handleClick();
			}}>
			Thêm thiết bị
		</Button>
	);
}
