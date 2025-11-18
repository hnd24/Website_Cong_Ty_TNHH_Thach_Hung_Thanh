import {MAX_PRICE, MIN_PRICE} from '@/constants';
import {BrandEquipmentEnum, StatusEquipmentEnum, TypeEquipmentEnum} from '@/constants/enum';
import {
	parseAsArrayOf,
	parseAsBoolean,
	parseAsInteger,
	parseAsStringEnum,
	useQueryState,
	useQueryStates,
} from 'nuqs';

export const useSearchParams = () => {
	const [searchParams, setSearchParams] = useQueryStates({
		typeEquipment: parseAsStringEnum<TypeEquipmentEnum>(
			Object.values(TypeEquipmentEnum),
		).withDefault(TypeEquipmentEnum.All),
		statusEquipment: parseAsStringEnum<StatusEquipmentEnum>(
			Object.values(StatusEquipmentEnum),
		).withDefault(StatusEquipmentEnum.All),
		brandEquipment: parseAsStringEnum<BrandEquipmentEnum>(
			Object.values(BrandEquipmentEnum),
		).withDefault(BrandEquipmentEnum.All),
		priceRange: parseAsArrayOf(parseAsInteger).withDefault([MIN_PRICE, MAX_PRICE]),
		page: parseAsInteger.withDefault(1),
	});

	return {
		searchParams,
		setSearchParams,
	};
};

export const useIsLoad = () => {
	const [isLoad, setIsLoad] = useQueryState('isLoad', parseAsBoolean.withDefault(false));
	return {
		isLoad,
		setIsLoad,
	};
};
