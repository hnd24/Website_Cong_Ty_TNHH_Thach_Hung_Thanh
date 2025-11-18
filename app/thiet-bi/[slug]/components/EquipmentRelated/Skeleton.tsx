import {Skeleton} from '@/components/ui/skeleton';

type Props = {
	number: number;
};

export default function SkeletonEquipmentRelated({number = 4}: Props) {
	return (
		<section className="mt-16 mx-auto  w-full max-w-7xl ">
			<Skeleton className="h-8 w-1/3 rounded-md" />
			<div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{Array.from({length: number}).map((_, i) => (
					<SkeletonEquipmentCard key={i} />
				))}
			</div>
			<div className="mt-4 mb-4 flex justify-center">
				<Skeleton className="h-10 w-32 rounded-md" />
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
