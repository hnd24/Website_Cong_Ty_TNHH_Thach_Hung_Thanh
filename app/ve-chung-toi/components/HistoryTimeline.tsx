import {MILESTONES} from '@/constants';

export default function HistoryTimeline() {
	return (
		<section
			aria-labelledby="history-heading"
			className="bg-background/80 max-w-5xl mx-auto scroll-mt-20 flex flex-col items-center px-4 py-16  md:py-20"
			id="history-timeline">
			<div className="flex flex-col items-center gap-3 text-center">
				<h2
					id="history-heading"
					className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
					Quá trình hình thành &amp; phát triển
				</h2>
				<p id="history-description" className="max-w-2xl text-[#60758a] dark:text-gray-400">
					Hành trình của chúng tôi qua những cột mốc quan trọng, khẳng định vị thế và sự
					phát triển không ngừng.
				</p>
			</div>
			<ol className="relative mt-8 border-l border-gray-300 dark:border-gray-600">
				{MILESTONES.map((milestone, index) => (
					<li key={milestone.year} className="mb-10 ml-6">
						<div className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue">
							{index + 1}
						</div>
						<time
							dateTime={String(milestone.year)}
							className="text-sm font-medium text-[#60758a] dark:text-gray-400">
							{milestone.year}
						</time>
						<p className="text-lg font-bold text-[#111418] dark:text-white">
							{milestone.description}
						</p>
						<p className="mt-1 text-base text-[#60758a] dark:text-gray-400">
							{milestone.description}
						</p>
					</li>
				))}
			</ol>
		</section>
	);
}
