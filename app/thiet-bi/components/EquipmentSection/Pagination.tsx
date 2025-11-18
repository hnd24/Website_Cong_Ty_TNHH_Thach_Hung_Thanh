'use client';

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import {useIsLoad, useSearchParams} from '@/hooks/use-params';

type EquipmentPaginationProps = {
	totalPages: number;
};

export function EquipmentPagination({totalPages}: EquipmentPaginationProps) {
	const {
		searchParams: {page: currentPage = 1},
		setSearchParams,
	} = useSearchParams();
	const {setIsLoad} = useIsLoad();
	// if (totalPages <= 1) return null;

	return (
		<Pagination className=" mt-10 mb-10 justify-center">
			<PaginationContent>
				{/* Previous */}
				<PaginationItem>
					<PaginationPrevious
						onClick={() => {
							if (currentPage > 1) {
								setSearchParams({
									page: currentPage - 1,
								});
								setIsLoad(true);
							}
						}}
						aria-disabled={currentPage === 1}
						className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
					/>
				</PaginationItem>

				{/* Các số trang */}
				{Array.from({length: totalPages}).map((_, index) => {
					const page = index + 1;

					// chỉ hiện: trang đầu, cuối, hiện tại và 2 bên cạnh
					if (page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1) {
						return (
							<PaginationItem key={page}>
								<PaginationLink
									onClick={() => {
										setSearchParams({
											page: page,
										});
										setIsLoad(true);
									}}
									isActive={page === currentPage}>
									{page}
								</PaginationLink>
							</PaginationItem>
						);
					}

					// chèn ...
					if (page === currentPage - 2 || page === currentPage + 2) {
						return (
							<PaginationItem key={page}>
								<PaginationEllipsis />
							</PaginationItem>
						);
					}

					return null;
				})}

				{/* Next */}
				<PaginationItem>
					<PaginationNext
						onClick={() => {
							if (currentPage < totalPages) {
								setSearchParams({
									page: currentPage + 1,
								});
								setIsLoad(true);
							}
						}}
						aria-disabled={currentPage === totalPages}
						className={
							currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
