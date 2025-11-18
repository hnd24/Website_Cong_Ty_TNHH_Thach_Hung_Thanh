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
import {BrandEquipmentEnum, StatusEquipmentEnum, TypeEquipmentEnum} from '@/constants/enum';
import {getEquipments} from '@/data/equipment';
import {useIsLoad, useSearchParams} from '@/hooks/use-params';
import {useEquipmentListStore} from '@/stores/equipment-store';

type EquipmentPaginationProps = {
	totalPages: number;
};

export function EquipmentPagination({totalPages}: EquipmentPaginationProps) {
	const {
		searchParams: {page: currentPage = 1},
		setSearchParams,
	} = useSearchParams();
	const {setIsLoad} = useIsLoad();
	const storeDataFn = useEquipmentListStore(state => state.updateEquipmentsData);
	const {searchParams} = useSearchParams();
	const param = {
		...(searchParams.typeEquipment !== TypeEquipmentEnum.All && {
			typeEquipment: searchParams.typeEquipment,
		}),
		...(searchParams.brandEquipment !== BrandEquipmentEnum.All && {
			brandEquipment: searchParams.brandEquipment,
		}),
		...(searchParams.statusEquipment !== StatusEquipmentEnum.All && {
			statusEquipment: searchParams.statusEquipment,
		}),
		priceRange: searchParams.priceRange,
	};

	const handleClick = async function handleData(page: number) {
		setIsLoad(true);
		setSearchParams({page});
		const data = await getEquipments({
			...param,
			meta: {
				page,
				limit: 6,
			},
		});
		storeDataFn(data);
		setIsLoad(false);
	};

	if (totalPages <= 1) return null;

	return (
		<Pagination className=" mt-10 mb-10 justify-center">
			<PaginationContent>
				{/* Previous */}
				<PaginationItem>
					<PaginationPrevious
						onClick={async () => {
							if (currentPage > 1) {
								await handleClick(currentPage - 1);
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
									onClick={async () => {
										await handleClick(page);
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
						onClick={async () => {
							if (currentPage < totalPages) {
								await handleClick(currentPage + 1);
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
