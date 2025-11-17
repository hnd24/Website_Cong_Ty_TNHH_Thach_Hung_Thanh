import {ACHIEVEMENTS} from '@/constants';

type StatItem = {
	label: string;
	value: string | number;
	key: string;
};

export default function StatsBarSection() {
	const stats: StatItem[] = Object.entries(ACHIEVEMENTS)
		.filter(([key]) => key !== 'numberClients')
		.map(([key, value]) => ({
			key,
			label: value.label,
			value: `${value.value}+`,
		}));

	return (
		<section
			id="company-stats"
			aria-labelledby="company-stats-heading"
			className="relative -mt-16">
			<div className="mx-auto max-w-5xl px-4">
				{/* Heading ẩn cho screen reader + SEO */}
				<h2 id="company-stats-heading" className="sr-only">
					Thành tựu và năng lực của CÔNG TY TNHH THẠNH HƯNG THÀNH
				</h2>

				<div className="rounded-xl bg-background p-4 text-center shadow-lg dark:bg-navy-blue md:p-6">
					<dl className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{stats.map(item => (
							<div key={item.key} className="flex flex-col gap-1 rounded-lg p-4">
								<dt className="text-sm font-medium text-gray-600 dark:text-gray-300">
									{item.label}
								</dt>
								<dd className="text-3xl font-bold text-gray-900 dark:text-white">
									{item.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
}
