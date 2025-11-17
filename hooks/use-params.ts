import {StatusEquipment, TrademarkEquipment, TypeEquipment} from '@/constants/enum';
import {
	parseAsBoolean,
	parseAsInteger,
	parseAsStringEnum,
	useQueryState,
	useQueryStates,
} from 'nuqs';

export const useParams = () => {
	const [params, setParams] = useQueryStates({
		typeEquipment: parseAsStringEnum<TypeEquipment>(Object.values(TypeEquipment)).withDefault(
			TypeEquipment.All,
		),
		statusEquipment: parseAsStringEnum<StatusEquipment>(
			Object.values(StatusEquipment),
		).withDefault(StatusEquipment.All),
		trademarkEquipment: parseAsStringEnum<TrademarkEquipment>(
			Object.values(TrademarkEquipment),
		).withDefault(TrademarkEquipment.All),
		rent: parseAsInteger.withDefault(100),
	});

	return {
		params,
		setParams,
	};
};

export const useIsLoad = () => {
	const [isLoad, setIsLoad] = useQueryState('isLoad', parseAsBoolean.withDefault(false));
	return {
		isLoad,
		setIsLoad,
	};
};
