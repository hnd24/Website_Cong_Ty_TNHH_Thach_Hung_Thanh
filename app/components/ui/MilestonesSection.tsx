// components/sections/milestones-section.tsx

import {ACHIEVEMENTS, MILESTONES} from '@/constants';

export default function MilestonesSection() {
	const stats = Object.values(ACHIEVEMENTS).map(achievement => ({
		title: achievement.label,
		value: achievement.value,
	}));

	return (
		<section
			id="milestones"
			aria-labelledby="milestones-heading"
			className="bg-muted/80 py-16 sm:py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2
						id="milestones-heading"
						className="text-3xl font-bold tracking-tight text-navy-blue dark:text-white sm:text-4xl">
						Dấu ấn Thạnh Hưng Thành
					</h2>
					<p className="mt-4 text-lg text-dark-gray dark:text-gray-300">
						Những cột mốc và con số biết nói thể hiện hành trình phát triển trong lĩnh
						vực thi công xây dựng và cho thuê thiết bị của chúng tôi.
					</p>
				</div>

				{/* Stats */}
				<div className="mb-16">
					<dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
						{stats.map(stat => (
							<div key={stat.title}>
								<dd className="text-5xl font-extrabold text-blue-500 text-navy-blue dark:text-white">
									{stat.value}+
								</dd>
								<dt className="mt-2 text-base font-medium text-dark-gray dark:text-gray-300">
									{stat.title}
								</dt>
							</div>
						))}
					</dl>
				</div>

				{/* Timeline */}
				<div className="mx-auto max-w-4xl">
					<div className="relative">
						<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />
						<ol className="space-y-0">
							{MILESTONES.map((milestone, index) => {
								const content = (
									<>
										<p className="font-bold text-lg text-primary">
											<time dateTime={String(milestone.year)}>
												{milestone.year}
											</time>{' '}
											– {milestone.event}
										</p>
										{milestone.description && (
											<p className="mt-1 text-sm text-dark-gray dark:text-gray-300">
												{milestone.description}
											</p>
										)}
									</>
								);

								if (index % 2 === 0) {
									return (
										<li
											key={`${milestone.year}-${milestone.event}-left`}
											className="grid grid-cols-2 gap-x-8">
											<div className="pr-8 text-right">{content}</div>
											<div />
										</li>
									);
								}

								return (
									<li
										key={`${milestone.year}-${milestone.event}-right`}
										className="grid grid-cols-2 gap-x-8">
										<div className="mt-8" />
										<div className="mt-8 pl-8 text-left">{content}</div>
									</li>
								);
							})}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
}
