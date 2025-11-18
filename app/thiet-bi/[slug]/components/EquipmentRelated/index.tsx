'use client';

import {EquipmentCard} from '@/app/thiet-bi/components/EquipmentSection/EquipmentCard';
import {getEquipments} from '@/data/equipment';
import {useIsLoad} from '@/hooks/use-params';
import {useEquipmentDetailStore} from '@/stores/equipment-store';
import {Dot} from 'lucide-react';
import {useEffect, useState} from 'react';
import AddBtn from './AddBtn';
import SkeletonEquipmentRelated from './Skeleton';

type Props = {
	type: string;
};

export default function EquipmentRelated({type}: Props) {
	const [isFirst, setIsFirst] = useState(true);
	const {isLoad, setIsLoad} = useIsLoad();
	const storeDataFn = useEquipmentDetailStore(state => state.updateEquipmentsData);
	const equipments = useEquipmentDetailStore(state => state.equipments);

	const {page = 1, limit = 4} = useEquipmentDetailStore(state => {
		return state.meta;
	});

	useEffect(() => {
		async function handleData() {
			setIsLoad(true);
			const data = await getEquipments({
				typeEquipment: type,
				meta: {
					page,
					limit,
				},
			});
			storeDataFn(data);
			setIsLoad(false);
		}
		if (isFirst) {
			handleData();
		}
		return () => {
			setIsFirst(false);
		};
	}, [isFirst]);

	if (isLoad) {
		return <SkeletonEquipmentRelated number={limit * page} />;
	}
	return (
		<section className="mt-16 mx-auto  w-full max-w-7xl ">
			<h2 className="text-2xl font-bold text-primary">Thiết bị liên quan</h2>

			{equipments.length <= 0 ? (
				<div className="mt-4 flex text-gray-600">
					<Dot /> <span>Tạm thời chưa cập nhật</span>
				</div>
			) : (
				<>
					<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{equipments.map((equipment, index) => (
							<EquipmentCard key={index} equipment={equipment} />
						))}
					</div>
					<div className="mt-4 mb-4 flex justify-center">
						<AddBtn type={type} />
					</div>
				</>
			)}
		</section>
	);
}
