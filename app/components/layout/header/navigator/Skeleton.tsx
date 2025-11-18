import {Skeleton} from '@/components/ui/skeleton';

export function NavigatorSkeleton() {
	return (
		<>
			{/* Desktop View Skeleton: Ẩn trên mobile, hiện trên desktop (md:flex) */}
			<div className="hidden items-center gap-6 md:flex">
				{/* Giả lập 4 link menu */}
				{Array.from({length: 4}).map((_, i) => (
					<Skeleton key={i} className="h-5 w-16 rounded-md bg-gray-200/50" />
				))}
			</div>

			{/* Mobile View Skeleton: Hiện trên mobile, ẩn trên desktop (md:hidden) */}
			{/* Giả lập nút Hamburger menu */}
			<div className="md:hidden">
				<Skeleton className="h-9 w-9 rounded-md bg-gray-200/50" />
			</div>
		</>
	);
}
