'use client';
import {getEquipments} from '@/data/equipment';
import {useIsLoad} from '@/hooks/use-params';
import {useEquipmentListStore} from '@/stores/equipment-store';
import {useEffect, useState} from 'react';
import {EquipmentCard} from './EquipmentCard';
import {EquipmentPagination} from './Pagination';
import SkeletonEquipmentGrid from './Skeleton';

export default function EquipmentGrid() {
	const [isFirst, setIsFirst] = useState(true);
	const {isLoad, setIsLoad} = useIsLoad();
	const storeDataFn = useEquipmentListStore(state => state.updateEquipmentsData);
	const equipments = useEquipmentListStore(state => state.equipments);
	const meta = useEquipmentListStore(state => {
		return state.meta;
	});

	useEffect(() => {
		async function handleData() {
			setIsLoad(true);
			const data = await getEquipments({
				meta: {
					page: 1,
					limit: 6,
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
		return <SkeletonEquipmentGrid />;
	}
	return (
		<section
			id="list-equipment"
			aria-label="list-equipment"
			className="w-full lg:w-3/4 xl:w-4/5 mt-12">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{equipments.map(equipment => (
					<EquipmentCard key={equipment.slug} equipment={equipment} />
				))}
			</div>

			{/* Pagination */}
			<EquipmentPagination totalPages={meta?.totalPages || 1} />
		</section>
	);
}
