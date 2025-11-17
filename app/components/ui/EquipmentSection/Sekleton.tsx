// components/ui/EquipmentSectionSkeleton.tsx
import {Button} from '@/components/ui/button';
import {Skeleton} from '@/components/ui/skeleton';

export default function EquipmentSectionSkeleton() {
	return (
		<section id="featured_equipments" className="bg-background/80 py-12 sm:py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<Skeleton className="mx-auto h-8 w-64 rounded-md" />
					<Skeleton className="mx-auto mt-4 h-4 w-80 rounded-md" />
				</div>

				{/* Grid skeleton */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{[1, 2, 3, 4].map(i => (
						<div
							key={i}
							className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background p-0 shadow-sm">
							{/* Image skeleton */}
							<Skeleton className="h-40 w-full rounded-none" />

							{/* Content skeleton */}
							<div className="flex flex-col gap-3 p-4">
								<Skeleton className="h-5 w-3/4 rounded-md" />
								<Skeleton className="h-4 w-1/2 rounded-md" />
								<Skeleton className="mt-2 h-8 w-full rounded-md" />
							</div>
						</div>
					))}
				</div>

				{/* Button skeleton */}
				<div className="mt-12 flex justify-center">
					<Button size="lg" className="text-base font-semibold" disabled>
						Đang tải ...
					</Button>
				</div>
			</div>
		</section>
	);
}
