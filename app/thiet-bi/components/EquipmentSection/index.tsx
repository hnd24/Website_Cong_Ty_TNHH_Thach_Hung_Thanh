'use client';
import {useEquipmentRes} from '@/hooks/use-equipment';
import {useIsLoad} from '@/hooks/use-params';
import {EquipmentCard} from './EquipmentCard';
import {EquipmentPagination} from './Pagination';
import SkeletonEquipmentGrid from './Skeleton';

export default function EquipmentGrid() {
	const equipments = useEquipmentRes(state => state.equipments);
	const meta = useEquipmentRes(state => {
		return state.meta;
	});
	const {isLoad} = useIsLoad();
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
