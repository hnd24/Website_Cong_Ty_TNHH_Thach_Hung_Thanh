// components/sections/milestones-section.tsx

import {
	MILESTONES,
	NUMBER_CLIENTS,
	NUMBER_OF_DEVICES,
	NUMBER_PROJECTS_COMPLETED,
	YEARS_OF_EXPERIENCE,
} from '@/constants';

export default function MilestonesSection() {
	const states = [
		{title: 'năm hoạt động', value: YEARS_OF_EXPERIENCE},
		{title: 'công trình đã thi công', value: NUMBER_PROJECTS_COMPLETED},
		{title: 'thiết bị sẵn kho', value: NUMBER_OF_DEVICES},
		{title: 'khách hàng hài lòng', value: NUMBER_CLIENTS},
	];
	return (
		<section id="milestones" className="py-16 sm:py-24 bg-white dark:bg-navy-blue">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-navy-blue dark:text-white sm:text-4xl">
						Dấu Ấn Thạnh Hưng Thành
					</h2>
					<p className="mt-4 text-lg text-dark-gray dark:text-gray-300">
						Những con số biết nói về hành trình phát triển của chúng tôi.
					</p>
				</div>

				{/* 4 stats */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{states.map((state, index) => (
						<div key={index}>
							<p className="text-5xl text-blue-500 font-extrabold text-navy-blue dark:text-white">
								{state.value}+
							</p>
							<p className="mt-2 text-base text-dark-gray dark:text-gray-300 font-medium">
								{state.title}
							</p>
						</div>
					))}
				</div>

				{/* Timeline */}
				<div className="mt-16 max-w-4xl mx-auto">
					<div className="relative">
						<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
						{MILESTONES.map((milestone, index) => {
							if (index % 2 === 0) {
								return (
									<div key={index} className="grid grid-cols-2 gap-x-8">
										<div className=" text-right pr-8">
											<p className="font-bold text-lg text-navy-blue text-primary">
												{milestone.year} – {milestone.event}
											</p>
										</div>
										<div />
									</div>
								);
							} else {
								return (
									<div key={index} className="grid grid-cols-2 gap-x-8">
										<div className="mt-8" />
										{/* 2018 – phải */}
										<div className="text-left pl-8 mt-8">
											<p className="font-bold text-lg text-navy-blue text-primary">
												{milestone.year} – {milestone.event}
											</p>
										</div>
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
