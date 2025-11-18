import {EquipmentSpecificationType} from '@/types';

type Props = {
	specs: EquipmentSpecificationType[];
};

export default function EquipmentSpecs({specs}: Props) {
	return (
		<section className="mt-16 mx-auto bg-white w-full max-w-7xl rounded-lg bg-surface p-8 shadow-md">
			<h2 className="text-3xl font-bold text-primary">Thông số kỹ thuật</h2>
			<div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
				{specs.map(spec => {
					const [label, value] = Object.entries(spec)[0];
					return (
						<div key={label} className="flex border-b border-border-color py-2 ">
							<span className="w-1/2 font-semibold text-text-primary">{label}:</span>
							<span className="w-1/2 text-text-secondary">{value}</span>
						</div>
					);
				})}
			</div>
		</section>
	);
}
