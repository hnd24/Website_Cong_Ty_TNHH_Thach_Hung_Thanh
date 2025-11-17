// components/sections/projects-section-skeleton.tsx

import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';

export default function ProjectsSectionSkeleton() {
	return (
		<section
			id="completed_projects"
			className="scroll-mt-24 bg-muted/40 py-12 dark:bg-background ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<Skeleton className="mx-auto h-8 w-64 rounded-lg" />
					<Skeleton className="mx-auto mt-4 h-4 w-96 rounded-lg" />
				</div>

				{/* Grid 2 cột */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
					{[1, 2, 3, 4].map(i => (
						<div
							key={i}
							className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm p-0">
							{/* Skeleton hình */}
							<Skeleton className="h-64 w-full rounded-none" />

							{/* Skeleton mô tả */}
							<div className="p-5 space-y-3">
								<Skeleton className="h-5 w-3/4" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-5/6" />

								<Skeleton className="mt-4 h-9 w-40 rounded-md" />
							</div>
						</div>
					))}
				</div>
				{/* Nút “Xem tất cả công trình” */}
				<div className="mt-10 flex justify-center">
					<Button
						disabled
						variant="outline"
						size="lg"
						className="min-w-[220px] text-base font-semibold">
						Đang tải...
					</Button>
				</div>
			</div>
		</section>
	);
}
