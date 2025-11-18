import {EquipmentFilters} from './components/EquipmentFilters';
import EquipmentGrid from './components/EquipmentSection';

export default function EquipmentListPage() {
	return (
		<div className="scroll-mt-20 mb-10 bg-muted/80 mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
			<EquipmentFilters />
			<EquipmentGrid />
		</div>
	);
}
