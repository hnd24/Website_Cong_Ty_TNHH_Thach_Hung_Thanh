import {NUMBER_OF_DEVICES, NUMBER_PROJECTS_COMPLETED, YEARS_OF_EXPERIENCE} from '@/constants';

export default function StatsBarSection() {
	const stats = [
		{label: 'Năm kinh nghiệm', value: YEARS_OF_EXPERIENCE},
		{label: 'Dự án hoàn thành', value: NUMBER_PROJECTS_COMPLETED},
		{label: 'Thiết bị sẵn kho', value: NUMBER_OF_DEVICES},
	];
	return (
		<section className="relative -mt-16">
			<div className="mx-auto max-w-5xl px-4">
				<div className="grid grid-cols-1 gap-4 rounded-xl bg-white p-4 text-center shadow-lg dark:bg-navy-blue md:grid-cols-3 md:p-6">
					{stats.map(item => (
						<div key={item.label} className="flex flex-col gap-1 rounded-lg p-4">
							<p className="text-sm font-medium text-dark-gray text-gray-600">
								{item.label}
							</p>
							<p className="text-3xl font-bold text-navy-blue text-gray-900">
								{item.value}+
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
