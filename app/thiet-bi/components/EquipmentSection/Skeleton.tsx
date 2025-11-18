'use client';

import {Skeleton} from '@/components/ui/skeleton';

export default function SkeletonEquipmentGrid() {
	return (
		<section
			id="list-equipment-skeleton"
			aria-label="list-equipment-skeleton"
			className="w-full lg:w-3/4 xl:w-4/5 mt-12">
			{/* Grid skeleton */}
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
				{Array.from({length: 6}).map((_, i) => (
					<SkeletonEquipmentCard key={i} />
				))}
			</div>

			{/* Pagination skeleton */}
			<div className="flex items-center justify-center gap-3 mt-10">
				<Skeleton className="h-9 w-8 rounded-md" />
				<Skeleton className="h-9 w-8 rounded-md" />
				<Skeleton className="h-9 w-8 rounded-md" />
				<Skeleton className="h-9 w-8 rounded-md" />
			</div>
		</section>
	);
}

/* -----------------------------------------
 * Card Skeleton
 * -----------------------------------------
 */

function SkeletonEquipmentCard() {
	return (
		<div className="flex h-full flex-col overflow-hidden rounded-xl border bg-white dark:bg-navy-blue shadow-md p-4">
			{/* Image */}
			<Skeleton className="w-full aspect-[4/3] rounded-md" />

			{/* Title */}
			<Skeleton className="h-5 mt-4 w-3/4" />

			{/* Description */}
			<Skeleton className="h-4 mt-2 w-5/6" />

			{/* Price */}
			<Skeleton className="h-6 mt-4 w-1/2" />
			{/* Status */}
			<Skeleton className="h-6 mt-1 w-1/2" />

			{/* Button */}
			<Skeleton className="h-10 mt-5 w-full rounded-md" />
		</div>
	);
}
