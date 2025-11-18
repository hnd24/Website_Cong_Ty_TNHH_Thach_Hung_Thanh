import {Card} from '@/components/ui/card';
import {ACHIEVEMENTS} from '@/constants';
export function AchievementsSection() {
	const achievements = Object.values(ACHIEVEMENTS);
	return (
		<section
			id="achievements"
			aria-labelledby="achievements-heading"
			className="py-12 bg-muted/80">
			<div className="max-w-5xl mx-auto  px-4">
				<Card className="rounded-2xl border-none bg-primary-blue/5 p-8 sm:p-10 dark:bg-background-dark/50">
					<div className="mb-10 flex flex-col items-center gap-3 text-center">
						<h2
							id="achievements-heading"
							className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">
							Thành tựu &amp; Năng lực
						</h2>
						<p className="max-w-2xl text-sm sm:text-base text-[#60758a] dark:text-gray-400">
							Những con số biết nói minh chứng cho sự nỗ lực, uy tín và năng lực của
							chúng tôi trong lĩnh vực thi công và cho thuê thiết bị xây dựng tại Long
							An và các khu vực lân cận.
						</p>
					</div>

					<dl className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
						{achievements.map(item => (
							<div
								key={item.label}
								className="flex flex-col items-center"
								aria-label={item.ariaLabel}>
								<dt className="sr-only">{item.label}</dt>
								<dd>
									<p className="text-4xl font-black text-primary-blue lg:text-5xl">
										{item.value}+
									</p>
									<p className="mt-1 text-sm font-medium text-[#111418] dark:text-gray-300">
										{item.label}
									</p>
								</dd>
							</div>
						))}
					</dl>
				</Card>
			</div>
		</section>
	);
}
