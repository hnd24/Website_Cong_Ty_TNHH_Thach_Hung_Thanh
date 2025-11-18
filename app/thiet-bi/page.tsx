import {Suspense} from 'react';
import {EquipmentFilters} from './components/EquipmentFilters';
import EquipmentGrid from './components/EquipmentSection';
import SkeletonEquipmentGrid from './components/EquipmentSection/Skeleton';

export default function EquipmentListPage() {
	return (
		<div className="bg-muted/80 mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
			<EquipmentFilters />
			<Suspense fallback={<SkeletonEquipmentGrid />}>
				<EquipmentGrid />
			</Suspense>
		</div>
	);
}
