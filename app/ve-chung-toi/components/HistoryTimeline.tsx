import {MILESTONES} from '@/constants';
import React from 'react';

export default function HistoryTimeline() {
	return (
		<section
			className="bg-background/80 max-w-5xl mx-auto scroll-mt-20 flex flex-col items-center px-4 py-16  md:py-20"
			id="history-timeline">
			<div className="flex flex-col items-center gap-3 text-center">
				<h2 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em]">
					Quá trình hình thành &amp; phát triển
				</h2>
				<p className="max-w-2xl text-[#60758a] dark:text-gray-400">
					Hành trình của chúng tôi qua những cột mốc quan trọng, khẳng định vị thế và sự
					phát triển không ngừng.
				</p>
			</div>
			<div className="w-full">
				<div className="grid grid-cols-[auto_1fr] gap-x-4">
					{MILESTONES.map((milestone, index) => (
						<React.Fragment key={milestone.year}>
							<div className="flex flex-col items-center gap-2">
								<div className="flex size-10 items-center justify-center rounded-full bg-primary-blue/10 text-primary-blue font-bold dark:bg-primary/20">
									<span className="material-symbols-outlined">{index + 1}</span>
								</div>
								{index < MILESTONES.length - 1 && (
									<div className="w-[2px] grow bg-[#dbe0e6] dark:bg-gray-700"></div>
								)}
							</div>
							<div className="flex flex-1 flex-col pb-10 pt-1.5">
								<p className="text-[#60758a] dark:text-gray-400 text-sm font-medium leading-normal">
									{milestone.year}
								</p>
								<p className="text-[#111418] dark:text-white text-lg font-bold leading-normal">
									{milestone.description}
								</p>
								<p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-normal mt-1">
									{milestone.description}
								</p>
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</section>
	);
}
